import Link from "next/link";
import { prisma } from "@/lib/prisma";

async function getLatestProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
          },
        },
      },
    });

    return projects;
  } catch (error) {
    console.error(
      "Failed to load projects:",
      error
    );
    return [];
  }
}

export default async function ProjectsSection() {
  const projects =
    await getLatestProjects();

  return (
    <section className="py-20 px-6">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-12">

        <h2 className="text-4xl font-bold">
          Featured Projects
        </h2>

        <p className="text-gray-400 mt-4">
          Real-world applications built
          to showcase engineering skills,
          architecture, and problem
          solving.
        </p>

      </div>

      {/* PROJECT GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {projects.length === 0 ? (
          <p className="text-gray-400 text-center col-span-3">
            No projects available yet
          </p>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-green-500/30"
            >

              <h3 className="text-xl font-semibold group-hover:text-green-400 transition">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-400 line-clamp-3">
                {project.description}
              </p>

              <div className="mt-4 text-xs text-gray-500">
                {new Date(
                  project.createdAt
                ).toLocaleDateString()}
              </div>

              {/* ACTIONS */}
              <div className="mt-5 flex flex-wrap gap-3">

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-green-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-green-400"
                  >
                    Live Demo
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                )}

              </div>

            </div>
          ))
        )}

      </div>

      {/* SEE ALL */}
      <div className="text-center mt-10">

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-2xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
        >
          See All Projects
          <span>→</span>
        </Link>

      </div>

    </section>
  );
}