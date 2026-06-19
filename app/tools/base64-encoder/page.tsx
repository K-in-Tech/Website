"use client";

import { useState } from "react";

export default function Base64EncoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const encodeText = () => {
    try {
      setError("");
      const encoded = btoa(
        unescape(encodeURIComponent(input))
      );
      setOutput(encoded);
    } catch {
      setError("Failed to encode text.");
    }
  };

  const decodeText = () => {
    try {
      setError("");
      const decoded = decodeURIComponent(
        escape(atob(input))
      );
      setOutput(decoded);
    } catch {
      setError("Invalid Base64 string.");
    }
  };

  const copyOutput = async () => {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);
    } catch {
      setError("Failed to copy.");
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Base64 Encoder & Decoder
          </h1>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Encode plain text into Base64 or decode
            Base64 back into readable text instantly.
          </p>

        </div>

        {/* TOOL CARD */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">

          {/* INPUT */}
          <div>

            <label className="block mb-2 text-sm text-gray-400">
              Input
            </label>

            <textarea
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              placeholder="Enter text or Base64 string..."
              className="w-full h-48 rounded-2xl border border-white/10 bg-black/40 p-4 outline-none resize-none focus:border-blue-500"
            />

          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap gap-3 mt-6">

            <button
              onClick={encodeText}
              className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-medium"
            >
              Encode
            </button>

            <button
              onClick={decodeText}
              className="px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition font-medium"
            >
              Decode
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

          {/* ERROR */}
          {error && (
            <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-400">
              {error}
            </div>
          )}

          {/* OUTPUT */}
          <div className="mt-8">

            <label className="block mb-2 text-sm text-gray-400">
              Output
            </label>

            <textarea
              value={output}
              readOnly
              placeholder="Result will appear here..."
              className="w-full h-48 rounded-2xl border border-white/10 bg-black/40 p-4 outline-none resize-none"
            />

          </div>

        </div>

        {/* INFO */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-semibold text-lg mb-3">
              What is Base64?
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Base64 is a text encoding format that
              converts binary data into ASCII text.
              It is commonly used in APIs, JWT tokens,
              emails, and file transfers.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-semibold text-lg mb-3">
              Common Uses
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>• JWT Payload Encoding</li>
              <li>• API Data Transfer</li>
              <li>• Email Attachments</li>
              <li>• Image Data URLs</li>
              <li>• Authentication Tokens</li>
            </ul>
          </div>

        </div>

      </div>

    </main>
  );
}