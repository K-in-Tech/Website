"use client";

import { useState } from "react";

export default function JsMinifierPage() {
  const [input, setInput] = useState(`// Example JavaScript

function greet(name) {
  console.log("Hello " + name);
}

function calculate(a, b) {
  return a + b;
}

greet("Developer");
`);

  const [output, setOutput] = useState("");

  const minifyJs = () => {
    try {
      const minified = input
        .replace(/\/\/.*$/gm, "")
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\n/g, " ")
        .replace(/\s+/g, " ")
        .replace(/\s*([{}();,:=+\-*/<>])\s*/g, "$1")
        .trim();

      setOutput(minified);
    } catch {
      setOutput("Invalid JavaScript");
    }
  };

  const copyOutput = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
  };

  const loadSample = () => {
    setInput(`// User utility

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" }
];

function getUser(id) {
  return users.find(
    user => user.id === id
  );
}

console.log(getUser(1));
`);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="inline-flex px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 text-sm">
            Frontend Optimization Tool
          </div>

          <h1 className="mt-6 text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            JavaScript Minifier
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Compress JavaScript code by removing comments,
            whitespace, and unnecessary characters to reduce
            bundle size and improve performance.
          </p>

        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mb-6">

          <button
            onClick={minifyJs}
            className="px-5 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition"
          >
            Minify JavaScript
          </button>

          <button
            onClick={copyOutput}
            disabled={!output}
            className="px-5 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold disabled:opacity-50"
          >
            Copy Output
          </button>

          <button
            onClick={loadSample}
            className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5"
          >
            Load Sample
          </button>

          <button
            onClick={clearAll}
            className="px-5 py-3 rounded-xl border border-red-500/20 text-red-400 hover:bg-red-500/10"
          >
            Clear
          </button>

        </div>

        {/* Editors */}
        <div className="grid xl:grid-cols-2 gap-6">

          {/* Input */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">

            <div className="px-5 py-4 border-b border-white/10">
              <h2 className="font-bold">
                Original JavaScript
              </h2>
            </div>

            <textarea
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              spellCheck={false}
              className="w-full h-[650px] bg-black p-5 text-sm font-mono text-white resize-none outline-none"
              placeholder="Paste JavaScript here..."
            />

          </div>

          {/* Output */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">

            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">

              <h2 className="font-bold">
                Minified Output
              </h2>

              {output && (
                <span className="text-xs text-green-400">
                  {output.length} chars
                </span>
              )}

            </div>

            <textarea
              readOnly
              value={output}
              className="w-full h-[650px] bg-black p-5 text-sm font-mono text-green-400 resize-none outline-none"
              placeholder="Minified JavaScript will appear here..."
            />

          </div>

        </div>

        {/* Analytics */}
        {output && (
          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

              <p className="text-gray-400 text-sm">
                Original Size
              </p>

              <h3 className="text-3xl font-black mt-2">
                {input.length}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Characters
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

              <p className="text-gray-400 text-sm">
                Minified Size
              </p>

              <h3 className="text-3xl font-black mt-2 text-green-400">
                {output.length}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Characters
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

              <p className="text-gray-400 text-sm">
                Reduction
              </p>

              <h3 className="text-3xl font-black mt-2 text-yellow-400">
                {Math.max(
                  0,
                  Math.round(
                    ((input.length - output.length) /
                      input.length) *
                      100
                  )
                )}
                %
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Size Saved
              </p>

            </div>

          </div>
        )}

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-bold mb-2">
              Remove Comments
            </h3>
            <p className="text-sm text-gray-400">
              Deletes single-line and block comments.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-bold mb-2">
              Reduce Whitespace
            </h3>
            <p className="text-sm text-gray-400">
              Compresses code without changing logic.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-bold mb-2">
              Copy Instantly
            </h3>
            <p className="text-sm text-gray-400">
              One-click copy for production use.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-bold mb-2">
              Bundle Optimization
            </h3>
            <p className="text-sm text-gray-400">
              Helps reduce payload size and improve speed.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}