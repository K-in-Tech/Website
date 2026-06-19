"use client";

import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Code2,
} from "lucide-react";

type SolvedProblem = {
  id: string;
  problemSlug: string;
  difficulty: string;
  createdAt: string;
};

export default function RecentSolved({
  solved,
}: {
  solved: SolvedProblem[];
}) {
  const difficultyStyles = {
    Easy:
      "bg-green-500/10 text-green-400 border-green-500/20",
    Medium:
      "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Hard:
      "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            Recently Solved
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Your latest coding victories
          </p>
        </div>

        <Link
          href="/coding"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
        >
          Practice More
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Empty State */}
      {solved.length === 0 ? (
        <div className="border border-dashed border-white/10 rounded-2xl py-16 text-center">
          <Code2
            size={48}
            className="mx-auto text-gray-600"
          />

          <h3 className="text-xl font-semibold mt-4">
            No Problems Solved Yet
          </h3>

          <p className="text-gray-400 mt-2">
            Start solving coding challenges and earn XP.
          </p>

          <Link
            href="/coding"
            className="inline-flex mt-5 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
          >
            Start Coding
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {solved.map((problem) => (
            <Link
              key={problem.id}
              href={`/coding/${problem.problemSlug}`}
              className="
                flex items-center justify-between
                rounded-2xl
                border border-white/10
                bg-white/[0.02]
                hover:bg-white/[0.05]
                hover:border-blue-500/20
                transition-all
                p-4
                group
              "
            >
              {/* Left */}
              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2
                    size={20}
                    className="text-green-400"
                  />
                </div>

                <div>
                  <h3 className="font-semibold group-hover:text-blue-400 transition">
                    {problem.problemSlug
                      .split("-")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1)
                      )
                      .join(" ")}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Solved on{" "}
                    {new Date(
                      problem.createdAt
                    ).toLocaleDateString()}
                  </p>
                </div>

              </div>

              {/* Right */}
              <div className="flex items-center gap-3">

                <span
                  className={`px-3 py-1 rounded-full border text-xs font-medium ${
                    difficultyStyles[
                      problem.difficulty as keyof typeof difficultyStyles
                    ]
                  }`}
                >
                  {problem.difficulty}
                </span>

                <ArrowRight
                  size={18}
                  className="text-gray-500 group-hover:text-blue-400 transition"
                />

              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}