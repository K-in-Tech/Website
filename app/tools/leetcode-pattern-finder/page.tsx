"use client";

import { useMemo, useState } from "react";

const patterns = [
  {
    name: "Hash Map",
    description:
      "Use a hash table for fast lookups and frequency counting.",
    keywords: [
      "two sum",
      "contains duplicate",
      "anagram",
      "frequency",
      "pair",
    ],
    examples: [
      "Two Sum",
      "Contains Duplicate",
      "Valid Anagram",
      "Group Anagrams",
    ],
  },

  {
    name: "Two Pointers",
    description:
      "Use two pointers moving toward each other or together.",
    keywords: [
      "sorted array",
      "pair",
      "palindrome",
      "container",
      "three sum",
    ],
    examples: [
      "3Sum",
      "Container With Most Water",
      "Valid Palindrome",
    ],
  },

  {
    name: "Sliding Window",
    description:
      "Maintain a dynamic window while traversing.",
    keywords: [
      "substring",
      "window",
      "longest",
      "consecutive",
      "character replacement",
    ],
    examples: [
      "Longest Substring Without Repeating Characters",
      "Minimum Window Substring",
      "Permutation in String",
    ],
  },

  {
    name: "Binary Search",
    description:
      "Search efficiently in sorted or monotonic data.",
    keywords: [
      "sorted",
      "search",
      "rotated",
      "peak",
      "position",
    ],
    examples: [
      "Binary Search",
      "Search Insert Position",
      "Find Peak Element",
    ],
  },

  {
    name: "Stack",
    description:
      "Use LIFO structure for matching and ordering problems.",
    keywords: [
      "parentheses",
      "next greater",
      "stack",
      "expression",
    ],
    examples: [
      "Valid Parentheses",
      "Daily Temperatures",
      "Min Stack",
    ],
  },

  {
    name: "Queue / BFS",
    description:
      "Explore level by level using a queue.",
    keywords: [
      "graph",
      "matrix",
      "shortest path",
      "level order",
    ],
    examples: [
      "Binary Tree Level Order Traversal",
      "Rotting Oranges",
      "Word Ladder",
    ],
  },

  {
    name: "DFS / Backtracking",
    description:
      "Explore all possibilities recursively.",
    keywords: [
      "combination",
      "subset",
      "permutation",
      "path",
      "backtracking",
    ],
    examples: [
      "Subsets",
      "Permutations",
      "Combination Sum",
      "N Queens",
    ],
  },

  {
    name: "Dynamic Programming",
    description:
      "Store previous results to avoid recomputation.",
    keywords: [
      "maximize",
      "minimum cost",
      "ways",
      "climb",
      "rob",
      "dp",
    ],
    examples: [
      "Climbing Stairs",
      "House Robber",
      "Coin Change",
      "Longest Increasing Subsequence",
    ],
  },

  {
    name: "Greedy",
    description:
      "Choose the best local decision at each step.",
    keywords: [
      "jump",
      "interval",
      "schedule",
      "greedy",
    ],
    examples: [
      "Jump Game",
      "Merge Intervals",
      "Gas Station",
    ],
  },

  {
    name: "Heap / Priority Queue",
    description:
      "Efficiently track largest or smallest elements.",
    keywords: [
      "kth",
      "top k",
      "priority",
      "heap",
      "median",
    ],
    examples: [
      "Kth Largest Element",
      "Top K Frequent Elements",
      "Find Median From Data Stream",
    ],
  },
];

export default function LeetcodePatternFinderPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const lower = query.toLowerCase();

    return patterns.filter((pattern) =>
      pattern.keywords.some((keyword) =>
        lower.includes(keyword)
      )
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            LeetCode Pattern Finder
          </h1>

          <p className="text-gray-400 mt-4">
            Describe a problem and discover the
            likely DSA pattern to solve it.
          </p>

        </div>

        {/* Input */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          <textarea
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            placeholder="Example: Find longest substring without repeating characters..."
            className="w-full h-40 rounded-2xl border border-white/10 bg-black/40 p-4 outline-none resize-none focus:border-blue-500"
          />

        </div>

        {/* Results */}
        <div className="mt-8 space-y-6">

          {results.length === 0 && query && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center text-gray-400">
              No matching pattern found.
            </div>
          )}

          {results.map((pattern) => (
            <div
              key={pattern.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >

              <div className="flex items-center justify-between">

                <h2 className="text-2xl font-bold">
                  {pattern.name}
                </h2>

                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                  Recommended
                </span>

              </div>

              <p className="text-gray-400 mt-3">
                {pattern.description}
              </p>

              <div className="mt-5">

                <h3 className="font-semibold mb-3">
                  Common Problems
                </h3>

                <div className="flex flex-wrap gap-2">

                  {pattern.examples.map(
                    (example) => (
                      <span
                        key={example}
                        className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm"
                      >
                        {example}
                      </span>
                    )
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Pattern Roadmap */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8">

          <h2 className="text-2xl font-bold mb-6">
            Most Important DSA Patterns
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {patterns.map((pattern) => (
              <div
                key={pattern.name}
                className="p-4 rounded-xl border border-white/10 bg-black/20"
              >
                <h3 className="font-semibold">
                  {pattern.name}
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                  {pattern.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}