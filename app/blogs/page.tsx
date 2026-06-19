"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  excerpt?: string;
  slug: string;
  category: string;
  imageUrl?: string;
  views: number;
  likes: number;
  createdAt: string;

  author?: {
    name?: string;
  };
};

const categories = [
  
];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("all");

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    try {
      const res = await fetch(
        "/api/blogs",
        {
          cache: "no-store",
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();

      setBlogs(
        Array.isArray(data.blogs)
          ? data.blogs
          : []
      );
    } catch (err) {
      console.error(err);

      setError(
        "Failed to load blogs"
      );
    } finally {
      setLoading(false);
    }
  }

  const filteredBlogs =
    useMemo(() => {
      return blogs.filter((blog) => {
        const query =
          search.toLowerCase();

        const matchesSearch =
          blog.title
            .toLowerCase()
            .includes(query) ||
          (
            blog.excerpt || ""
          )
            .toLowerCase()
            .includes(query);

        const matchesCategory =
          category === "all" ||
          blog.category ===
            category;

        return (
          matchesSearch &&
          matchesCategory
        );
      });
    }, [
      blogs,
      search,
      category,
    ]);

  function getReadingTime(
    text?: string
  ) {
    if (!text) return 1;

    return Math.max(
      1,
      Math.ceil(
        text.split(" ").length /
          200
      )
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="h-10 w-72 bg-white/10 rounded animate-pulse mb-4" />

          <div className="h-5 w-96 bg-white/10 rounded animate-pulse mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[...Array(6)].map(
              (_, i) => (
                <div
                  key={i}
                  className="h-96 rounded-3xl bg-white/5 animate-pulse"
                />
              )
            )}

          </div>

        </div>

      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}

      <section className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="max-w-3xl">

            <span className="text-blue-400 font-medium">
              K in Tech Blog
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-4 leading-tight">
              Learn.
              Build.
              Grow.
            </h1>

            <p className="text-gray-400 text-lg mt-6">
              Deep dives on DSA,
              System Design,
              React,
              Next.js,
              AI and
              Software Engineering.
            </p>

            <div className="flex gap-4 mt-8">

              <Link
                href="/blogs/new"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold"
              >
                Write Blog
              </Link>

              <div className="px-6 py-3 rounded-xl border border-white/10 bg-white/5">
                {blogs.length} Articles
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FILTERS */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col gap-6">

          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-blue-500"
          />

          <div className="flex flex-wrap gap-3">

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setCategory(cat)
                }
                className={`px-4 py-2 rounded-full text-sm transition ${
                  category === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}

          </div>

        </div>

      </section>

      {/* EMPTY */}

      {filteredBlogs.length ===
        0 && (
        <section className="max-w-4xl mx-auto px-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 text-center py-20">

            <h2 className="text-3xl font-bold">
              No Blogs Found
            </h2>

            <p className="text-gray-400 mt-4">
              Try another search
              term or category.
            </p>

          </div>

        </section>
      )}

      {/* BLOGS */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {filteredBlogs.map(
            (blog) => (
              <article
                key={blog.id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-blue-500/40 transition"
              >

                <Link
                  href={`/blogs/${blog.slug}`}
                >

                  {blog.imageUrl ? (
                    <img
                      src={
                        blog.imageUrl
                      }
                      alt={
                        blog.title
                      }
                      className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <div className="h-60 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <span className="text-gray-500">
                        No Cover
                      </span>
                    </div>
                  )}

                </Link>

                <div className="p-6">

                  <div className="flex items-center justify-between text-xs mb-4">

                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
                      {
                        blog.category
                      }
                    </span>

                    <span className="text-gray-500">
                      {new Date(
                        blog.createdAt
                      ).toLocaleDateString()}
                    </span>

                  </div>

                  <Link
                    href={`/blogs/${blog.slug}`}
                  >
                    <h2 className="text-2xl font-bold line-clamp-2 group-hover:text-blue-400 transition">
                      {blog.title}
                    </h2>
                  </Link>

                  <p className="text-gray-400 mt-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-6 text-sm text-gray-500">

                    <span>
                      By{" "}
                      {blog.author
                        ?.name ||
                        "Anonymous"}
                    </span>

                    <span>
                      ⏱{" "}
                      {getReadingTime(
                        blog.excerpt
                      )}{" "}
                      min
                    </span>

                  </div>

                  <div className="flex items-center justify-between mt-5 text-sm text-gray-500">

                    <span>
                      👁{" "}
                      {blog.views}
                    </span>

                    <span>
                      ❤️{" "}
                      {blog.likes}
                    </span>

                  </div>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="mt-6 inline-flex text-blue-400 font-medium"
                  >
                    Read Article →
                  </Link>

                </div>

              </article>
            )
          )}

        </div>

      </section>

    </main>
  );
}