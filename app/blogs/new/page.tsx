"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import TiptapEditor from "@/components/TiptapEditor";

export default function NewBlogPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [category, setCategory] =
    useState("tech");

  const [loading, setLoading] =
    useState(false);

  const slug = useMemo(() => {
    return title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  }, [title]);

  const tagList = tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  async function createBlog() {
    if (!title.trim()) {
      return alert("Title is required");
    }

    if (!content.trim()) {
      return alert("Content is required");
    }

    try {
      setLoading(true);

      const res = await fetch(
        "/api/blogs",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            title,
            excerpt,
            content,
            slug,
            category,
            imageUrl,
            tags: tagList,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error ||
          "Failed to create blog"
        );
      }

      router.push("/blogs");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* HEADER */}

        <div className="mb-10">

          <h1 className="text-5xl font-black">
            Create Blog
          </h1>

          <p className="text-gray-400 mt-3">
            Share knowledge with the
            developer community.
          </p>

        </div>

        <div className="grid lg:grid-cols-[1fr_350px] gap-8">

          {/* LEFT */}

          <div className="space-y-6">

            {/* TITLE */}

            <div>

              <label className="text-gray-400 block mb-2">
                Title
              </label>

              <input
                value={title}
                onChange={(e) =>
                  setTitle(
                    e.target.value
                  )
                }
                placeholder="Mastering Binary Search Trees"
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none"
              />

            </div>

            {/* SLUG */}

            <div>

              <label className="text-gray-400 block mb-2">
                Slug
              </label>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-blue-400">
                /blogs/{slug || "your-blog"}
              </div>

            </div>

            {/* EXCERPT */}

            <div>

              <label className="text-gray-400 block mb-2">
                Short Description
              </label>

              <textarea
                value={excerpt}
                onChange={(e) =>
                  setExcerpt(
                    e.target.value
                  )
                }
                className="w-full h-32 p-4 rounded-2xl bg-white/5 border border-white/10 outline-none"
                placeholder="Brief summary of your blog..."
              />

              <p className="text-xs text-gray-500 mt-2">
                {excerpt.length} characters
              </p>

            </div>

            {/* CATEGORY */}

            <div>

              <label className="text-gray-400 block mb-2">
                Category
              </label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(
                    e.target.value
                  )
                }
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <option value="tech">
                  Tech
                </option>

                <option value="dsa">
                  DSA
                </option>

                <option value="system-design">
                  System Design
                </option>

                <option value="javascript">
                  JavaScript
                </option>

                <option value="react">
                  React
                </option>

                <option value="nextjs">
                  Next.js
                </option>

                <option value="ai">
                  AI
                </option>

                <option value="career">
                  Career
                </option>
              </select>

            </div>

            {/* IMAGE */}

            <div>

              <label className="text-gray-400 block mb-2">
                Cover Image URL
              </label>

              <input
                value={imageUrl}
                onChange={(e) =>
                  setImageUrl(
                    e.target.value
                  )
                }
                placeholder="https://..."
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
              />

            </div>

            {/* TAGS */}

            <div>

              <label className="text-gray-400 block mb-2">
                Tags
              </label>

              <input
                value={tags}
                onChange={(e) =>
                  setTags(
                    e.target.value
                  )
                }
                placeholder="react,nextjs,dsa"
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
              />

              <div className="flex flex-wrap gap-2 mt-3">
                {tagList.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>

            {/* CONTENT */}
            {/* CONTENT */}

            <div>
              <label className="text-gray-400 block mb-2">
                Content
              </label>

              <TiptapEditor
                value={content}
                onChange={setContent}
              />

              <p className="text-xs text-gray-500 mt-2">
                {content.replace(/<[^>]*>/g, "").length}
                {" "}characters
              </p>
            </div>

            <button
              onClick={createBlog}
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-blue-500 hover:bg-blue-600 transition font-bold text-lg"
            >
              {loading
                ? "Publishing..."
                : "Publish Blog"}
            </button>

          </div>

          {/* RIGHT SIDEBAR */}

          <div className="space-y-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <h3 className="font-bold mb-4">
                Live Preview
              </h3>

              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
              ) : (
                <div className="w-full h-48 rounded-xl bg-white/5 border border-white/10 mb-4 flex items-center justify-center text-gray-500">
                  No Cover Image
                </div>
              )}

              <p className="text-xs text-blue-400 mb-2">
                {category}
              </p>

              <h2 className="text-xl font-bold">
                {title ||
                  "Blog Title"}
              </h2>

              <p className="text-gray-400 text-sm mt-3">
                {excerpt ||
                  "Your blog description will appear here."}
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <h3 className="font-bold mb-4">
                SEO Preview
              </h3>

              <p className="text-blue-400 text-sm">
                kintech.com/blogs/{slug}
              </p>

              <p className="font-semibold mt-2">
                {title ||
                  "Blog Title"}
              </p>

              <p className="text-sm text-gray-400 mt-2">
                {excerpt ||
                  "Meta description preview"}
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}