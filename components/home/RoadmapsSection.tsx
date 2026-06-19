export default function RoadmapsSection() {
  return (
    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">
          Learning Roadmaps
        </h2>
        <p className="text-gray-400 mt-4">
          Step-by-step paths to become a job-ready developer.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Frontend */}
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold">Frontend Developer</h3>
          <p className="text-gray-400 mt-2">
            HTML → CSS → JavaScript → React → Next.js → Projects
          </p>

          <div className="mt-4 h-2 bg-white/10 rounded-full">
            <div className="h-2 w-2/3 bg-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Backend */}
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold">Backend Developer</h3>
          <p className="text-gray-400 mt-2">
            Node.js → Express → Databases → APIs → Authentication
          </p>

          <div className="mt-4 h-2 bg-white/10 rounded-full">
            <div className="h-2 w-1/2 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Full Stack */}
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold">Full Stack Developer</h3>
          <p className="text-gray-400 mt-2">
            Frontend + Backend + Projects + Deployment + System Design
          </p>

          <div className="mt-4 h-2 bg-white/10 rounded-full">
            <div className="h-2 w-3/4 bg-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* AI Engineer */}
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-xl font-semibold">AI Engineer</h3>
          <p className="text-gray-400 mt-2">
            Python → ML Basics → AI APIs → Projects → LLM Apps
          </p>

          <div className="mt-4 h-2 bg-white/10 rounded-full">
            <div className="h-2 w-1/3 bg-pink-500 rounded-full"></div>
          </div>
        </div>

      </div>

    </section>
  );
}