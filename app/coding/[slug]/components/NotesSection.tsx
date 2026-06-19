"use client";

import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Save,
  CheckCircle2,
  Clock,
} from "lucide-react";

type Note = {
  problemSlug: string;
  content: string;
};

export default function NotesSection({
  slug,
}: {
  slug: string;
}) {
  const [notes, setNotes] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [lastSaved, setLastSaved] =
    useState("");

  const debounceRef =
    useRef<NodeJS.Timeout | null>(
      null
    );

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch(
          "/api/notes"
        );

        const data =
          await res.json();

        const note = data.find(
          (n: Note) =>
            n.problemSlug === slug
        );

        if (note) {
          setNotes(note.content);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [slug]);

  const saveToBackend =
    async (content: string) => {
      try {
        setSaving(true);

        await fetch("/api/notes", {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            problemSlug: slug,
            content,
          }),
        });

        setLastSaved(
          new Date().toLocaleTimeString()
        );
      } catch (err) {
        console.error(err);
      } finally {
        setSaving(false);
      }
    };

  const handleChange = (
    value: string
  ) => {
    setNotes(value);

    if (debounceRef.current) {
      clearTimeout(
        debounceRef.current
      );
    }

    debounceRef.current =
      setTimeout(() => {
        saveToBackend(value);
      }, 1000);
  };

  if (loading) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="h-8 w-48 bg-white/10 rounded animate-pulse mb-6" />

        <div className="h-60 bg-white/5 rounded-xl animate-pulse" />
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">

      {/* HEADER */}

      <div className="border-b border-white/10 p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <BookOpen
                size={20}
                className="text-blue-400"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Personal Notes
              </h2>

              <p className="text-sm text-gray-500">
                Save your approach,
                optimizations and
                observations
              </p>
            </div>

          </div>

          <div className="text-right">

            {saving ? (
              <div className="flex items-center gap-2 text-yellow-400 text-sm">
                <Clock size={14} />
                Saving...
              </div>
            ) : (
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <CheckCircle2
                  size={14}
                />
                Saved
              </div>
            )}

            {lastSaved && (
              <p className="text-xs text-gray-500 mt-1">
                {lastSaved}
              </p>
            )}

          </div>

        </div>

      </div>

      {/* EDITOR */}

      <div className="p-6">

        <textarea
          value={notes}
          onChange={(e) =>
            handleChange(
              e.target.value
            )
          }
          placeholder={`Example:

• Brute force approach
• Optimal solution
• Time Complexity
• Space Complexity
• Important edge cases
• Interview tips
`}
          className="
            w-full
            h-72
            resize-none
            rounded-2xl
            bg-black
            border
            border-white/10
            p-5
            outline-none
            focus:border-blue-500
            text-gray-300
            leading-7
          "
        />

        {/* FOOTER */}

        <div className="flex flex-wrap items-center justify-between mt-4 text-sm">

          <div className="flex items-center gap-2 text-gray-500">
            <Save size={14} />
            Auto-save enabled
          </div>

          <div className="text-gray-500">
            {notes.length} characters
          </div>

        </div>

      </div>

    </div>
  );
}