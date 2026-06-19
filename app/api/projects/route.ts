import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";

// ========================================
// GET ALL PROJECTS
// ========================================

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
            xp: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      projects: projects || [],
    });
  } catch (error) {
    console.error("GET PROJECTS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        projects: [],
        error: "Failed to fetch projects",
      },
      { status: 500 }
    );
  }
}

// ========================================
// CREATE PROJECT
// ========================================

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const clerkUser = await currentUser();

    const body = await req.json();

    const {
      title,
      description,
      techStack,
      githubUrl,
      liveUrl,
      imageUrl,
      featured,
    } = body;

    // ====================================
    // VALIDATION
    // ====================================

    if (!title || !description || !techStack) {
      return NextResponse.json(
        {
          success: false,
          error: "Title, description and tech stack are required",
        },
        { status: 400 }
      );
    }

    // ====================================
    // FIND OR CREATE USER
    // ====================================

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
            clerkUser?.emailAddresses?.[0]?.emailAddress || null,
          imageUrl: clerkUser?.imageUrl || null,
          xp: 0,
        },
      });
    }

    // ====================================
    // CREATE PROJECT
    // ====================================

    const project = await prisma.project.create({
      data: {
        title,
        description,
        techStack,
        githubUrl: githubUrl || null,
        liveUrl: liveUrl || null,
        imageUrl: imageUrl || null,
        featured: featured || false,

        authorId: user.id,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
            xp: true,
          },
        },
      },
    });

    // ====================================
    // XP REWARD
    // ====================================

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        xp: {
          increment: 25,
        },
      },
    });

    return NextResponse.json({
      success: true,
      project,
    });
  } catch (error) {
    console.error("CREATE PROJECT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create project",
      },
      { status: 500 }
    );
  }
}