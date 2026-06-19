import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

async function getUser(id: string) {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      clerkId: true,
      name: true,
      imageUrl: true,
      xp: true,
      streak: true,
      createdAt: true,

      _count: {
        select: {
          solved: true,
          bookmarks: true,
          blogs: true,
          projects: true,
        },
      },
    },
  });
}

export default async function PublicProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { userId } = await auth();

  // Find currently logged-in user
  const currentUser = userId
    ? await prisma.user.findUnique({
        where: {
          clerkId: userId,
        },
        select: {
          id: true,
        },
      })
    : null;

  // Redirect own public profile to dashboard
  if (currentUser?.id === id) {
    redirect("/dashboard");
  }

  const user = await getUser(id);

  if (!user) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-14">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-5xl font-bold shadow-xl">
              {(user.name || "A")[0].toUpperCase()}
            </div>

            <div className="text-center md:text-left">

              <h1 className="text-4xl md:text-5xl font-black">
                {user.name || "Anonymous"}
              </h1>

              <p className="text-gray-400 mt-2">
                Public Developer Profile
              </p>

              <p className="text-sm text-gray-500 mt-3">
                Joined{" "}
                {new Date(user.createdAt).toLocaleDateString()}
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-4 gap-5">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400 text-sm">
              Total XP
            </p>

            <h3 className="text-4xl font-black text-blue-400 mt-3">
              {user.xp.toLocaleString()}
            </h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400 text-sm">
              Current Streak
            </p>

            <h3 className="text-4xl font-black text-orange-400 mt-3">
              🔥 {user.streak}
            </h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400 text-sm">
              Problems Solved
            </p>

            <h3 className="text-4xl font-black text-green-400 mt-3">
              {user._count.solved}
            </h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400 text-sm">
              Projects
            </p>

            <h3 className="text-4xl font-black text-purple-400 mt-3">
              {user._count.projects}
            </h3>
          </div>

        </div>

      </section>

      {/* ACHIEVEMENTS */}
      <section className="max-w-6xl mx-auto px-6 pb-8">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-bold mb-6">
            🏆 Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="rounded-2xl bg-yellow-500/10 border border-yellow-500/20 p-5">
              <div className="text-3xl">⚡</div>

              <h3 className="font-semibold mt-3">
                XP Earner
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                Earned {user.xp.toLocaleString()} XP
              </p>
            </div>

            <div className="rounded-2xl bg-orange-500/10 border border-orange-500/20 p-5">
              <div className="text-3xl">🔥</div>

              <h3 className="font-semibold mt-3">
                Streak Master
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                Maintained a {user.streak} day streak
              </p>
            </div>

            <div className="rounded-2xl bg-green-500/10 border border-green-500/20 p-5">
              <div className="text-3xl">✅</div>

              <h3 className="font-semibold mt-3">
                Problem Solver
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                Solved {user._count.solved} coding problems
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* EXTRA STATS */}
      <section className="max-w-6xl mx-auto px-6 pb-8">

        <div className="grid md:grid-cols-3 gap-5">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400 text-sm">
              Bookmarks
            </p>

            <h3 className="text-4xl font-black mt-3">
              {user._count.bookmarks}
            </h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400 text-sm">
              Blogs
            </p>

            <h3 className="text-4xl font-black mt-3">
              {user._count.blogs}
            </h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400 text-sm">
              Projects
            </p>

            <h3 className="text-4xl font-black mt-3">
              {user._count.projects}
            </h3>
          </div>

        </div>

      </section>

      {/* ACTIVITY */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-bold mb-4">
            📈 Activity
          </h2>

          <p className="text-gray-400">
            Recent solved problems, submissions,
            projects, blogs, achievements and activity
            timeline will appear here in future updates.
          </p>

        </div>

      </section>

    </main>
  );
}