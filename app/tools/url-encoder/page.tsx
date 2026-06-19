"use client";

import { useState } from "react";

export default function UrlEncoderPage() {
  const [input, setInput] = useState("");
  const [encoded, setEncoded] = useState("");
  const [decoded, setDecoded] = useState("");

  const handleEncode = () => {
    try {
      const result = encodeURIComponent(input);
      setEncoded(result);
      setDecoded("");
    } catch {
      setEncoded("Invalid input");
    }
  };

  const handleDecode = () => {
    try {
      const result = decodeURIComponent(input);
      setDecoded(result);
      setEncoded("");
    } catch {
      setDecoded("Invalid URL encoded string");
    }
  };

  const copyText = async (text: string) => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
  };

  const clearAll = () => {
    setInput("");
    setEncoded("");
    setDecoded("");
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-12">

          <div className="inline-flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm">
            Developer Utility
          </div>

          <h1 className="mt-6 text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            URL Encoder / Decoder
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Encode URLs safely for web applications
            and decode encoded URLs instantly.
          </p>

        </div>

        {/* Input */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          <label className="block text-sm text-gray-400 mb-3">
            Input Text or URL
          </label>

          <textarea
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            placeholder="https://example.com/search?q=hello world"
            className="w-full h-44 rounded-2xl bg-black border border-white/10 p-4 resize-none outline-none focus:border-blue-500"
          />

          <div className="flex flex-wrap gap-3 mt-5">

            <button
              onClick={handleEncode}
              className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-medium"
            >
              Encode URL
            </button>

            <button
              onClick={handleDecode}
              className="px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition font-medium"
            >
              Decode URL
            </button>

            <button
              onClick={clearAll}
              className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition"
            >
              Clear
            </button>

          </div>

        </div>

        {/* Results */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          {/* Encoded */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <div className="flex items-center justify-between mb-4">

              <h2 className="text-xl font-bold">
                Encoded Output
              </h2>

              <button
                onClick={() =>
                  copyText(encoded)
                }
                disabled={!encoded}
                className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 disabled:opacity-50"
              >
                Copy
              </button>

            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-4 min-h-[220px] break-all text-blue-400">
              {encoded ||
                "Encoded URL will appear here"}
            </div>

          </div>

          {/* Decoded */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <div className="flex items-center justify-between mb-4">

              <h2 className="text-xl font-bold">
                Decoded Output
              </h2>

              <button
                onClick={() =>
                  copyText(decoded)
                }
                disabled={!decoded}
                className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 disabled:opacity-50"
              >
                Copy
              </button>

            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-4 min-h-[220px] break-all text-green-400">
              {decoded ||
                "Decoded URL will appear here"}
            </div>

          </div>

        </div>

        {/* Examples */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          <h2 className="text-2xl font-bold mb-6">
            Common Examples
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="rounded-2xl border border-white/10 p-5">

              <p className="text-sm text-gray-500 mb-2">
                Original URL
              </p>

              <code className="text-blue-400 break-all">
                https://example.com/search?q=hello world
              </code>

            </div>

            <div className="rounded-2xl border border-white/10 p-5">

              <p className="text-sm text-gray-500 mb-2">
                Encoded URL
              </p>

              <code className="text-green-400 break-all">
                https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dhello%20world
              </code>

            </div>

          </div>

        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-bold mb-2">
              Safe URLs
            </h3>
            <p className="text-sm text-gray-400">
              Convert special characters into a
              URL-safe format.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-bold mb-2">
              Query Parameters
            </h3>
            <p className="text-sm text-gray-400">
              Encode search queries and API
              request parameters correctly.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-bold mb-2">
              Instant Decode
            </h3>
            <p className="text-sm text-gray-400">
              Read encoded URLs in a human
              friendly format.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}