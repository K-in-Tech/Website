"use client";

import Link from "next/link";
import {
  Plus,
  Code2,
  FolderGit2,
  PenSquare,
  BookMarked,
  Trophy,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Solve Problems",
    description: "Practice DSA and earn XP",
    href: "/coding",
    icon: Code2,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
  },
  {
    title: "Create Blog",
    description: "Share your knowledge",
    href: "/blogs/new",
    icon: PenSquare,
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20",
  },
  {
    title: "Publish Project",
    description: "Showcase your work",
    href: "/projects/new",
    icon: FolderGit2,
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/20",
  },
  {
    title: "Bookmarks",
    description: "Continue learning",
    href: "/bookmarks",
    icon: BookMarked,
    color: "from-orange-500/20 to-yellow-500/20",
    border: "border-orange-500/20",
  },
  {
    title: "Leaderboard",
    description: "Compete globally",
    href: "/leaderboard",
    icon: Trophy,
    color: "from-yellow-500/20 to-amber-500/20",
    border: "border-yellow-500/20",
  },
  {
    title: "Add Note",
    description: "Save insights",
    href: "/notes",
    icon: Plus,
    color: "from-red-500/20 to-rose-500/20",
    border: "border-red-500/20",
  },
];

export default function QuickActions() {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold">
            Quick Actions
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Jump directly into your workflow
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className={`
                group relative overflow-hidden
                rounded-3xl
                border ${action.border}
                bg-white/[0.03]
                backdrop-blur-xl
                p-6
                hover:bg-white/[0.06]
                transition-all duration-300
                hover:-translate-y-1
              `}
            >
              {/* Gradient Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-100 transition`}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>

                <h3 className="font-semibold text-lg">
                  {action.title}
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                  {action.description}
                </p>

                <div className="flex items-center gap-2 mt-5 text-sm text-blue-400">
                  Open
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}