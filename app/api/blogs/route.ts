import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

// ======================================
// GET BLOGS
// ======================================

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    const skip = (page - 1) * limit;

    const where: any = {};

    if (category && category !== "all") {
      where.category = category;
    }

    if (search) {
      where.OR = [
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: search,
            mode: "insensitive",
          },
        },
      ];
    }

    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        where,
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: limit,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              imageUrl: true,
              clerkId: true,
            },
          },
        },
      }),

      prisma.blog.count({
        where,
      }),
    ]);

    return NextResponse.json({
      success: true,
      blogs,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("GET BLOGS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch blogs",
      },
      {
        status: 500,
      }
    );
  }
}

// ======================================
// CREATE BLOG
// ======================================

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const clerkUser = await currentUser();

    const body = await req.json();

    const {
      title,
      content,
      excerpt,
      category,
      imageUrl,
      tags,
    } = body;

    if (!title?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Title is required",
        },
        {
          status: 400,
        }
      );
    }

    if (!content?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Content is required",
        },
        {
          status: 400,
        }
      );
    }

    let slug = generateSlug(title);

    const existingSlug = await prisma.blog.findUnique({
      where: {
        slug,
      },
    });

    if (existingSlug) {
      slug = `${slug}-${Date.now()}`;
    }

    let user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          clerkId: userId,
          name:
            clerkUser?.fullName ||
            clerkUser?.username ||
            "Developer",
          email:
            clerkUser?.emailAddresses?.[0]
              ?.emailAddress || null,
          imageUrl: clerkUser?.imageUrl || null,
          xp: 0,
        },
      });
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        excerpt:
          excerpt ||
          content.substring(0, 180),

        slug,

        category: category || "tech",

        imageUrl: imageUrl || null,

        tags: Array.isArray(tags)
          ? tags.join(",")
          : tags || "",

        authorId: user.id,
      },

      include: {
        author: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
            clerkId: true,
          },
        },
      },
    });

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        xp: {
          increment: 20,
        },
      },
    });

    return NextResponse.json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error(
      "CREATE BLOG ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to create blog",
      },
      {
        status: 500,
      }
    );
  }
}