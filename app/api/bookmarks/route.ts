import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json([]);
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (!user) {
    return NextResponse.json([]);
  }

  const bookmarks =
    await prisma.bookmark.findMany({
      where: {
        userId: user.id,
      },
    });

  return NextResponse.json(bookmarks);
}

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { problemSlug } =
    await req.json();

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (!user) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  const existing =
    await prisma.bookmark.findUnique({
      where: {
        userId_problemSlug: {
          userId: user.id,
          problemSlug,
        },
      },
    });

  if (existing) {
    await prisma.bookmark.delete({
      where: {
        userId_problemSlug: {
          userId: user.id,
          problemSlug,
        },
      },
    });

    return NextResponse.json({
      bookmarked: false,
    });
  }

  await prisma.bookmark.create({
    data: {
      userId: user.id,
      problemSlug,
    },
  });

  return NextResponse.json({
    bookmarked: true,
  });
}