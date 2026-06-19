import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import {
  auth,
  currentUser,
} from "@clerk/nextjs/server";

export async function POST(
  req: Request
) {
  try {
    const { userId } =
      await auth();

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

    const clerkUser =
      await currentUser();

    const body =
      await req.json();

    const xp =
      Number(body?.xp) || 0;

    if (xp <= 0) {
      return NextResponse.json(
        {
          success: false,
          error:
            "XP must be greater than 0",
        },
        {
          status: 400,
        }
      );
    }

    let user =
      await prisma.user.findUnique({
        where: {
          clerkId: userId,
        },
      });

    // Auto create user
    if (!user) {
      user =
        await prisma.user.create({
          data: {
            clerkId: userId,

            name:
              clerkUser?.fullName ||
              clerkUser?.username ||
              "Developer",

            email:
              clerkUser
                ?.emailAddresses?.[0]
                ?.emailAddress ||
              null,

            imageUrl:
              clerkUser?.imageUrl ||
              null,

            xp: 0,
          },
        });
    }

    const updatedUser =
      await prisma.user.update({
        where: {
          id: user.id,
        },

        data: {
          xp: {
            increment: xp,
          },
        },

        select: {
          id: true,
          name: true,
          xp: true,
          streak: true,
        },
      });

    return NextResponse.json({
      success: true,

      message:
        "XP updated successfully",

      user: updatedUser,
    });
  } catch (error) {
    console.error(
      "UPDATE XP ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to update XP",
      },
      {
        status: 500,
      }
    );
  }
}