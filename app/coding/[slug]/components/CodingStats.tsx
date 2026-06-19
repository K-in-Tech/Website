"use client";

import { Trophy, Target, Zap, RefreshCw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Stats = {
  xp: number;
  solved: number;
};

const TOTAL_PROBLEMS = 150;

export default function CodingStats() {
  const [stats, setStats] = useState<Stats>({
    xp: 0,
    solved: 0,
  });

  const [loading, setLoading] =
    useState(true);

  const fetchStats = async () => {
    try {
      const res = await fetch(
        "/api/dashboard",
        {
          cache: "no-store",
        }
      );

      const data = await res.json();

      setStats({
        xp: data.xp || 0,
        solved:
          data.solved?.total || 0,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const progress =
    useMemo(
      () =>
        Math.round(
          (stats.solved /
            TOTAL_PROBLEMS) *
            100
        ),
      [stats.solved]
    );

  const level =
    Math.floor(stats.xp / 500) +
    1;

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-4">

        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-28 rounded-2xl bg-white/5 animate-pulse"
          />
        ))}

      </div>
    );
  }

  return (
    <div className="space-y-4">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-lg font-bold">
            Coding Progress
          </h2>

          <p className="text-sm text-gray-500">
            Track your DSA journey
          </p>
        </div>

        <button
          onClick={fetchStats}
          className="p-2 rounded-xl border border-white/10 hover:bg-white/5 transition"
        >
          <RefreshCw size={16} />
        </button>

      </div>

      {/* CARDS */}

      <div className="grid md:grid-cols-3 gap-4">

        {/* XP */}

        <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-yellow-400">
                Total XP
              </p>

              <h3 className="text-3xl font-black mt-1">
                {stats.xp}
              </h3>
            </div>

            <Trophy className="text-yellow-400" />
          </div>

          <div className="mt-3 text-xs text-yellow-300">
            Level {level}
          </div>

        </div>

        {/* SOLVED */}

        <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-green-400">
                Solved
              </p>

              <h3 className="text-3xl font-black mt-1">
                {stats.solved}
              </h3>
            </div>

            <Target className="text-green-400" />
          </div>

          <div className="mt-3 text-xs text-green-300">
            Problems Completed
          </div>

        </div>

        {/* PROGRESS */}

        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-blue-400">
                Progress
              </p>

              <h3 className="text-3xl font-black mt-1">
                {progress}%
              </h3>
            </div>

            <Zap className="text-blue-400" />
          </div>

          <div className="mt-4">

            <div className="h-2 rounded-full bg-white/10 overflow-hidden">

              <div
                className="h-full bg-blue-500 transition-all duration-700"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>

        </div>

      </div>

      {/* SUMMARY */}

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

        <div className="flex flex-wrap items-center gap-6 text-sm">

          <span className="text-gray-400">
            Total Problems:
            <span className="text-white ml-2 font-semibold">
              {TOTAL_PROBLEMS}
            </span>
          </span>

          <span className="text-gray-400">
            Remaining:
            <span className="text-white ml-2 font-semibold">
              {Math.max(
                TOTAL_PROBLEMS -
                  stats.solved,
                0
              )}
            </span>
          </span>

          <span className="text-gray-400">
            Current Level:
            <span className="text-yellow-400 ml-2 font-semibold">
              {level}
            </span>
          </span>

        </div>

      </div>

    </div>
  );
}