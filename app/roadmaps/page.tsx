import Link from "next/link";
import { roadmaps } from "@/data/roadmaps";

export default function RoadmapsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[150px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">

          <div className="text-center">

            <span className="px-5 py-2 rounded-full bg-blue-500/20 text-blue-400">
              Career Roadmaps
            </span>

            <h1 className="text-6xl md:text-8xl font-black mt-8">
              Become a
              <span className="block text-blue-500">
                Better Developer
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-xl text-gray-400 mt-8">
              Follow structured learning paths created
              to help you become job-ready faster.
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-6">

          <StatCard
            title="Roadmaps"
            value={`${roadmaps.length}+`}
          />

          <StatCard
            title="Topics"
            value="100+"
          />

          <StatCard
            title="Projects"
            value="50+"
          />

          <StatCard
            title="Resources"
            value="500+"
          />

        </div>

      </section>

      {/* ROADMAP GRID */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {roadmaps.map((roadmap) => (
            <Link
              key={roadmap.slug}
              href={`/roadmaps/${roadmap.slug}`}
              className="
                group
                rounded-3xl
                overflow-hidden
                border
                border-white/10
                bg-white/5
                hover:border-blue-500/40
                transition-all
                duration-300
              "
            >

              <div className="relative h-60 overflow-hidden">

                <img
                  src={roadmap.image}
                  alt={roadmap.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-500
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute top-4 left-4">

                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                    {roadmap.category}
                  </span>

                </div>

              </div>

              <div className="p-6">

                <h2 className="text-3xl font-bold">
                  {roadmap.title}
                </h2>

                <p className="text-gray-400 mt-4 line-clamp-3">
                  {roadmap.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-sm">
                    ⏳ {roadmap.duration}
                  </span>

                  <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-sm">
                    📚 {roadmap.topics.length} Topics
                  </span>

                </div>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-blue-400 font-medium">
                    Explore Roadmap →
                  </span>

                  <span className="text-sm text-gray-500">
                    {roadmap.difficulty}
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <p className="text-gray-500">
        {title}
      </p>

      <h3 className="text-4xl font-black mt-3">
        {value}
      </h3>

    </div>
  );
}