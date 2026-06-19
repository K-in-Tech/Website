export default function FeaturesSection() {
  return (
    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">
          Everything You Need to Become a Developer
        </h2>
        <p className="text-gray-400 mt-4">
          Learn, practice, build, and grow — all in one platform.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold">DSA Practice</h3>
          <p className="text-gray-400 mt-2">
            Solve coding problems with explanations, solutions, and complexity analysis.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold">AI Tools</h3>
          <p className="text-gray-400 mt-2">
            Generate roadmaps, resumes, and get AI-powered coding help.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold">Roadmaps</h3>
          <p className="text-gray-400 mt-2">
            Step-by-step learning paths for frontend, backend, and AI.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold">Projects</h3>
          <p className="text-gray-400 mt-2">
            Build real-world projects with source code and tutorials.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold">Placement Prep</h3>
          <p className="text-gray-400 mt-2">
            Interview questions, aptitude tests, and HR preparation.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold">Community</h3>
          <p className="text-gray-400 mt-2">
            Connect with developers, share knowledge, and grow together.
          </p>
        </div>

      </div>

    </section>
  );
}