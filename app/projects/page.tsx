"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  createdAt: string;

  author?: {
    name?: string;
  };
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [techFilter, setTechFilter] =
    useState("all");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(
          "/api/projects",
          {
            cache: "no-store",
          }
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(
            data?.error ||
              "Failed to fetch projects"
          );
        }

        setProjects(
          data.projects || []
        );
      } catch (err) {
        console.error(err);

        setError(
          "Failed to load projects"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const technologies =
    useMemo(() => {
      const techs = new Set<
        string
      >();

      projects.forEach(
        (project) => {
          project.techStack
            ?.split(",")
            .forEach((tech) =>
              techs.add(
                tech.trim()
              )
            );
        }
      );

      return [
        "all",
        ...Array.from(techs),
      ];
    }, [projects]);

  const filteredProjects =
    useMemo(() => {
      return projects.filter(
        (project) => {
          const matchesSearch =
            project.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            project.description
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesTech =
            techFilter === "all" ||
            project.techStack
              .toLowerCase()
              .includes(
                techFilter.toLowerCase()
              );

          return (
            matchesSearch &&
            matchesTech
          );
        }
      );
    }, [
      projects,
      search,
      techFilter,
    ]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Loading Projects...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-red-400">
        {error}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10" />

        <div className="relative max-w-7xl mx-auto px-6 py-20">

          <div className="max-w-4xl">

            <div className="inline-flex px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm">
              🚀 Community Showcase
            </div>

            <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
              Discover Amazing
              <span className="block text-green-400">
                Developer Projects
              </span>
            </h1>

            <p className="text-xl text-gray-400 mt-6 max-w-3xl">
              Explore projects built
              by developers from the
              K in Tech community.
              Share your creations,
              get feedback, and
              inspire others.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="/projects/new"
                className="px-8 py-4 rounded-2xl bg-green-500 text-black font-bold hover:bg-green-400 transition"
              >
                Publish Project
              </Link>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5">
                Browse Projects
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400">
              Total Projects
            </p>

            <h2 className="text-4xl font-black mt-2">
              {projects.length}
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400">
              Technologies
            </p>

            <h2 className="text-4xl font-black mt-2">
              {
                technologies.length -
                1
              }
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400">
              Community Builders
            </p>

            <h2 className="text-4xl font-black mt-2">
              {
                new Set(
                  projects.map(
                    (p) =>
                      p.author
                        ?.name
                  )
                ).size
              }
            </h2>
          </div>

        </div>

      </section>

      {/* FILTERS */}
      <section className="max-w-7xl mx-auto px-6 mb-12">

        <div className="grid md:grid-cols-[1fr_250px] gap-4">

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="p-4 rounded-2xl bg-white/5 border border-white/10 outline-none"
          />

          <select
            value={techFilter}
            onChange={(e) =>
              setTechFilter(
                e.target.value
              )
            }
            className="p-4 rounded-2xl bg-white/5 border border-white/10"
          >
            {technologies.map(
              (tech) => (
                <option
                  key={tech}
                  value={tech}
                >
                  {tech}
                </option>
              )
            )}
          </select>

        </div>

      </section>

      {/* EMPTY */}
      {filteredProjects.length ===
        0 && (
        <section className="max-w-7xl mx-auto px-6">

          <div className="text-center py-24 rounded-3xl border border-white/10 bg-white/5">

            <h2 className="text-3xl font-bold">
              No Projects Found
            </h2>

            <p className="text-gray-400 mt-3">
              Try adjusting your
              filters or publish a
              new project.
            </p>

          </div>

        </section>
      )}

      {/* PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {filteredProjects.map(
            (project) => (
              <article
                key={project.id}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-green-500/40 hover:bg-white/[0.07] transition-all duration-300"
              >

                <div className="relative overflow-hidden h-60">

                  <img
                    src={
                      project.imageUrl ||
                      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                    }
                    alt={
                      project.title
                    }
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="p-6">

                  <div className="flex justify-between items-center mb-4">

                    <span className="text-xs text-green-400">
                      {new Date(
                        project.createdAt
                      ).toLocaleDateString()}
                    </span>

                    <span className="text-xs text-gray-500">
                      By{" "}
                      {project.author
                        ?.name ||
                        "Anonymous"}
                    </span>

                  </div>

                  <h2 className="text-2xl font-bold mb-3">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 line-clamp-3">
                    {
                      project.description
                    }
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">

                    {project.techStack
                      .split(",")
                      .slice(0, 4)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs"
                        >
                          {tech.trim()}
                        </span>
                      ))}

                  </div>

                  <div className="flex gap-3 mt-6">

                    {project.liveUrl && (
                      <a
                        href={
                          project.liveUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-3 rounded-xl bg-green-500 text-black font-semibold"
                      >
                        Live Demo
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={
                          project.githubUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-3 rounded-xl border border-white/10 hover:bg-white/5"
                      >
                        GitHub
                      </a>
                    )}

                  </div>

                </div>

              </article>
            )
          )}

        </div>

      </section>

    </main>
  );
}