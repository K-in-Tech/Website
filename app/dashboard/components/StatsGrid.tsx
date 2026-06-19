"use client";

import {
  Trophy,
  Code2,
  FolderGit2,
  PenSquare,
  Bookmark,
  Flame,
  Zap,
  Target,
} from "lucide-react";

type Props = {
  xp: number;
  streak: number;

  solved: number;
  easy: number;
  medium: number;
  hard: number;

  blogs: number;
  projects: number;
  bookmarks: number;
};

export default function StatsGrid({
  xp,
  streak,
  solved,
  easy,
  medium,
  hard,
  blogs,
  projects,
  bookmarks,
}: Props) {
  const stats = [
    {
      title: "Total XP",
      value: xp,
      icon: Trophy,
      color:
        "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400",
    },
    {
      title: "Problems Solved",
      value: solved,
      icon: Code2,
      color:
        "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
    },
    {
      title: "Easy",
      value: easy,
      icon: Target,
      color:
        "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
    },
    {
      title: "Medium",
      value: medium,
      icon: Zap,
      color:
        "from-yellow-500/20 to-amber-500/20",
      iconColor: "text-yellow-400",
    },
    {
      title: "Hard",
      value: hard,
      icon: Flame,
      color:
        "from-red-500/20 to-rose-500/20",
      iconColor: "text-red-400",
    },
    {
      title: "Blogs",
      value: blogs,
      icon: PenSquare,
      color:
        "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
    },
    {
      title: "Projects",
      value: projects,
      icon: FolderGit2,
      color:
        "from-green-500/20 to-teal-500/20",
      iconColor: "text-green-400",
    },
    {
  title: "Bookmarks",
  value: bookmarks,
  icon: Bookmark,
  color:
    "from-pink-500/20 to-purple-500/20",
  iconColor: "text-pink-400",
},
  ];

  return (
    <section>
      <div className="mb-5">
        <h2 className="text-2xl font-bold">
          Overview
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          Track your progress across coding,
          projects and content creation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-5
                hover:border-white/20
                hover:bg-white/[0.05]
                transition-all
                duration-300
              "
            >
              <div
                className={`
                  absolute inset-0
                  bg-gradient-to-br
                  ${stat.color}
                  opacity-0
                  hover:opacity-100
                  transition
                `}
              />

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-gray-400 text-sm">
                      {stat.title}
                    </p>

                    <h3 className="text-4xl font-black mt-2">
                      {stat.value}
                    </h3>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <Icon
                      size={22}
                      className={stat.iconColor}
                    />
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}