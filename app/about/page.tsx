export default function AboutPage() {
  const features = [
    "DSA & Coding Problems",
    "Developer Roadmaps",
    "Technical Blogs",
    "Project-Based Learning",
    "Interview Preparation",
    "System Design Resources",
    "Progress Tracking",
    "Developer Community",
  ];

  const stats = [
    {
      value: "100+",
      label: "Coding Problems",
    },
    {
      value: "50+",
      label: "Technical Articles",
    },
    {
      value: "20+",
      label: "Learning Roadmaps",
    },
    {
      value: "∞",
      label: "Growth Opportunities",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            About K in Tech
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            Learn.
            <br />
            Build.
            <br />
            Grow.
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-400 leading-relaxed">
            K in Tech is a modern learning platform built for
            developers, students, and aspiring engineers who
            want to master coding, build real-world projects,
            improve problem-solving skills, and accelerate
            their tech careers.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Our mission is to make technical education
              practical, accessible, and career-focused.
              We help developers learn through hands-on
              coding challenges, structured roadmaps,
              technical content, and project-based learning.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold mb-4">
              Our Vision
            </h2>

            <p className="text-gray-400 leading-relaxed">
              We envision a platform where developers can
              continuously learn, practice, collaborate,
              showcase their skills, and grow into confident
              software engineers capable of solving real-world
              problems.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <h3 className="text-4xl font-black">
                  {stat.value}
                </h3>

                <p className="mt-2 text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-black">
            What You'll Find
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl">
            Everything you need to become a better developer,
            from coding practice and interview preparation
            to projects and technical learning resources.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <p className="font-medium">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why K in Tech */}
      <section className="border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-black mb-8">
              Why K in Tech?
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Most learning platforms focus only on theory.
                K in Tech focuses on practical skill-building
                through coding, projects, and real-world
                development experiences.
              </p>

              <p>
                Whether you're preparing for coding interviews,
                learning full-stack development, improving your
                problem-solving abilities, or building your
                developer portfolio, K in Tech provides the
                resources and structure needed to stay
                consistent and grow.
              </p>

              <p>
                Our goal is to help developers spend less time
                searching for resources and more time learning,
                building, and advancing their careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-black">
            Start Your Learning Journey
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Explore coding challenges, roadmaps, technical
            blogs, and projects designed to help you become
            a stronger developer every day.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/problems"
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition"
            >
              Practice Problems
            </a>

            <a
              href="/roadmaps"
              className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
            >
              Explore Roadmaps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}