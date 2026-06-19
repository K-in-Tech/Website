import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  try {
    const body =
      await req.json();

    const {
      code,
      language,
      problem,
    } = body;

    if (
      !code ||
      !language ||
      !problem
    ) {
      return NextResponse.json(
        {
          error:
            "Code, language and problem are required",
        },
        {
          status: 400,
        }
      );
    }

    const prompt = `
You are a senior Data Structures & Algorithms mentor.

Analyze the submitted solution.

Problem:
${problem}

Language:
${language}

Code:
${code}

Return your answer in markdown.

Use this exact format:

# Overview

Briefly explain what the solution does.

# Approach

Explain the logic step-by-step.

# Time Complexity

Explain time complexity.

# Space Complexity

Explain space complexity.

# Optimizations

Suggest better approaches if possible.

# Mistakes

Mention bugs, edge cases, or improvements.

# Interview Feedback

Give feedback as if this solution was submitted during a coding interview.

Keep explanations beginner-friendly.
`;

    const response =
      await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt,
                  },
                ],
              },
            ],
          }),
        }
      );

    if (!response.ok) {
      throw new Error(
        "Gemini request failed"
      );
    }

    const data =
      await response.json();

    const explanation =
      data?.candidates?.[0]
        ?.content?.parts?.[0]
        ?.text ||
      "No explanation generated.";

    return NextResponse.json({
      success: true,
      explanation,
    });
  } catch (error) {
    console.error(
      "AI EXPLAIN ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to generate explanation",
      },
      {
        status: 500,
      }
    );
  }
}