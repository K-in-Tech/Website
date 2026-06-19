import Link from "next/link";
import {
  ArrowRight,
  Code2,
} from "lucide-react";

type Problem = {
  slug: string;
  title: string;
  difficulty: string;
  category?: string;
  tags?: string[];
};

export default function RelatedProblems({
  problems,
}: {
  problems: Problem[];
}) {
  if (!problems.length) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-bold mb-4">
          Related Problems
        </h3>

        <p className="text-gray-500 text-sm">
          No related problems found.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">

      {/* HEADER */}

      <div className="border-b border-white/10 p-5">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <Code2
              size={18}
              className="text-blue-400"
            />
          </div>

          <div>
            <h3 className="font-bold text-lg">
              Related Problems
            </h3>

            <p className="text-sm text-gray-500">
              Continue practicing
            </p>
          </div>

        </div>

      </div>

      {/* LIST */}

      <div className="divide-y divide-white/5">

        {problems.map((problem) => (
          <Link
            key={problem.slug}
            href={`/coding/${problem.slug}`}
            className="
              block
              p-5
              hover:bg-white/5
              transition
              group
            "
          >
            <div className="flex items-start justify-between gap-3">

              <div className="flex-1">

                <h4 className="font-medium group-hover:text-blue-400 transition">
                  {problem.title}
                </h4>

                {problem.category && (
                  <p className="text-xs text-gray-500 mt-1">
                    {problem.category}
                  </p>
                )}

                {problem.tags &&
                  problem.tags.length >
                    0 && (
                    <div className="flex flex-wrap gap-2 mt-3">

                      {problem.tags
                        .slice(0, 3)
                        .map((tag) => (
                          <span
                            key={tag}
                            className="
                              text-xs
                              px-2
                              py-1
                              rounded-full
                              bg-white/5
                              text-gray-400
                            "
                          >
                            {tag}
                          </span>
                        ))}

                    </div>
                  )}

              </div>

              <ArrowRight
                size={16}
                className="
                  text-gray-500
                  group-hover:text-blue-400
                  transition
                  mt-1
                "
              />

            </div>

            <div className="mt-4">

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  problem.difficulty ===
                  "Easy"
                    ? "bg-green-500/10 text-green-400"
                    : problem.difficulty ===
                      "Medium"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {problem.difficulty}
              </span>

            </div>

          </Link>
        ))}

      </div>

      {/* FOOTER */}

      <div className="border-t border-white/10 p-4 text-center">

        <Link
          href="/coding"
          className="text-sm text-blue-400 hover:text-blue-300"
        >
          View All Problems →
        </Link>

      </div>

    </div>
  );
}