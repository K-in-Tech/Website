import { notFound } from "next/navigation";
import Link from "next/link";
import { roadmaps } from "@/data/roadmaps";
import { roadmapSteps } from "@/data/roadmap-steps";
import {
  Clock3,
  Layers3,
  Trophy,
  Rocket,
  BookOpen,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";


export default async function RoadmapPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const roadmap = roadmaps.find(
    (item) => item.slug === slug
  );

  if (!roadmap) return notFound();

  const steps =
  roadmapSteps[
    slug as keyof typeof roadmapSteps
  ] || [];
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] bg-blue-500/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-purple-500/20 blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="relative border-b border-white/10">

        <img
          src={roadmap.image}
          alt={roadmap.title}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative max-w-7xl mx-auto px-6 py-28">

          <Link
            href="/roadmaps"
            className="text-gray-400 hover:text-white"
          >
            ← Back to Roadmaps
          </Link>

          <span className="inline-flex mt-8 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">
            {roadmap.category}
          </span>

          <h1 className="text-6xl md:text-8xl font-black mt-8 max-w-5xl leading-tight">
            {roadmap.title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-gray-300">
            {roadmap.description}
          </p>

          <div className="grid md:grid-cols-4 gap-5 mt-14">
            <StatCard
              icon={<Clock3 size={24} />}
              label="Duration"
              value={roadmap.duration}
            />

            <StatCard
              icon={<Layers3 size={24} />}
              label="Topics"
              value={`${roadmap.topics.length}`}
            />

            <StatCard
              icon={<Trophy size={24} />}
              label="Difficulty"
              value={roadmap.difficulty}
            />

            <StatCard
              icon={<Rocket size={24} />}
              label="Projects"
              value="10+"
            />
          </div>

        </div>

      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

          <h2 className="text-4xl font-black mb-8">
            What You'll Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {roadmap.topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-2xl border border-white/10 bg-black/30 p-6"
              >
                <h3 className="font-bold text-xl">
                  {topic.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {topic.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>
      {/* LEARNING PATH */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-black">
            Learning Path
          </h2>

          <p className="text-gray-400 mt-4">
            Follow the roadmap step-by-step.
          </p>

        </div>

        <div className="relative">

          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-10">

            {steps.map((step, index) => (
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-500/30 transition">

                <div className="flex items-center justify-between">

                  <h3 className="text-3xl font-black">
                    {step.title}
                  </h3>

                  <span className="text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
                    Module {index + 1}
                  </span>

                </div>

                <p className="mt-5 text-gray-400 leading-8">
                  {step.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {step.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 rounded-xl bg-blue-500/10 text-blue-400 text-sm"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

                <div className="mt-8 flex items-center gap-3 text-green-400">
                  <CheckCircle2 size={18} />
                  Complete this module to unlock the next stage.
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHAT YOU'LL BUILD */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-5xl font-black text-center mb-16">
          Projects You'll Build
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Portfolio Website",
            "SaaS Dashboard",
            "AI Application",
            "E-Commerce Store",
            "Blog Platform",
            "Realtime Chat App",
          ].map((project) => (

            <div
              key={project}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-blue-500/30 transition"
            >

              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-5">
                <Rocket size={26} />
              </div>

              <h3 className="text-2xl font-bold">
                {project}
              </h3>

              <p className="text-gray-400 mt-4">
                Build a real-world project and strengthen your portfolio.
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="pb-28 px-6">

        <div className="max-w-6xl mx-auto rounded-[40px] border border-white/10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 p-14 text-center">

          <div className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 mb-6">
            🚀 Start Your Journey
          </div>

          <h2 className="text-6xl font-black">
            Ready To Become a
            <span className="text-blue-400">
              {" "}
              {roadmap.title}
            </span>
            ?
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Follow every milestone, build real projects,
            master the required skills, and become job-ready.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <Link
              href="/projects"
              className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-600 transition font-semibold"
            >
              Start Building
            </Link>

            <Link
              href="/coding"
              className="px-8 py-4 rounded-2xl border border-white/10 hover:border-blue-500 transition"
            >
              Practice DSA
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-blue-500/30 transition">
      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
        {icon}
      </div>

      <p className="text-gray-500 text-sm">
        {label}
      </p>

      <h3 className="text-3xl font-black mt-2">
        {value}
      </h3>
    </div>
  );
}