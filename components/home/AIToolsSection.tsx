export default function AIToolsSection() {
  return (
    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">
          AI Tools for Developers
        </h2>
        <p className="text-gray-400 mt-4">
          Supercharge your learning with AI-powered tools built for coding and careers.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Tool 1 */}
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold">AI Resume Analyzer</h3>
          <p className="text-gray-400 mt-2">
            Upload your resume and get instant feedback to improve job chances.
          </p>
        </div>

        {/* Tool 2 */}
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold">AI Roadmap Generator</h3>
          <p className="text-gray-400 mt-2">
            Generate personalized learning paths based on your skill level.
          </p>
        </div>

        {/* Tool 3 */}
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold">AI Code Explainer</h3>
          <p className="text-gray-400 mt-2">
            Understand complex code in simple language with AI explanations.
          </p>
        </div>

        {/* Tool 4 */}
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold">AI Interview Coach</h3>
          <p className="text-gray-400 mt-2">
            Practice interview questions and get AI feedback instantly.
          </p>
        </div>

      </div>

    </section>
  );
}