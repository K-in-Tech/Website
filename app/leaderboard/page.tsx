import { prisma } from "@/lib/prisma";
import Link from "next/link";
import LeaderboardClient from "./LeaderboardClient";
import { auth } from "@clerk/nextjs/server";
import { getProfileRoute } from "@/lib/profile-route";
export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getLeaderboard() {
  try {
    const users = await prisma.user.findMany({
  orderBy: {
    xp: "desc",
  },
  take: 100,
  select: {
    id: true,
    clerkId: true, // 👈 add this
    name: true,
    imageUrl: true,
    xp: true,
    streak: true,
  },
    });

    return users;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function LeaderboardPage() {
  const users = await getLeaderboard();
  const topThree = users.slice(0, 3);
  const highestXP = users[0]?.xp || 0;

  const { userId } = await auth();

  return (
    <main className="min-h-screen bg-black text-white">
      <LeaderboardClient />

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">

          <div className="inline-flex px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 text-sm mb-6">
            Global Rankings
          </div>

          <h1 className="text-6xl font-black">
            🏆 Leaderboard
          </h1>

          <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto">
            Compete with developers worldwide, earn XP, solve challenges, publish content and climb the rankings.
          </p>

        </div>
      </section>

      {/* PODIUM */}
      {topThree.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-14">

          <div className="grid md:grid-cols-3 gap-6">

            {topThree.map((user, index) => (
              <Link
                key={user.id}
                href={getProfileRoute(
    user.clerkId,
    user.id,
    userId
  )}
                className={`group rounded-3xl border p-8 text-center transition hover:scale-[1.02] cursor-pointer ${index === 0
                    ? "border-yellow-500/30 bg-yellow-500/10"
                    : index === 1
                      ? "border-gray-500/30 bg-white/5"
                      : "border-orange-500/30 bg-orange-500/10"
                  }`}
              >
                <div className="text-5xl mb-4">
                  {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                </div>

                <div className="w-20 h-20 mx-auto rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold">
                  {(user.name || "A")[0].toUpperCase()}
                </div>

                <h3 className="text-xl font-bold mt-4 group-hover:text-blue-400 transition">
                  {user.name || "Anonymous"}
                </h3>

                <p className="text-blue-400 font-bold mt-2">
                  {user.xp.toLocaleString()} XP
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  🔥 {user.streak || 0} day streak
                </p>

                <p className="mt-3 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
                  View Profile →
                </p>
              </Link>
            ))}

          </div>

        </section>
      )}

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-gray-400">Developers</p>
            <h3 className="text-5xl font-black mt-3">{users.length}</h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-gray-400">Highest XP</p>
            <h3 className="text-5xl font-black text-blue-400 mt-3">
              {highestXP.toLocaleString()}
            </h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-gray-400">Top Developer</p>
            <h3 className="text-3xl font-bold text-yellow-400 mt-3">
              {users[0]?.name || "No Users"}
            </h3>
          </div>

        </div>

      </section>

      {/* TABLE */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">

          {/* HEADER */}
          <div className="grid grid-cols-12 px-6 py-5 border-b border-white/10 text-gray-400 text-sm font-medium">
            <div className="col-span-2">Rank</div>
            <div className="col-span-6">Developer</div>
            <div className="col-span-2">XP</div>
            <div className="col-span-2">Streak</div>
          </div>

          {/* ROWS */}
          {users.length > 0 ? (
            users.map((user, index) => (
              <Link
                key={user.id}
                href={getProfileRoute(user.id, userId ?? undefined)}
                className="group grid grid-cols-12 items-center px-6 py-5 border-b border-white/5 hover:bg-white/5 transition"
              >
                <div className="col-span-2 font-bold">
                  #{index + 1}
                </div>

                <div className="col-span-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold">
                    {(user.name || "A")[0].toUpperCase()}
                  </div>

                  <div>
                    <p className="font-semibold group-hover:text-blue-400 transition">
                      {user.name || "Anonymous"}
                    </p>

                    <p className="text-xs text-gray-500">
                      {user.id === userId
                        ? "Your Dashboard"
                        : "View Public Profile"}
                    </p>
                  </div>
                </div>

                <div className="col-span-2 text-blue-400 font-bold">
                  {user.xp.toLocaleString()}
                </div>

                <div className="col-span-2 text-orange-400">
                  🔥 {user.streak || 0}
                </div>
              </Link>
            ))
          ) : (
            <div className="p-16 text-center text-gray-400">
              No leaderboard data available
            </div>
          )}

        </div>

      </section>

    </main>
  );
}