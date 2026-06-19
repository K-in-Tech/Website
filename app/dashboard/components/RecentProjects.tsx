"use client";

import Link from "next/link";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  description: string;
  techStack?: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  createdAt?: string;
};

export default function RecentProjects({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            Recent Projects
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Showcase your latest builds
          </p>
        </div>

        <Link
          href="/projects/new"
          className="px-4 py-2 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
        >
          + New Project
        </Link>
      </div>

      {/* Empty */}
      {projects.length === 0 ? (
        <div className="border border-dashed border-white/10 rounded-2xl py-16 text-center">
          <h3 className="text-xl font-semibold">
            No Projects Yet
          </h3>

          <p className="text-gray-400 mt-2">
            Start showcasing your work.
          </p>

          <Link
            href="/projects/new"
            className="inline-flex mt-5 px-5 py-3 rounded-xl bg-green-500 text-black font-semibold"
          >
            Publish Project
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition"
            >
              {/* IMAGE */}
              <div className="relative h-48">
                <Image
                  src={
                    project.imageUrl ||
                    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
                  }
                  alt={project.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-lg line-clamp-1">
                    {project.title}
                  </h3>

                  {project.createdAt && (
                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {new Date(
                        project.createdAt
                      ).toLocaleDateString()}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 mt-3 line-clamp-3">
                  {project.description}
                </p>

                {/* TECH STACK */}
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack
                      .split(",")
                      .slice(0, 4)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs bg-green-500/10 border border-green-500/20 text-green-400"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                  </div>
                )}

                {/* ACTIONS */}
                <div className="flex gap-3 mt-5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 rounded-xl border border-white/10 hover:bg-white/5 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}