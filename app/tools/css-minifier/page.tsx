"use client";

import { useState } from "react";

export default function CssMinifierPage() {
  const [input, setInput] = useState(`/* Example CSS */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  color: #3b82f6;
  font-size: 2rem;
  font-weight: bold;
}`);
  
  const [output, setOutput] = useState("");

  const minifyCss = () => {
    try {
      const minified = input
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\s+/g, " ")
        .replace(/\s*([{}:;,])\s*/g, "$1")
        .replace(/;}/g, "}")
        .trim();

      setOutput(minified);
    } catch {
      setOutput("Invalid CSS");
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
    setInput(`body {
  background: #000;
  color: white;
  font-family: sans-serif;
}

.card {
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #333;
}`);
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
            Frontend Tool
          </div>

          <h1 className="mt-6 text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            CSS Minifier
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Compress CSS by removing comments,
            whitespace, and unnecessary characters
            to reduce file size.
          </p>

        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mb-6">

          <button
            onClick={minifyCss}
            className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
          >
            Minify CSS
          </button>

          <button
            onClick={copyOutput}
            disabled={!output}
            className="px-5 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 disabled:opacity-50"
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
                Original CSS
              </h2>
            </div>

            <textarea
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              spellCheck={false}
              className="w-full h-[600px] bg-black p-5 text-sm font-mono text-white resize-none outline-none"
              placeholder="Paste CSS here..."
            />

          </div>

          {/* Output */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">

            <div className="px-5 py-4 border-b border-white/10 flex justify-between">

              <h2 className="font-bold">
                Minified CSS
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
              className="w-full h-[600px] bg-black p-5 text-sm font-mono text-green-400 resize-none outline-none"
              placeholder="Minified CSS will appear here..."
            />

          </div>

        </div>

        {/* Stats */}
        {output && (
          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

              <p className="text-gray-400 text-sm">
                Original Size
              </p>

              <h3 className="text-3xl font-black mt-2">
                {input.length}
              </h3>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

              <p className="text-gray-400 text-sm">
                Minified Size
              </p>

              <h3 className="text-3xl font-black mt-2 text-green-400">
                {output.length}
              </h3>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

              <p className="text-gray-400 text-sm">
                Saved
              </p>

              <h3 className="text-3xl font-black mt-2 text-blue-400">
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

            </div>

          </div>
        )}

      </div>

    </main>
  );
}