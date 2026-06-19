"use client";

import { useState } from "react";

export default function JsonFormatterPage() {
  const [input, setInput] = useState(`{
  "name":"K in Tech",
  "type":"Developer Platform"
}`);

  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(
    null
  );

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);

      const formatted = JSON.stringify(
        parsed,
        null,
        2
      );

      setOutput(formatted);
      setError("");
      setIsValid(true);
    } catch (err) {
      setOutput("");
      setError(
        err instanceof Error
          ? err.message
          : "Invalid JSON"
      );
      setIsValid(false);
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);

      const minified =
        JSON.stringify(parsed);

      setOutput(minified);
      setError("");
      setIsValid(true);
    } catch (err) {
      setOutput("");
      setError(
        err instanceof Error
          ? err.message
          : "Invalid JSON"
      );
      setIsValid(false);
    }
  };

  const validateJson = () => {
    try {
      JSON.parse(input);

      setOutput("");
      setError("");
      setIsValid(true);
    } catch (err) {
      setOutput("");
      setError(
        err instanceof Error
          ? err.message
          : "Invalid JSON"
      );
      setIsValid(false);
    }
  };

  const copyOutput = async () => {
    if (!output) return;

    await navigator.clipboard.writeText(
      output
    );
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError("");
    setIsValid(null);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            JSON Formatter
          </h1>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Format, validate, beautify, and
            minify JSON instantly. Perfect for
            APIs, debugging, and development.
          </p>

        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">

          <button
            onClick={formatJson}
            className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
          >
            Format JSON
          </button>

          <button
            onClick={minifyJson}
            className="px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition"
          >
            Minify JSON
          </button>

          <button
            onClick={validateJson}
            className="px-5 py-3 rounded-xl bg-green-500 hover:bg-green-600 transition"
          >
            Validate
          </button>

          <button
            onClick={copyOutput}
            className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition"
          >
            Copy Output
          </button>

          <button
            onClick={clearAll}
            className="px-5 py-3 rounded-xl border border-red-500/20 text-red-400 hover:bg-red-500/10 transition"
          >
            Clear
          </button>

        </div>

        {/* STATUS */}
        {isValid !== null && (
          <div
            className={`mb-6 rounded-2xl p-4 border ${
              isValid
                ? "border-green-500/30 bg-green-500/10 text-green-400"
                : "border-red-500/30 bg-red-500/10 text-red-400"
            }`}
          >
            {isValid
              ? "✅ Valid JSON"
              : "❌ Invalid JSON"}
          </div>
        )}

        {/* EDITORS */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* INPUT */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold mb-4">
              Input JSON
            </h2>

            <textarea
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              className="w-full h-[500px] rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-sm outline-none resize-none focus:border-blue-500"
              placeholder="Paste JSON here..."
            />

          </div>

          {/* OUTPUT */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold mb-4">
              Output
            </h2>

            <textarea
              readOnly
              value={output}
              className="w-full h-[500px] rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-sm outline-none resize-none"
              placeholder="Formatted JSON will appear here..."
            />

          </div>

        </div>

        {/* ERROR */}
        {error && (
          <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-400 font-mono text-sm overflow-auto">
            {error}
          </div>
        )}

        {/* INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              Beautify JSON
            </h3>

            <p className="text-gray-400 text-sm">
              Make API responses and JSON files
              easier to read with proper formatting.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              Validate Instantly
            </h3>

            <p className="text-gray-400 text-sm">
              Detect syntax errors before sending
              requests or saving configuration files.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              Minify JSON
            </h3>

            <p className="text-gray-400 text-sm">
              Compress JSON into a single line for
              production usage and data transfer.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}