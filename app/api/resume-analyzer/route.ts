import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const { resume, role } = await req.json();

    if (!resume) {
      return NextResponse.json(
        {
          error: "Resume content is required",
        },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are an ATS Resume Reviewer.

IMPORTANT:
Return ONLY valid JSON.
Do NOT use markdown.
Do NOT use **bold** text.
Do NOT use bullet points.
Do NOT use numbered lists.

Return EXACTLY this schema:

{
  "overallScore": 0,
  "atsScore": 0,
  "strengths": ["string"],
  "weaknesses": ["string"],
  "missingSkills": ["string"],
  "summary": "string",
  "suggestions": ["string"],
  "recommendedRoadmap": {
    "name": "string",
    "description": "string"
  },
  "recommendedProjects": [
    {
      "name": "string",
      "description": "string",
      "skillsToLearn": ["string"]
    }
  ],
  "recommendedDSATopics": ["string"]
}

Resume:
${resume}
`;

    const result =
      await model.generateContent(prompt);

    const response =
      result.response.text();

    const cleaned =
      response
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    let parsed;

    try {
      parsed = JSON.parse(cleaned);
    } catch {
      return NextResponse.json(
        {
          error:
            "Failed to parse AI response",
          raw: cleaned,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(parsed);
  } catch (error) {
    console.error(
      "Resume Analyzer Error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Failed to analyze resume",
      },
      { status: 500 }
    );
  }
}