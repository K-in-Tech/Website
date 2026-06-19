import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import {
  auth,
  currentUser,
} from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

export async function GET() {
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

    let user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },

      include: {
        blogs: {
          orderBy: {
            createdAt: "desc",
          },
          take: 5,
        },

        projects: {
          orderBy: {
            createdAt: "desc",
          },
          take: 5,
        },

        solved: {
          orderBy: {
            createdAt: "desc",
          },
        },

        bookmarks: true,
        notes: true,
      },
    });

    // ==================================
    // CREATE USER IF MISSING
    // ==================================

    if (!user) {
      user = await prisma.user.create({
        data: {
          clerkId: userId,

          name:
            clerkUser?.fullName ||
            clerkUser?.firstName ||
            clerkUser?.username ||  
            "Developer",

          email:
            clerkUser?.emailAddresses?.[0]
              ?.emailAddress || null,

          imageUrl:
            clerkUser?.imageUrl || null,

          xp: 0,
          streak: 0,
        },

        include: {
          blogs: {
            orderBy: {
              createdAt: "desc",
            },
            take: 5,
          },

          projects: {
            orderBy: {
              createdAt: "desc",
            },
            take: 5,
          },

          solved: {
            orderBy: {
              createdAt: "desc",
            },
          },

          bookmarks: true,
          notes: true,
        },
      });
    }

    // ==================================
    // AUTO UPDATE OLD USERS
    // ==================================

    if (
      !user.name ||
      user.name === "Developer"
    ) {
      user = await prisma.user.update({
        where: {
          id: user.id,
        },

        data: {
          name:
            clerkUser?.fullName ||
            clerkUser?.firstName ||
            clerkUser?.username ||
            user.name,

          imageUrl:
            clerkUser?.imageUrl ||
            user.imageUrl,
        },

        include: {
          blogs: {
            orderBy: {
              createdAt: "desc",
            },
            take: 5,
          },

          projects: {
            orderBy: {
              createdAt: "desc",
            },
            take: 5,
          },

          solved: {
            orderBy: {
              createdAt: "desc",
            },
          },

          bookmarks: true,
          notes: true,
        },
      });
    }

    // ==================================
    // SOLVED STATS
    // ==================================

    const easySolved = user.solved.filter(
      (p) => p.difficulty === "Easy"
    ).length;

    const mediumSolved = user.solved.filter(
      (p) => p.difficulty === "Medium"
    ).length;

    const hardSolved = user.solved.filter(
      (p) => p.difficulty === "Hard"
    ).length;

    const totalSolved =
      easySolved +
      mediumSolved +
      hardSolved;

    // ==================================
    // ACTIVITY CHART
    // ==================================

    const chartMap = new Map<
      string,
      number
    >();

    user.solved.forEach((item) => {
      const date = item.createdAt
        .toISOString()
        .split("T")[0];

      chartMap.set(
        date,
        (chartMap.get(date) || 0) + 1
      );
    });

    const chartData = Array.from(
      chartMap.entries()
    ).map(([date, solved]) => ({
      date,
      solved,
    }));

    const heatmap = Array.from(
      chartMap.entries()
    ).map(([date, count]) => ({
      date,
      count,
    }));

    const recentSolved =
      user.solved.slice(0, 10);

    // ==================================
    // RESPONSE
    // ==================================

    return NextResponse.json({
      success: true,

      user: {
        id: user.id,
        name:
          user.name ||
          "Developer",

        email:
          user.email || null,

        imageUrl:
          user.imageUrl || null,
      },

      xp: user.xp,

      streak:
        user.streak || 0,

      solved: {
        easy: easySolved,
        medium: mediumSolved,
        hard: hardSolved,
        total: totalSolved,
      },

      stats: {
        solved: totalSolved,

        easySolved,

        mediumSolved,

        hardSolved,

        blogs:
          user.blogs.length,

        projects:
          user.projects.length,

        notes:
          user.notes.length,

        bookmarks:
          user.bookmarks.length,

        xp: user.xp,
      },

      recentBlogs:
        user.blogs,

      recentProjects:
        user.projects,

      recentSolved,

      chartData,

      heatmap,
    });
  } catch (error) {
    console.error(
      "DASHBOARD ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to load dashboard",
      },
      {
        status: 500,
      }
    );
  }
}