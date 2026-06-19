import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[85vh] px-6">

      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Learn Coding, <br />
        <span className="text-blue-400">AI & Full Stack</span>
      </h1>

      <p className="mt-6 text-gray-400 max-w-xl">
        Build real-world projects, master DSA, and become a job-ready developer with K in Tech.
      </p>

      <div className="mt-8 flex gap-4">

        <Link
          href="/blogs"
          className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition"
        >
          Start Learning
        </Link>

        <Link
          href="/projects"
          className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
        >
          Explore Projects
        </Link>

      </div>

    </section>
  );
}