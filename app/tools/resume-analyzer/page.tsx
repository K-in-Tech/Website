import ResumeAnalyzer from "@/components/tools/ResumeAnalyzer";

export default function ResumeAnalyzerPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            AI Powered Career Tool
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
            AI Resume Analyzer
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
            Upload or paste your resume and get an instant ATS score,
            AI-powered feedback, missing skills analysis, career roadmap
            recommendations, project suggestions, and interview preparation
            guidance.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white/5 px-4 py-2 text-sm border border-white/10">
              ATS Score
            </span>

            <span className="rounded-full bg-white/5 px-4 py-2 text-sm border border-white/10">
              Missing Skills Detection
            </span>

            <span className="rounded-full bg-white/5 px-4 py-2 text-sm border border-white/10">
              Career Roadmaps
            </span>

            <span className="rounded-full bg-white/5 px-4 py-2 text-sm border border-white/10">
              Project Recommendations
            </span>

            <span className="rounded-full bg-white/5 px-4 py-2 text-sm border border-white/10">
              DSA Guidance
            </span>
          </div>
        </div>
      </section>

      {/* Analyzer */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <ResumeAnalyzer />
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What You'll Get
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-3">
                ATS Analysis
              </h3>

              <p className="text-gray-400 text-sm">
                Measure how well your resume performs against modern ATS systems.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-3">
                Skill Gap Analysis
              </h3>

              <p className="text-gray-400 text-sm">
                Discover missing technologies and skills employers expect.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-3">
                Project Suggestions
              </h3>

              <p className="text-gray-400 text-sm">
                Get project ideas that strengthen your portfolio instantly.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-3">
                Career Roadmaps
              </h3>

              <p className="text-gray-400 text-sm">
                Receive personalized learning paths based on your profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Improve Your Resume Today
          </h2>

          <p className="mt-4 text-gray-400">
            Stand out to recruiters, improve ATS compatibility, and get
            personalized recommendations to accelerate your software
            development career.
          </p>
        </div>
      </section>
    </div>
  );
}