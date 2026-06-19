"use client";

import { useMemo, useState } from "react";

export default function TextDiffPage() {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");

  const diffResult = useMemo(() => {
    const leftLines = leftText.split("\n");
    const rightLines = rightText.split("\n");

    const maxLength = Math.max(
      leftLines.length,
      rightLines.length
    );

    const result = [];

    for (let i = 0; i < maxLength; i++) {
      const left = leftLines[i] || "";
      const right = rightLines[i] || "";

      let type: "same" | "changed" | "added" | "removed" =
        "same";

      if (!left && right) {
        type = "added";
      } else if (left && !right) {
        type = "removed";
      } else if (left !== right) {
        type = "changed";
      }

      result.push({
        line: i + 1,
        left,
        right,
        type,
      });
    }

    return result;
  }, [leftText, rightText]);

  const stats = useMemo(() => {
    return {
      same: diffResult.filter(
        (r) => r.type === "same"
      ).length,

      changed: diffResult.filter(
        (r) => r.type === "changed"
      ).length,

      added: diffResult.filter(
        (r) => r.type === "added"
      ).length,

      removed: diffResult.filter(
        (r) => r.type === "removed"
      ).length,
    };
  }, [diffResult]);

  const clearAll = () => {
    setLeftText("");
    setRightText("");
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="inline-flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm">
            Developer Utility
          </div>

          <h1 className="mt-6 text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Text Diff Checker
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Compare two text blocks side-by-side
            and instantly detect additions,
            removals, and modifications.
          </p>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">

          <StatCard
            title="Same"
            value={stats.same}
          />

          <StatCard
            title="Changed"
            value={stats.changed}
          />

          <StatCard
            title="Added"
            value={stats.added}
          />

          <StatCard
            title="Removed"
            value={stats.removed}
          />

        </div>

        {/* Inputs */}
        <div className="grid lg:grid-cols-2 gap-6">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="font-bold text-lg mb-4">
              Original Text
            </h2>

            <textarea
              value={leftText}
              onChange={(e) =>
                setLeftText(e.target.value)
              }
              placeholder="Paste original text..."
              className="w-full h-[300px] rounded-2xl bg-black border border-white/10 p-4 resize-none outline-none focus:border-blue-500"
            />

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="font-bold text-lg mb-4">
              Updated Text
            </h2>

            <textarea
              value={rightText}
              onChange={(e) =>
                setRightText(e.target.value)
              }
              placeholder="Paste updated text..."
              className="w-full h-[300px] rounded-2xl bg-black border border-white/10 p-4 resize-none outline-none focus:border-purple-500"
            />

          </div>

        </div>

        {/* Actions */}
        <div className="flex gap-4 mt-6">

          <button
            onClick={clearAll}
            className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition"
          >
            Clear
          </button>

        </div>

        {/* Diff Results */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">

          <div className="grid grid-cols-12 border-b border-white/10 bg-white/[0.02]">

            <div className="col-span-1 p-4 font-semibold">
              #
            </div>

            <div className="col-span-5 p-4 font-semibold">
              Original
            </div>

            <div className="col-span-6 p-4 font-semibold">
              Updated
            </div>

          </div>

          {diffResult.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              Enter text in both editors to
              compare differences.
            </div>
          ) : (
            diffResult.map((row) => (
              <div
                key={row.line}
                className={`grid grid-cols-12 border-b border-white/5 ${
                  row.type === "changed"
                    ? "bg-yellow-500/10"
                    : row.type === "added"
                    ? "bg-green-500/10"
                    : row.type === "removed"
                    ? "bg-red-500/10"
                    : ""
                }`}
              >

                <div className="col-span-1 p-3 text-gray-500 text-sm">
                  {row.line}
                </div>

                <div className="col-span-5 p-3 whitespace-pre-wrap break-words">
                  {row.left}
                </div>

                <div className="col-span-6 p-3 whitespace-pre-wrap break-words">
                  {row.right}
                </div>

              </div>
            ))
          )}

        </div>

        {/* Legend */}
        <div className="grid md:grid-cols-4 gap-4 mt-8">

          <Legend
            color="bg-green-500/20"
            text="Added Lines"
          />

          <Legend
            color="bg-red-500/20"
            text="Removed Lines"
          />

          <Legend
            color="bg-yellow-500/20"
            text="Modified Lines"
          />

          <Legend
            color="bg-white/10"
            text="Unchanged Lines"
          />

        </div>

      </div>

    </main>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-gray-400 text-sm">
        {title}
      </p>
      <h3 className="text-3xl font-black mt-2">
        {value}
      </h3>
    </div>
  );
}

function Legend({
  color,
  text,
}: {
  color: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 p-4">
      <div
        className={`w-5 h-5 rounded ${color}`}
      />
      <span className="text-gray-300">
        {text}
      </span>
    </div>
  );
}