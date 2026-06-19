import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        xp: "desc",
      },

      include: {
        blogs: {
          select: {
            id: true,
          },
        },

        projects: {
          select: {
            id: true,
          },
        },

        solved: {
          select: {
            id: true,
          },
        },
      },
    });

    const leaderboard = users.map(
      (user, index) => ({
        rank: index + 1,

        id: user.id,

        name:
          user.name ||
          "Developer",

        imageUrl:
          user.imageUrl ||
          null,

        xp: user.xp,

        streak:
          user.streak || 0,

        blogs:
          user.blogs.length,

        projects:
          user.projects.length,

        solved:
          user.solved.length,
      })
    );

    return NextResponse.json({
      success: true,
      leaderboard,
    });
  } catch (error) {
    console.error(
      "LEADERBOARD ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to fetch leaderboard",
      },
      {
        status: 500,
      }
    );
  }
}