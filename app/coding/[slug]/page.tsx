import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Tag,
  Trophy,
  Brain,
  FileCode2,
} from "lucide-react";
import {
              BookOpen,
              GraduationCap,
              ExternalLink,
} from "lucide-react";
import { problems } from "@/data/problems";

import ProblemActions from "./components/ProblemActions";
import HintCard from "./components/HintCard";
import NotesSection from "./components/NotesSection";
import RelatedProblems from "./components/RelatedProblems";
import CodeEditorCard from "./components/CodeEditorCard";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProblemPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const problem = problems.find(
    (p) => p.slug === slug
  );

  if (!problem) return notFound();

  const relatedProblems = problems
    .filter(
      (p) =>
        p.slug !== problem.slug &&
        p.tags.some((tag) =>
          problem.tags.includes(tag)
        )
    )
    .slice(0, 4);

  const xpReward =
    problem.difficulty === "Easy"
      ? 25
      : problem.difficulty === "Medium"
        ? 50
        : 100;

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}

      <section className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <Link
            href="/coding"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <ArrowLeft size={16} />
            Back to Problems
          </Link>

          <div className="mt-8">

            <div className="flex flex-wrap gap-3 mb-6">

              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${problem.difficulty === "Easy"
                    ? "bg-green-500/20 text-green-400"
                    : problem.difficulty ===
                      "Medium"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
              >
                {problem.difficulty}
              </span>

              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
                {problem.category}
              </span>

            </div>

            <h1 className="text-5xl md:text-6xl font-black">
              {problem.title}
            </h1>

            <p className="text-gray-400 text-lg mt-5 max-w-4xl">
              {problem.description}
            </p>

            {/* STATS */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

              <MetaCard
                icon={<Trophy size={18} />}
                label="XP Reward"
                value={`${xpReward}`}
              />

              <MetaCard
                icon={<Tag size={18} />}
                label="Tags"
                value={`${problem.tags.length}`}
              />

              <MetaCard
                icon={<Brain size={18} />}
                label="Difficulty"
                value={problem.difficulty}
              />

              <MetaCard
                icon={<FileCode2 size={18} />}
                label="Category"
                value={problem.category}
              />

            </div>

            {/* TAGS */}

            <div className="flex flex-wrap gap-2 mt-8">

              {problem.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20"
                >
                  #{tag}
                </span>
              ))}

            </div>

            {/* EXTERNAL LINKS */}

            

            {(problem.leetcode || problem.gfg) && (
              <div className="mt-10">

                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Additional Resources
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">

                  {problem.leetcode && (
                    <a
                      href={problem.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
            group
            rounded-2xl
            border
            border-yellow-500/20
            bg-gradient-to-br
            from-yellow-500/10
            via-yellow-500/5
            to-transparent
            p-5
            transition-all
            duration-300
            hover:border-yellow-500/50
            hover:-translate-y-1
          "
                    >
                      <div className="flex items-start justify-between">

                        <div className="flex gap-4">

                          <div className="w-12 h-12 rounded-xl bg-yellow-500/15 flex items-center justify-center">
                            <BookOpen
                              size={22}
                              className="text-yellow-400"
                            />
                          </div>

                          <div>

                            <h4 className="font-semibold text-lg">
                              LeetCode
                            </h4>

                            <p className="text-sm text-gray-400 mt-1">
                              Solve this problem on
                              LeetCode with official
                              test cases and judge.
                            </p>

                          </div>

                        </div>

                        <ExternalLink
                          size={18}
                          className="
                text-yellow-400
                opacity-70
                transition
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
                        />

                      </div>

                      <div className="mt-4 text-sm text-yellow-400 font-medium">
                        Open Resource →
                      </div>

                    </a>
                  )}

                  {problem.gfg && (
                    <a
                      href={problem.gfg}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
            group
            rounded-2xl
            border
            border-green-500/20
            bg-gradient-to-br
            from-green-500/10
            via-green-500/5
            to-transparent
            p-5
            transition-all
            duration-300
            hover:border-green-500/50
            hover:-translate-y-1
          "
                    >
                      <div className="flex items-start justify-between">

                        <div className="flex gap-4">

                          <div className="w-12 h-12 rounded-xl bg-green-500/15 flex items-center justify-center">
                            <GraduationCap
                              size={22}
                              className="text-green-400"
                            />
                          </div>

                          <div>

                            <h4 className="font-semibold text-lg">
                              GeeksforGeeks
                            </h4>

                            <p className="text-sm text-gray-400 mt-1">
                              Explore editorials,
                              explanations and
                              alternative approaches.
                            </p>

                          </div>

                        </div>

                        <ExternalLink
                          size={18}
                          className="
                text-green-400
                opacity-70
                transition
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
                        />

                      </div>

                      <div className="mt-4 text-sm text-green-400 font-medium">
                        Open Resource →
                      </div>

                    </a>
                  )}

                </div>

              </div>
            )}

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-[1fr_450px] gap-8">

          {/* LEFT */}

          <div className="space-y-8">

            <Card title="Problem Statement">
              <p className="text-gray-300 leading-8">
                {problem.description}
              </p>
            </Card>

            <Card title="Example">

              <Field
                label="Input"
                value={
                  problem.example?.input
                }
              />

              <Field
                label="Output"
                value={
                  problem.example?.output
                }
              />

              <Field
                label="Explanation"
                value={
                  problem.example
                    ?.explanation
                }
              />

            </Card>

            {problem.intuition && (
              <Card title="Intuition">

                <p className="text-gray-300 leading-8">
                  {problem.intuition}
                </p>

              </Card>
            )}

            <Card title="Hints">

              <div className="space-y-4">

                {(problem.hints ?? [])
                  .length > 0 ? (
                  problem.hints.map(
                    (hint, i) => (
                      <HintCard
                        key={i}
                        index={i}
                        hint={hint}
                      />
                    )
                  )
                ) : (
                  <p className="text-gray-500">
                    No hints available
                  </p>
                )}

              </div>

            </Card>

            <Card title="Test Cases">

              <div className="space-y-4">

                {(problem.testCases ??
                  []).length > 0 ? (
                  problem.testCases.map(
                    (
                      test,
                      index
                    ) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-white/10 bg-black p-5"
                      >

                        <div className="mb-4">

                          <p className="text-sm text-gray-500 mb-2">
                            Input
                          </p>

                          <pre className="bg-white/5 p-3 rounded-lg overflow-x-auto">
                            {test.input}
                          </pre>

                        </div>

                        <div>

                          <p className="text-sm text-green-400 mb-2">
                            Expected Output
                          </p>

                          <pre className="bg-white/5 p-3 rounded-lg overflow-x-auto">
                            {test.output}
                          </pre>

                        </div>

                      </div>
                    )
                  )
                ) : (
                  <p className="text-gray-500">
                    No test cases available
                  </p>
                )}

              </div>

            </Card>

            <NotesSection
              slug={problem.slug}
            />

          </div>

          {/* SIDEBAR */}

          <aside className="space-y-6 lg:sticky lg:top-6 h-fit">

            <CodeEditorCard />

            <ProblemActions
              slug={problem.slug}
              difficulty={
                problem.difficulty
              }
            />

            <RelatedProblems
              problems={
                relatedProblems
              }
            />

          </aside>

        </div>

      </section>

    </main>
  );
}

/* -------------------------------- */
/* REUSABLE UI */
/* -------------------------------- */

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
      <h2 className="text-2xl font-bold mb-6">
        {title}
      </h2>

      {children}
    </div>
  );
}

function Field({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div className="mb-5">

      <p className="text-gray-500 text-sm mb-2">
        {label}
      </p>

      <div className="rounded-xl border border-white/10 bg-black p-4 font-mono overflow-x-auto">
        {value || "N/A"}
      </div>

    </div>
  );
}

function MetaCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

      <div className="flex items-center gap-2 text-blue-400">
        {icon}
      </div>

      <p className="text-sm text-gray-500 mt-3">
        {label}
      </p>

      <p className="font-bold text-lg mt-1">
        {value}
      </p>

    </div>
  );
}