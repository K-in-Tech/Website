"use client";

import { useState } from "react";

type ProjectRecommendation = {
  name: string;
  description?: string;
  skillsToLearn?: string[];
};

type RoadmapRecommendation =
  | string
  | {
    name: string;
    description?: string;
  };

type AnalysisResult = {
  overallScore: number;
  atsScore: number;
  strengths: string[];
  weaknesses: string[];
  missingSkills: string[];
  summary: string;
  suggestions: string[];
  recommendedProjects: (
    | string
    | ProjectRecommendation
  )[];
  recommendedRoadmap: RoadmapRecommendation;
  recommendedDSATopics: string[];
};

export default function ResumeAnalyzer() {
  const [resume, setResume] = useState("");
  const [role, setRole] = useState("Software Developer");
  const [result, setResult] =
    useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function analyzeResume() {
    if (!resume.trim()) return;

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        "/api/resume-analyzer",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            resume,
            role,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error ||
          "Failed to analyze resume"
        );
      }

      console.log(data);

      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError(
        err.message ||
        "Something went wrong"
      );
      setResult(null);
    } finally {
      setLoading(false);
    }

  }

  return (<div className="max-w-5xl mx-auto"> <div className="space-y-4">
    <select
      value={role}
      onChange={(e) =>
        setRole(e.target.value)
      }
      className="
w-full
rounded-xl
border
border-white/10
bg-white/5
p-3
outline-none
"
    > <option>
        Software Developer </option> <option>
        Frontend Developer </option> <option>
        Backend Developer </option> <option>
        Full Stack Developer </option> <option>
        AI Engineer </option> <option>
        DevOps Engineer </option> </select>

    <textarea
      value={resume}
      onChange={(e) =>
        setResume(e.target.value)
      }
      placeholder="Paste your resume here..."
      className="
        w-full
        h-72
        rounded-xl
        border
        border-white/10
        bg-white/5
        p-4
        outline-none
      "
    />

    <button
      onClick={analyzeResume}
      disabled={loading}
      className="
        rounded-xl
        bg-blue-500
        px-6
        py-3
        font-semibold
        text-white
        hover:bg-blue-600
        disabled:opacity-50
      "
    >
      {loading
        ? "Analyzing..."
        : "Analyze Resume"}
    </button>

    {error && (
      <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
        {error}
      </div>
    )}
  </div>

    {result && (
      <div className="mt-10 space-y-6">

        {/* Scores */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">
              Overall Score
            </h3>

            <p className="mt-2 text-4xl font-bold text-green-400">
              {result.overallScore}/100
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">
              ATS Score
            </h3>

            <p className="mt-2 text-4xl font-bold text-blue-400">
              {result.atsScore}/100
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-3 text-xl font-semibold">
            AI Summary
          </h3>

          <p className="text-gray-300">
            {result.summary}
          </p>
        </div>

        {/* Strengths */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-3 text-xl font-semibold text-green-400">
            Strengths
          </h3>

          <ul className="space-y-2">
            {result.strengths?.map(
              (item, index) => (
                <li
                  key={`${item}-${index}`}
                >
                  ✅ {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Weaknesses */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-3 text-xl font-semibold text-red-400">
            Weaknesses
          </h3>

          <ul className="space-y-2">
            {result.weaknesses?.map(
              (item, index) => (
                <li
                  key={`${item}-${index}`}
                >
                  ❌ {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Missing Skills */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-3 text-xl font-semibold text-yellow-400">
            Missing Skills
          </h3>

          <div className="flex flex-wrap gap-2">
            {result.missingSkills?.map(
              (
                skill,
                index
              ) => (
                <span
                  key={`${skill}-${index}`}
                  className="
                  rounded-full
                  bg-yellow-500/20
                  px-3
                  py-1
                  text-sm
                "
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* Suggestions */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-3 text-xl font-semibold">
            Suggestions
          </h3>

          <ul className="space-y-2">
            {result.suggestions?.map(
              (item, index) => (
                <li
                  key={`${item}-${index}`}
                >
                  💡 {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Roadmap */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-3 text-xl font-semibold">
            Recommended Roadmap
          </h3>

          {typeof result.recommendedRoadmap ===
            "string" ? (
            <p className="font-medium text-blue-400">
              {
                result.recommendedRoadmap
              }
            </p>
          ) : (
            <div>
              <p className="font-medium text-blue-400">
                {
                  result
                    .recommendedRoadmap
                    ?.name
                }
              </p>

              {result
                .recommendedRoadmap
                ?.description && (
                  <p className="mt-2 text-gray-400">
                    {
                      result
                        .recommendedRoadmap
                        .description
                    }
                  </p>
                )}
            </div>
          )}
        </div>

        {/* Projects */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-4 text-xl font-semibold">
            Recommended Projects
          </h3>

          <div className="space-y-4">
            {result.recommendedProjects?.map(
              (
                project,
                index
              ) => {
                if (
                  typeof project ===
                  "string"
                ) {
                  return (
                    <div
                      key={index}
                      className="rounded-xl border border-white/10 p-4"
                    >
                      🚀 {project}
                    </div>
                  );
                }

                return (
                  <div
                    key={
                      project.name ||
                      index
                    }
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <h4 className="font-semibold">
                      🚀 {project.name}
                    </h4>

                    {project.description && (
                      <p className="mt-2 text-sm text-gray-400">
                        {
                          project.description
                        }
                      </p>
                    )}

                    {project.skillsToLearn
                      ?.length >
                      0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.skillsToLearn.map(
                            (
                              skill,
                              skillIndex
                            ) => (
                              <span
                                key={`${skill}-${skillIndex}`}
                                className="rounded-full bg-blue-500/20 px-3 py-1 text-xs"
                              >
                                {skill}
                              </span>
                            )
                          )}
                        </div>
                      )}
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* DSA */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-3 text-xl font-semibold">
            Recommended DSA Topics
          </h3>

          <div className="flex flex-wrap gap-2">
            {result.recommendedDSATopics?.map(
              (
                topic,
                index
              ) => (
                <span
                  key={`${topic}-${index}`}
                  className="rounded-full bg-blue-500/20 px-3 py-1 text-sm"
                >
                  {topic}
                </span>
              )
            )}
          </div>
        </div>

      </div>
    )}
  </div>

  );
}
