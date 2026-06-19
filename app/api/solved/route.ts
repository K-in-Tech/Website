import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

// ========================================
// GET SOLVED PROBLEMS
// ========================================

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json([]);
    }

    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
      include: {
        solved: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    return NextResponse.json(user?.solved ?? []);
  } catch (error) {
    console.error("GET SOLVED ERROR:", error);

    return NextResponse.json([]);
  }
}

// ========================================
// XP CALCULATOR
// ========================================

function getXpForDifficulty(
  difficulty: string
) {
  switch (difficulty) {
    case "Easy":
      return 10;

    case "Medium":
      return 25;

    case "Hard":
      return 50;

    default:
      return 10;
  }
}

// ========================================
// POST SOLVED / UNSOLVED
// ========================================

export async function POST(
  req: Request
) {
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

    const {
      problemSlug,
      difficulty,
      solved,
    } = await req.json();

    if (!problemSlug) {
      return NextResponse.json(
        {
          success: false,
          error:
            "problemSlug is required",
        },
        {
          status: 400,
        }
      );
    }

    const user =
      await prisma.user.findUnique({
        where: {
          clerkId: userId,
        },
      });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    // ====================================
    // MARK AS SOLVED
    // ====================================

    if (solved) {
      const existing =
        await prisma.solvedProblem.findUnique(
          {
            where: {
              userId_problemSlug: {
                userId: user.id,
                problemSlug,
              },
            },
          }
        );

      // First solve
      if (!existing) {
        await prisma.solvedProblem.create({
          data: {
            userId: user.id,
            problemSlug,
            difficulty,
          },
        });

        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            xp: {
              increment:
                getXpForDifficulty(
                  difficulty
                ),
            },
          },
        });
      }

      // Already solved → update difficulty only
      else {
        await prisma.solvedProblem.update({
          where: {
            userId_problemSlug: {
              userId: user.id,
              problemSlug,
            },
          },
          data: {
            difficulty,
          },
        });
      }
    }

    // ====================================
    // MARK AS UNSOLVED
    // ====================================

    else {
      const existing =
        await prisma.solvedProblem.findUnique(
          {
            where: {
              userId_problemSlug: {
                userId: user.id,
                problemSlug,
              },
            },
          }
        );

      if (existing) {
        await prisma.solvedProblem.delete({
          where: {
            userId_problemSlug: {
              userId: user.id,
              problemSlug,
            },
          },
        });

        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            xp: {
              decrement:
                getXpForDifficulty(
                  existing.difficulty
                ),
            },
          },
        });
      }
    }

    // ====================================
    // RETURN UPDATED STATS
    // ====================================

    const solvedProblems =
      await prisma.solvedProblem.findMany({
        where: {
          userId: user.id,
        },
      });

    const easy =
      solvedProblems.filter(
        (p) =>
          p.difficulty === "Easy"
      ).length;

    const medium =
      solvedProblems.filter(
        (p) =>
          p.difficulty === "Medium"
      ).length;

    const hard =
      solvedProblems.filter(
        (p) =>
          p.difficulty === "Hard"
      ).length;

    return NextResponse.json({
      success: true,

      solved: {
        easy,
        medium,
        hard,
        total:
          easy + medium + hard,
      },
    });
  } catch (error) {
    console.error(
      "POST SOLVED ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to update solved state",
      },
      {
        status: 500,
      }
    );
  }
}