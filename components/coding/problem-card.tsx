"use client";

import Link from "next/link";
import { useProgress } from "@/store/use-progress";

type Props = {
  id: string;
  title: string;
  difficulty: string;
  topic: string;
};

export default function ProblemCard({
  id,
  title,
  difficulty,
  topic,
}: Props) {
  const solvedProblems = useProgress(
    (state) => state.solvedProblems
  );

  const solved = solvedProblems.includes(id);

  return (
    <Link href={`/coding/${id}`}>

      <div className="p-5 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">

        <div className="flex items-center justify-between">

          <h3 className="text-lg font-semibold">
            {title}
          </h3>

          {solved && (
            <span className="text-green-400 text-sm">
              Solved ✓
            </span>
          )}

        </div>

        <div className="flex gap-3 mt-2 text-sm text-gray-400">

          <span>{topic}</span>

          <span>•</span>

          <span
            className={
              difficulty === "Easy"
                ? "text-green-400"
                : difficulty === "Medium"
                ? "text-yellow-400"
                : "text-red-400"
            }
          >
            {difficulty}
          </span>

        </div>

      </div>

    </Link>
  );
}