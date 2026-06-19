"use client";

import { useEffect, useState } from "react";
import {
  useRouter,
  useParams,
} from "next/navigation";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();

  const id = params.id as string;

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [title, setTitle] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [content, setContent] =
    useState("");

  const [excerpt, setExcerpt] =
    useState("");

  const [category, setCategory] =
    useState("tech");

  const [imageUrl, setImageUrl] =
    useState("");

  const [tags, setTags] =
    useState("");

  useEffect(() => {
    fetchBlog();
  }, []);

  async function fetchBlog() {
    try {
      const res = await fetch(
        `/api/blogs/${id}`
      );

      if (!res.ok) {
        throw new Error();
      }

      const blog = await res.json();

      setTitle(blog.title || "");
      setSlug(blog.slug || "");
      setContent(blog.content || "");
      setExcerpt(blog.excerpt || "");
      setCategory(blog.category || "tech");
      setImageUrl(blog.imageUrl || "");
      setTags(blog.tags || "");
    } catch (error) {
      alert("Blog not found");
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  }

  async function updateBlog() {
    try {
      setSaving(true);

      const res = await fetch(
        `/api/blogs/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            title,
            slug,
            content,
            excerpt,
            category,
            imageUrl,
            tags,
          }),
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      alert("Blog updated");

      router.push("/dashboard");
    } catch (error) {
      alert("Failed to update blog");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Loading Blog...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Edit Blog
        </h1>

        <div className="space-y-6">

          {/* TITLE */}

          <div>
            <label className="block mb-2 text-gray-400">
              Title
            </label>

            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);

                setSlug(
                  e.target.value
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                );
              }}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
            />
          </div>

          {/* SLUG */}

          <div>
            <label className="block mb-2 text-gray-400">
              Slug
            </label>

            <input
              value={slug}
              onChange={(e) =>
                setSlug(e.target.value)
              }
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
            />
          </div>

          {/* EXCERPT */}

          <div>
            <label className="block mb-2 text-gray-400">
              Excerpt
            </label>

            <textarea
              rows={3}
              value={excerpt}
              onChange={(e) =>
                setExcerpt(
                  e.target.value
                )
              }
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
            />
          </div>

          {/* CATEGORY */}

          <div>
            <label className="block mb-2 text-gray-400">
              Category
            </label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
              }
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
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

              <option value="ai">
                AI
              </option>

              <option value="career">
                Career
              </option>
            </select>
          </div>

          {/* TAGS */}

          <div>
            <label className="block mb-2 text-gray-400">
              Tags
            </label>

            <input
              value={tags}
              onChange={(e) =>
                setTags(e.target.value)
              }
              placeholder="react,nextjs,dsa"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
            />
          </div>

          {/* IMAGE */}

          <div>
            <label className="block mb-2 text-gray-400">
              Image URL
            </label>

            <input
              value={imageUrl}
              onChange={(e) =>
                setImageUrl(
                  e.target.value
                )
              }
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
            />
          </div>

          {imageUrl && (
            <img
              src={imageUrl}
              alt="preview"
              className="w-full h-72 object-cover rounded-2xl border border-white/10"
            />
          )}

          {/* CONTENT */}

          <div>
            <label className="block mb-2 text-gray-400">
              Content
            </label>

            <textarea
              rows={16}
              value={content}
              onChange={(e) =>
                setContent(
                  e.target.value
                )
              }
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
            />
          </div>

          <button
            onClick={updateBlog}
            disabled={saving}
            className="w-full py-4 rounded-xl bg-green-500 text-black font-bold"
          >
            {saving
              ? "Updating..."
              : "Update Blog"}
          </button>

        </div>

      </div>

    </main>
  );
}