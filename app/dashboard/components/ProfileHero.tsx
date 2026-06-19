"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  imageUrl?: string | null;
  xp: number;
  streak: number;

  solved: number;
  blogs: number;
  projects: number;
};

export default function ProfileHero({
  name,
  imageUrl,
  xp,
  streak,
  solved,
  blogs,
  projects,
}: Props) {
  const level = Math.floor(xp / 100) + 1;

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent backdrop-blur-xl">

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 p-8 lg:p-10">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* LEFT */}
          <div className="flex items-center gap-6">

            <div className="relative">

              <Image
                src={
                  imageUrl ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    name
                  )}&background=111827&color=ffffff`
                }
                alt={name}
                width={110}
                height={110}
                className="rounded-full border-4 border-white/10"
              />

              <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-black" />

            </div>

            <div>

              <p className="text-blue-400 text-sm font-medium">
                Developer Dashboard
              </p>

              <h1 className="text-4xl font-black mt-1">
                {name}
              </h1>

              <div className="flex flex-wrap gap-3 mt-4">

                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                  Level {level}
                </span>

                <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm">
                  🔥 {streak} Day Streak
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex gap-3">

            <Link
              href="/projects/new"
              className="px-5 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
            >
              New Project
            </Link>

            <Link
              href="/blogs/new"
              className="px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-400 transition"
            >
              Write Blog
            </Link>

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">

          <StatCard
            title="XP Earned"
            value={xp.toLocaleString()}
          />

          <StatCard
            title="Problems Solved"
            value={solved}
          />

          <StatCard
            title="Blogs Written"
            value={blogs}
          />

          <StatCard
            title="Projects Built"
            value={projects}
          />

        </div>

      </div>
    </section>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h3 className="text-3xl font-black mt-2">
        {value}
      </h3>

    </div>
  );
}