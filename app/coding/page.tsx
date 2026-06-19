"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, CheckCircle2, Trophy } from "lucide-react";
import { problems } from "@/data/problems";

type Difficulty = "All" | "Easy" | "Medium" | "Hard";
type StatusFilter =
  | "All"
  | "Solved"
  | "Unsolved";

const ITEMS_PER_PAGE = 10;

type SolvedItem = {
  problemSlug: string;
};

export default function CodingPage() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] =
    useState<Difficulty>("All");
  const [status, setStatus] =
    useState<StatusFilter>("All");
  const [activeTags, setActiveTags] =
    useState<string[]>([]);

  const [page, setPage] = useState(1);

  const [solved, setSolved] = useState<string[]>([]);

  // ==========================
  // FETCH SOLVED
  // ==========================
  useEffect(() => {
    const fetchSolved = async () => {
      try {
        const res = await fetch("/api/solved");

        if (!res.ok) {
          setSolved([]);
          return;
        }

        const raw = await res.json();

        const solvedArray: SolvedItem[] =
          Array.isArray(raw)
            ? raw
            : Array.isArray(raw?.solved)
              ? raw.solved
              : [];

        setSolved(
          solvedArray
            .map((item) => item.problemSlug)
            .filter(Boolean)
        );
      } catch {
        setSolved([]);
      }
    };

    fetchSolved();
  }, []);

  // ==========================
  // TAGS
  // ==========================
  const allTags = useMemo(() => {
    const set = new Set<string>();

    problems.forEach((p) =>
      p.tags.forEach((tag) => set.add(tag))
    );

    return [...set];
  }, []);

  // ==========================
  // FILTER
  // ==========================
  const filteredProblems = useMemo(() => {
    const q = search.toLowerCase();

    return problems.filter((p) => {
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.shortDescription
          .toLowerCase()
          .includes(q) ||
        p.tags.some((t) =>
          t.toLowerCase().includes(q)
        );

      const matchesDifficulty =
        difficulty === "All" ||
        p.difficulty === difficulty;
      const matchesStatus =
        status === "All"
          ? true
          : status === "Solved"
            ? solved.includes(p.slug)
            : !solved.includes(p.slug);
      const matchesTags =
        activeTags.length === 0 ||
        activeTags.every((tag) =>
          p.tags.includes(tag)
        );

      return (
        matchesSearch &&
        matchesDifficulty &&
        matchesTags &&
        matchesStatus
      );
    });
  }, [
  search,
  difficulty,
  status,
  solved,
  activeTags,
]);

  // ==========================
  // PAGINATION
  // ==========================
  const totalPages = Math.ceil(
    filteredProblems.length /
    ITEMS_PER_PAGE
  );

  const paginatedProblems = useMemo(() => {
    const start =
      (page - 1) * ITEMS_PER_PAGE;

    return filteredProblems.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [filteredProblems, page]);

  // ==========================
  // STATS
  // ==========================
  const easyCount = problems.filter(
    (p) => p.difficulty === "Easy"
  ).length;

  const mediumCount = problems.filter(
    (p) => p.difficulty === "Medium"
  ).length;

  const hardCount = problems.filter(
    (p) => p.difficulty === "Hard"
  ).length;

  const solvedPercent = Math.round(
    (solved.length /
      Math.max(problems.length, 1)) *
    100
  );
  const solvedCount =
    solved.length;

  const unsolvedCount =
    problems.length -
    solved.length;

  // ==========================
  // TAG TOGGLE
  // ==========================
  const toggleTag = (tag: string) => {
    setPage(1);

    setActiveTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="text-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-6">
              <Trophy size={16} />
              Coding Interview Preparation
            </div>

            <h1 className="text-6xl font-black">
              Master
              <span className="text-blue-400">
                {" "}
                Data Structures
              </span>
              <br />
              & Algorithms
            </h1>

            <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
              Practice curated coding problems,
              track progress, and prepare for
              top tech interviews.
            </p>

          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-4 gap-6 mt-14">

            <StatCard
              value={problems.length}
              label="Problems"
            />

            <StatCard
              value={solved.length}
              label="Solved"
            />

            <StatCard
              value={`${solvedPercent}%`}
              label="Progress"
            />

            <StatCard
              value={allTags.length}
              label="Topics"
            />

          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">

        {/* FILTERS */}
        {/* FILTERS */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 mb-8">

          {/* SEARCH */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-4 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search problems, tags, patterns..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full bg-black border border-white/10 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* FILTER ROW */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">

            {/* DIFFICULTY */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-3">
                Difficulty
              </h3>

              <div className="flex flex-wrap gap-3">
                {(
                  [
                    "All",
                    "Easy",
                    "Medium",
                    "Hard",
                  ] as Difficulty[]
                ).map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setDifficulty(item);
                      setPage(1);
                    }}
                    className={`px-4 py-2 rounded-xl transition ${difficulty === item
                        ? "bg-blue-500 text-white"
                        : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* STATUS */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-3">
                Status
              </h3>

              <div className="flex flex-wrap gap-3">

                <button
                  onClick={() => {
                    setStatus("All");
                    setPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl transition ${status === "All"
                      ? "bg-blue-500 text-white"
                      : "bg-white/5 border border-white/10"
                    }`}
                >
                  All
                </button>

                <button
                  onClick={() => {
                    setStatus("Solved");
                    setPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl transition ${status === "Solved"
                      ? "bg-green-500 text-white"
                      : "bg-white/5 border border-white/10"
                    }`}
                >
                   Solved
                </button>

                <button
                  onClick={() => {
                    setStatus("Unsolved");
                    setPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl transition ${status === "Unsolved"
                      ? "bg-orange-500 text-white"
                      : "bg-white/5 border border-white/10"
                    }`}
                >
                   Unsolved
                </button>

              </div>
            </div>

          </div>

          {/* COUNTERS */}
          <div className="flex flex-wrap gap-6 mt-8 text-sm">

            <span className="text-green-400 font-medium">
              Easy: {easyCount}
            </span>

            <span className="text-yellow-400 font-medium">
              Medium: {mediumCount}
            </span>

            <span className="text-red-400 font-medium">
              Hard: {hardCount}
            </span>

            <span className="text-blue-400 font-medium">
              Solved: {solved.length}
            </span>

            <span className="text-gray-400 font-medium">
              Unsolved: {problems.length - solved.length}
            </span>

            <span className="text-purple-400 font-medium">
              Showing: {filteredProblems.length}
            </span>

          </div>

          {/* TAGS */}
          <div className="mt-8">

            <h3 className="text-sm font-semibold text-gray-400 mb-3">
              Topics
            </h3>

            <div className="flex flex-wrap gap-2">

              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() =>
                    toggleTag(tag)
                  }
                  className={`px-3 py-1.5 rounded-full text-xs transition ${activeTags.includes(tag)
                      ? "bg-purple-500 text-white"
                      : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                    }`}
                >
                  #{tag}
                </button>
              ))}

            </div>

          </div>

        </div>

        {/* TABLE */}
        <div className="rounded-3xl border border-white/10 overflow-hidden">

          <div className="grid grid-cols-12 px-6 py-4 bg-white/5 text-gray-400 text-sm font-medium">
            <div className="col-span-6">
              Problem
            </div>
            <div className="col-span-3">
              Tags
            </div>
            <div className="col-span-2">
              Difficulty
            </div>
            <div className="col-span-1 text-right">
              Status
            </div>
          </div>

          {paginatedProblems.map((problem) => {
            const isSolved =
              solved.includes(
                problem.slug
              );

            return (
              <Link
                key={problem.slug}
                href={`/coding/${problem.slug}`}
                className="grid grid-cols-12 px-6 py-5 border-t border-white/5 hover:bg-white/5 transition"
              >
                <div className="col-span-6 flex items-center gap-3">

                  {isSolved && (
                    <CheckCircle2
                      size={18}
                      className="text-green-400"
                    />
                  )}

                  <div>
                    <h3 className="font-medium">
                      {problem.title}
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      {
                        problem.shortDescription
                      }
                    </p>
                  </div>

                </div>

                <div className="col-span-3 flex flex-wrap gap-2">
                  {problem.tags
                    .slice(0, 2)
                    .map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                </div>

                <div className="col-span-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${problem.difficulty ===
                        "Easy"
                        ? "bg-green-500/20 text-green-400"
                        : problem.difficulty ===
                          "Medium"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                  >
                    {
                      problem.difficulty
                    }
                  </span>
                </div>

                <div className="col-span-1 text-right text-sm">
                  {isSolved
                    ? "✅"
                    : "—"}
                </div>
              </Link>
            );
          })}
        </div>

        {/* PAGINATION */}
<div className="flex flex-wrap items-center justify-center gap-2 mt-10">
  {/* First */}
  <button
    onClick={() => setPage(1)}
    disabled={page === 1}
    className="px-4 h-11 rounded-xl border border-white/10 bg-white/5 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10 transition"
  >
    {"<<"}
  </button>

  {/* Prev */}
  <button
    onClick={() => setPage(page - 1)}
    disabled={page === 1}
    className="px-4 h-11 rounded-xl border border-white/10 bg-white/5 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10 transition"
  >
    {"<"}
  </button>

  {/* First page */}
  {page > 3 && (
    <>
      <button
        onClick={() => setPage(1)}
        className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
      >
        1
      </button>

      {page > 4 && (
        <span className="px-2 text-zinc-400">...</span>
      )}
    </>
  )}

  {/* Dynamic Pages Around Current */}
  {Array.from(
    { length: totalPages },
    (_, i) => i + 1
  )
    .filter(
      (p) =>
        p >= page - 2 &&
        p <= page + 2
    )
    .map((p) => (
      <button
        key={p}
        onClick={() => setPage(p)}
        className={`w-11 h-11 rounded-xl transition ${
          page === p
            ? "bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20"
            : "bg-white/5 border border-white/10 hover:bg-white/10"
        }`}
      >
        {p}
      </button>
    ))}

  {/* Last page */}
  {page < totalPages - 2 && (
    <>
      {page < totalPages - 3 && (
        <span className="px-2 text-zinc-400">...</span>
      )}

      <button
        onClick={() =>
          setPage(totalPages)
        }
        className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
      >
        {totalPages}
      </button>
    </>
  )}

  {/* Next */}
  <button
    onClick={() => setPage(page + 1)}
    disabled={page === totalPages}
    className="px-4 h-11 rounded-xl border border-white/10 bg-white/5 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10 transition"
  >
    {">"}
  </button>

  {/* Last */}
  <button
    onClick={() =>
      setPage(totalPages)
    }
    disabled={page === totalPages}
    className="px-4 h-11 rounded-xl border border-white/10 bg-white/5 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10 transition"
  >
    {">>"}
  </button>
</div>

      </section>
    </main>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-3xl font-black">
        {value}
      </h3>

      <p className="text-gray-400 mt-2">
        {label}
      </p>
    </div>
  );
}