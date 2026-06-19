"use client";

import Link from "next/link";

export default function StatsSection({
  subscribers,
  tutorials,
  codingProblems,
  projects,
  youtubeUrl,
}: any) {
  return (
    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold">Platform Stats</h2>
        <p className="text-gray-400 mt-4">
          Real learning ecosystem overview
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-3xl font-bold">{subscribers}</h2>
          <p className="text-gray-400 mt-2">YouTube Subs</p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-3xl font-bold">{tutorials}</h2>
          <p className="text-gray-400 mt-2">Tutorials</p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-3xl font-bold">{codingProblems}</h2>
          <p className="text-gray-400 mt-2">Coding Problems</p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h2 className="text-3xl font-bold">{projects}</h2>
          <p className="text-gray-400 mt-2">Projects</p>
        </div>

      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">

        <a
          href={youtubeUrl}
          target="_blank"
          className="px-6 py-3 bg-red-500 rounded-xl font-semibold"
        >
          Subscribe
        </a>

        <Link
          href="/blogs"
          className="px-6 py-3 border rounded-xl"
        >
          Tutorials
        </Link>

        <Link
          href="/projects"
          className="px-6 py-3 border rounded-xl"
        >
          Projects
        </Link>

      </div>

    </section>
  );
}