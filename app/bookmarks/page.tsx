"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Bookmark,
  BookmarkX,
  Loader2,
  RotateCcw,
  Search,
} from "lucide-react";

type BookmarkType = {
  id: string;
  problemSlug: string;
  createdAt: string;
};

function getCategory(slug: string) {
  // simple heuristic tagging (replace later with DB field)
  if (slug.includes("array")) return "Arrays";
  if (slug.includes("graph")) return "Graphs";
  if (slug.includes("dp") || slug.includes("dynamic")) return "DP";
  if (slug.includes("tree")) return "Trees";
  if (slug.includes("string")) return "Strings";
  return "Other";
}

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>([]);
  const [loading, setLoading] = useState(true);
  const [removingSlug, setRemovingSlug] = useState<string | null>(null);

  const [search, setSearch] = useState("");

  // undo state
  const [lastDeleted, setLastDeleted] = useState<BookmarkType | null>(null);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const res = await fetch("/api/bookmarks");
        const data = await res.json();

        setBookmarks(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, []);

  // ---------------- DELETE (OPTIMISTIC) ----------------
  const removeBookmark = async (problemSlug: string) => {
    const backup = bookmarks.find((b) => b.problemSlug === problemSlug);
    if (!backup) return;

    // optimistic update
    setBookmarks((prev) =>
      prev.filter((b) => b.problemSlug !== problemSlug)
    );

    setLastDeleted(backup);
    setRemovingSlug(problemSlug);

    try {
      const res = await fetch("/api/bookmarks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problemSlug }),
      });

      const data = await res.json();

      if (data.bookmarked) {
        // rollback if backend says still exists
        setBookmarks((prev) => [...prev, backup]);
      }
    } catch (err) {
      console.error(err);
      setBookmarks((prev) => [...prev, backup]);
    } finally {
      setRemovingSlug(null);
    }
  };

  // ---------------- UNDO ----------------
  const undoDelete = async () => {
    if (!lastDeleted) return;

    setBookmarks((prev) => [lastDeleted, ...prev]);
    setLastDeleted(null);

    await fetch("/api/bookmarks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        problemSlug: lastDeleted.problemSlug,
      }),
    });
  };

  // ---------------- FILTERED LIST ----------------
  const filtered = useMemo(() => {
    return bookmarks.filter((b) =>
      b.problemSlug.toLowerCase().includes(search.toLowerCase())
    );
  }, [bookmarks, search]);

  // ---------------- ANALYTICS ----------------
  const stats = useMemo(() => {
    const categories = bookmarks.map((b) => getCategory(b.problemSlug));

    return {
      total: bookmarks.length,
      uniqueCategories: new Set(categories).size,
    };
  }, [bookmarks]);

  // ---------------- LOADING ----------------
  if (loading) {
    return (
      <div className="p-6 md:p-10 space-y-4 max-w-4xl mx-auto">
        <div className="h-8 w-48 bg-white/10 rounded animate-pulse" />

        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-16 rounded-xl bg-white/5 border border-white/10 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 text-white max-w-4xl mx-auto space-y-6">

      {/* HEADER */}
      <div className="flex items-center gap-2">
        <Bookmark className="text-yellow-400" />
        <h1 className="text-2xl font-bold">Bookmarks</h1>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <p className="text-white/50 text-sm">Total Saved</p>
          <p className="text-xl font-bold">{stats.total}</p>
        </div>

        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <p className="text-white/50 text-sm">Topics</p>
          <p className="text-xl font-bold">{stats.uniqueCategories}</p>
        </div>
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
        <Search size={18} className="text-white/40" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search bookmarks..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* UNDO TOAST */}
      {lastDeleted && (
        <div className="flex items-center justify-between p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
          <p className="text-sm text-yellow-300">
            Bookmark removed
          </p>

          <button
            onClick={undoDelete}
            className="flex items-center gap-1 text-sm text-yellow-400 hover:text-yellow-300"
          >
            <RotateCcw size={14} />
            Undo
          </button>
        </div>
      )}

      {/* EMPTY STATE */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-white/50 border border-white/10 bg-white/5 rounded-2xl">
          No bookmarks found
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((b) => {
            const category = getCategory(b.problemSlug);

            return (
              <div
                key={b.id}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                {/* LEFT */}
                <div>
                  <Link
                    href={`/problems/${b.problemSlug}`}
                    className="font-medium hover:text-blue-400 transition"
                  >
                    {b.problemSlug}
                  </Link>

                  <div className="flex items-center gap-2 mt-1 text-xs text-white/40">
                    <span>{category}</span>
                    <span>•</span>
                    <span>
                      {new Date(b.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* DELETE */}
                <button
                  onClick={() => removeBookmark(b.problemSlug)}
                  disabled={removingSlug === b.problemSlug}
                  className="p-2 rounded-lg hover:bg-red-500/10 transition"
                >
                  {removingSlug === b.problemSlug ? (
                    <Loader2 className="animate-spin text-red-400" size={18} />
                  ) : (
                    <BookmarkX size={18} className="text-red-400" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}