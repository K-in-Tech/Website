"use client";

import Link from "next/link";
import {
  PenSquare,
  Eye,
  Calendar,
  ArrowRight,
  Plus,
  Trash2,
  Edit3,
} from "lucide-react";

type Blog = {
  id: string;
  slug: string;
  title: string;
  category: string;
  createdAt?: string;
  views?: number;
};

interface Props {
  blogs: Blog[];
  onDelete?: (id: string) => void;
}

export default function RecentBlogs({
  blogs,
  onDelete,
}: Props) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            Recent Blogs
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Manage and track your published articles
          </p>
        </div>

        <Link
          href="/blogs/new"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
        >
          <Plus size={16} />
          New Blog
        </Link>
      </div>

      {/* Empty State */}
      {blogs.length === 0 ? (
        <div className="text-center py-16">
          <PenSquare
            size={52}
            className="mx-auto text-gray-600"
          />

          <h3 className="text-xl font-semibold mt-4">
            No Blogs Yet
          </h3>

          <p className="text-gray-400 mt-2">
            Start sharing your knowledge with the community.
          </p>

          <Link
            href="/blogs/new"
            className="inline-flex mt-5 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
          >
            Write Your First Blog
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">

            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="
                  group
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  hover:bg-white/[0.05]
                  hover:border-blue-500/20
                  transition-all
                  p-5
                "
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                  {/* LEFT */}
                  <div className="flex-1">

                    <div className="flex items-center gap-3 mb-3">

                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                        {blog.category}
                      </span>

                      {blog.createdAt && (
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar size={12} />
                          {new Date(
                            blog.createdAt
                          ).toLocaleDateString()}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold group-hover:text-blue-400 transition">
                      {blog.title}
                    </h3>

                    <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">

                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {blog.views ?? 0} views
                      </span>

                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex flex-wrap gap-2">

                    {/* VIEW BLOG */}
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="
                        flex items-center gap-2
                        px-4 py-2
                        rounded-xl
                        border border-white/10
                        hover:border-blue-500/30
                        hover:bg-blue-500/10
                        transition
                      "
                    >
                      <Eye size={15} />
                      View
                    </Link>

                    {/* EDIT BLOG */}
                    <Link
                      href={`/blogs/edit/${blog.id}`}
                      className="
                        flex items-center gap-2
                        px-4 py-2
                        rounded-xl
                        bg-yellow-500
                        text-black
                        font-medium
                        hover:bg-yellow-400
                        transition
                      "
                    >
                      <Edit3 size={15} />
                      Edit
                    </Link>

                    {/* DELETE BLOG */}
                    {onDelete && (
                      <button
                        onClick={() =>
                          onDelete(blog.id)
                        }
                        className="
                          flex items-center gap-2
                          px-4 py-2
                          rounded-xl
                          bg-red-500
                          hover:bg-red-600
                          transition
                        "
                      >
                        <Trash2 size={15} />
                        Delete
                      </button>
                    )}

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <Link
            href="/blogs"
            className="
              flex items-center justify-center gap-2
              mt-6
              py-4
              rounded-2xl
              border border-white/10
              hover:border-blue-500/30
              hover:bg-white/[0.03]
              transition
            "
          >
            View All Blogs
            <ArrowRight size={16} />
          </Link>
        </>
      )}
    </section>
  );
}