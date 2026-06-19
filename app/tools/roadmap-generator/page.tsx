"use client";

import { useState } from "react";

const roadmaps = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "State Management",
    "Tailwind CSS",
    "Testing",
    "Deployment",
  ],

  backend: [
    "Programming Language",
    "Node.js",
    "Express",
    "Databases",
    "Authentication",
    "REST APIs",
    "Caching",
    "Docker",
    "CI/CD",
    "Cloud Deployment",
  ],

  fullstack: [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Authentication",
    "Docker",
    "AWS",
  ],

  dsa: [
    "Arrays",
    "Strings",
    "Hashing",
    "Linked Lists",
    "Stacks & Queues",
    "Trees",
    "Graphs",
    "Dynamic Programming",
    "Greedy",
    "System Design Basics",
  ],

  ai: [
    "Python",
    "Statistics",
    "NumPy",
    "Pandas",
    "Data Visualization",
    "Machine Learning",
    "Deep Learning",
    "LLMs",
    "RAG",
    "AI Deployment",
  ],

  devops: [
    "Linux",
    "Networking",
    "Git",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Cloud",
    "Monitoring",
    "Security",
    "Infrastructure as Code",
  ],
};

export default function RoadmapGeneratorPage() {
  const [selectedRoadmap, setSelectedRoadmap] =
    useState("frontend");

  const roadmap =
    roadmaps[
      selectedRoadmap as keyof typeof roadmaps
    ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Roadmap Generator
          </h1>

          <p className="mt-4 text-gray-400">
            Generate a learning roadmap and
            know exactly what to learn next.
          </p>

        </div>

        {/* Selector */}
        <div className="max-w-xl mx-auto mb-12">

          <select
            value={selectedRoadmap}
            onChange={(e) =>
              setSelectedRoadmap(
                e.target.value
              )
            }
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none"
          >
            <option value="frontend">
              Frontend Developer
            </option>

            <option value="backend">
              Backend Developer
            </option>

            <option value="fullstack">
              Full Stack Developer
            </option>

            <option value="dsa">
              DSA & Interviews
            </option>

            <option value="ai">
              AI Engineer
            </option>

            <option value="devops">
              DevOps Engineer
            </option>

          </select>

        </div>

        {/* Roadmap */}
        <div className="relative">

          {roadmap.map(
            (step, index) => (
              <div
                key={step}
                className="relative flex items-start gap-5 mb-8"
              >
                {/* Line */}
                {index !==
                  roadmap.length -
                    1 && (
                  <div className="absolute left-5 top-12 w-[2px] h-20 bg-white/10" />
                )}

                {/* Circle */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <h3 className="font-bold text-lg">
                    {step}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    Complete this topic before
                    moving to the next step.
                  </p>

                </div>

              </div>
            )
          )}

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <InfoCard
            title="Structured Learning"
            text="Follow a proven path without getting overwhelmed."
          />

          <InfoCard
            title="Career Focused"
            text="Learn only what matters for your chosen role."
          />

          <InfoCard
            title="Beginner Friendly"
            text="Step-by-step progression from basics to advanced."
          />

        </div>

      </div>

    </main>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

      <h3 className="font-bold mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm">
        {text}
      </p>

    </div>
  );
}