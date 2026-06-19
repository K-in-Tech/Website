import { NextResponse } from "next/server";

// later replace with Prisma DB
export async function GET() {
  try {
    // MOCK LOGIC (replace with DB later)

    const stats = {
      subscribers: "10K+",
      tutorials: 120,
      codingProblems: 500,
      projects: 42,
      youtubeLatestVideo: {
        title: "Learn DSA in 30 Days",
        videoId: "dQw4w9WgXcQ", // replace later
      },
    };

    return NextResponse.json(stats);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}