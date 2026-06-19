"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  Share2,
  Trophy,
  Loader2,
} from "lucide-react";

export default function ProblemActions({
  slug,
  difficulty,
}: {
  slug: string;
  difficulty: string;
}) {
  const [solved, setSolved] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [savingSolved, setSavingSolved] = useState(false);
  const [savingBookmark, setSavingBookmark] = useState(false);

  const xpReward =
    difficulty === "Easy"
      ? 25
      : difficulty === "Medium"
      ? 50
      : 100;

  // -----------------------------
  // FETCH STATUS (SOLVED + BOOKMARKED)
  // -----------------------------
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const [solvedRes, bookmarkRes] = await Promise.all([
          fetch("/api/solved"),
          fetch("/api/bookmarks"),
        ]);

        const solvedData = await solvedRes.json();
        const bookmarkData = await bookmarkRes.json();

        const solvedArray = Array.isArray(solvedData) ? solvedData : [];
        const bookmarkArray = Array.isArray(bookmarkData) ? bookmarkData : [];

        setSolved(
          solvedArray.some((s: any) => s.problemSlug === slug)
        );

        setBookmarked(
          bookmarkArray.some((b: any) => b.problemSlug === slug)
        );
      } catch (err) {
        console.error("Status fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, [slug]);

  // -----------------------------
  // TOGGLE SOLVED
  // -----------------------------
  const toggleSolved = async () => {
    try {
      setSavingSolved(true);

      const res = await fetch("/api/solved", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problemSlug: slug,
          difficulty,
          solved: !solved,
        }),
      });

      if (res.ok) {
        setSolved(!solved);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSavingSolved(false);
    }
  };

  // -----------------------------
  // TOGGLE BOOKMARK (DB)
  // -----------------------------
  const toggleBookmark = async () => {
    try {
      setSavingBookmark(true);

      const res = await fetch("/api/bookmarks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problemSlug: slug,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setBookmarked(data.bookmarked);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSavingBookmark(false);
    }
  };

  // -----------------------------
  // SHARE
  // -----------------------------
  const shareProblem = async () => {
    try {
      await navigator.share({
        title: "K in Tech Problem",
        url: window.location.href,
      });
    } catch {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  // -----------------------------
  // LOADING UI
  // -----------------------------
  if (loading) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 animate-pulse h-64" />
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">

      {/* HEADER */}
      <div className="border-b border-white/10 p-5">
        <h3 className="font-bold text-lg">Problem Actions</h3>
        <p className="text-sm text-gray-500 mt-1">
          Track your progress
        </p>
      </div>

      {/* XP */}
      <div className="p-5 border-b border-white/10 flex items-center justify-between">
        <span className="text-gray-400">XP Reward</span>
        <div className="flex items-center gap-2 text-yellow-400 font-bold">
          <Trophy size={16} />
          {xpReward}
        </div>
      </div>

      {/* STATUS */}
      <div className="p-5 border-b border-white/10 flex items-center justify-between">
        <span className="text-gray-400">Status</span>
        <span className={solved ? "text-green-400" : "text-gray-400"}>
          {solved ? "Solved" : "Not Solved"}
        </span>
      </div>

      {/* BUTTONS */}
      <div className="p-5 space-y-3">

        {/* SOLVED */}
        <button
          onClick={toggleSolved}
          disabled={savingSolved}
          className={`w-full py-3 rounded-xl font-medium transition flex items-center justify-center gap-2 ${
            solved
              ? "bg-green-500 text-black"
              : "bg-blue-600 text-white"
          }`}
        >
          {savingSolved ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <CheckCircle2 size={18} />
          )}

          {solved ? "Solved" : "Mark as Solved"}
        </button>

        {/* BOOKMARK */}
        <button
  onClick={toggleBookmark}
  disabled={savingBookmark}
  className={`w-full py-3 rounded-xl border transition flex items-center justify-center gap-2 ${
    bookmarked
      ? "border-yellow-500 bg-yellow-500/10 text-yellow-400"
      : "border-white/10 bg-white/5"
  }`}
>
  {savingBookmark ? (
    <Loader2 size={18} className="animate-spin" />
  ) : bookmarked ? (
    <BookmarkCheck size={18} />
  ) : (
    <Bookmark size={18} />
  )}

  {savingBookmark
    ? "Saving..."
    : bookmarked
    ? "Bookmarked"
    : "Bookmark"}
</button>

        {/* SHARE */}
        <button
          onClick={shareProblem}
          className="w-full py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center gap-2"
        >
          <Share2 size={18} />
          Share Problem
        </button>
      </div>

      {/* FOOTER */}
      <div className="border-t border-white/10 p-4 text-center text-xs text-gray-500">
        Complete problems to earn XP and improve your coding skills.
      </div>
    </div>
  );
}