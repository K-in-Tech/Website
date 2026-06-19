"use client";

type Props = {
  solved: number;
  easy: number;
  medium: number;
  hard: number;
  blogs: number;
  projects: number;
  xp: number;
};

export default function Achievements({
  solved,
  easy,
  medium,
  hard,
  blogs,
  projects,
  xp,
}: Props) {
  const achievements = [
    {
      title: "First Blood",
      icon: "🎯",
      unlocked: solved >= 1,
      description: "Solve your first problem",
    },

    {
      title: "Problem Solver",
      icon: "🏅",
      unlocked: solved >= 10,
      description: "Solve 10 coding problems",
    },

    {
      title: "Algorithm Master",
      icon: "🔥",
      unlocked: solved >= 50,
      description: "Solve 50 coding problems",
    },

    {
      title: "Easy Crusher",
      icon: "🟢",
      unlocked: easy >= 25,
      description: "Solve 25 easy problems",
    },

    {
      title: "Medium Warrior",
      icon: "🟡",
      unlocked: medium >= 20,
      description: "Solve 20 medium problems",
    },

    {
      title: "Hard Challenger",
      icon: "🔴",
      unlocked: hard >= 10,
      description: "Solve 10 hard problems",
    },

    {
      title: "Tech Writer",
      icon: "✍️",
      unlocked: blogs >= 5,
      description: "Publish 5 blogs",
    },

    {
      title: "Content Creator",
      icon: "📚",
      unlocked: blogs >= 10,
      description: "Publish 10 blogs",
    },

    {
      title: "Builder",
      icon: "🚀",
      unlocked: projects >= 1,
      description: "Publish first project",
    },

    {
      title: "Startup Founder",
      icon: "💎",
      unlocked: projects >= 5,
      description: "Publish 5 projects",
    },

    {
      title: "XP Hunter",
      icon: "⚡",
      unlocked: xp >= 500,
      description: "Reach 500 XP",
    },

    {
      title: "Legend",
      icon: "👑",
      unlocked: xp >= 1000,
      description: "Reach 1000 XP",
    },
  ];

  const unlockedCount = achievements.filter(
    (a) => a.unlocked
  ).length;

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">
            Achievements
          </h2>

          <p className="text-gray-400 mt-1">
            {unlockedCount} / {achievements.length} unlocked
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className={`rounded-3xl border p-5 transition ${
              achievement.unlocked
                ? "border-yellow-500/30 bg-yellow-500/10"
                : "border-white/10 bg-white/5 opacity-60"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-4xl">
                {achievement.icon}
              </span>

              {achievement.unlocked && (
                <span className="text-green-400 text-sm">
                  Unlocked
                </span>
              )}
            </div>

            <h3 className="font-bold text-lg mt-4">
              {achievement.title}
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}