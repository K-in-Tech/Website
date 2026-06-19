"use client";

import { useState } from "react";

const DEFAULT_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export default function LoremIpsumPage() {
  const [paragraphs, setParagraphs] = useState(3);
  const [output, setOutput] = useState("");

  const generateLorem = () => {
    const text = Array.from(
      { length: paragraphs },
      () => DEFAULT_TEXT
    ).join("\n\n");

    setOutput(text);
  };

  const copyText = async () => {
    if (!output) return;

    await navigator.clipboard.writeText(output);
  };

  const downloadText = () => {
    if (!output) return;

    const blob = new Blob([output], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "lorem-ipsum.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  const clearAll = () => {
    setOutput("");
    setParagraphs(3);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="inline-flex px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-sm">
            Content Tool
          </div>

          <h1 className="mt-6 text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Lorem Ipsum Generator
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Generate placeholder text for websites,
            UI designs, blogs, landing pages, and
            development projects.
          </p>

        </div>

        {/* Controls */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          <div className="grid md:grid-cols-2 gap-6 items-end">

            <div>

              <label className="block text-sm text-gray-400 mb-2">
                Number of Paragraphs
              </label>

              <input
                type="number"
                min={1}
                max={50}
                value={paragraphs}
                onChange={(e) =>
                  setParagraphs(Number(e.target.value))
                }
                className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 outline-none focus:border-purple-500"
              />

            </div>

            <div className="flex flex-wrap gap-3">

              <button
                onClick={generateLorem}
                className="px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition"
              >
                Generate Text
              </button>

              <button
                onClick={copyText}
                disabled={!output}
                className="px-5 py-3 rounded-xl bg-green-500 text-black font-semibold disabled:opacity-50"
              >
                Copy
              </button>

              <button
                onClick={downloadText}
                disabled={!output}
                className="px-5 py-3 rounded-xl bg-blue-500 text-white disabled:opacity-50"
              >
                Download
              </button>

              <button
                onClick={clearAll}
                className="px-5 py-3 rounded-xl border border-white/10"
              >
                Clear
              </button>

            </div>

          </div>

        </div>

        {/* Output */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          <div className="flex items-center justify-between mb-4">

            <h2 className="text-xl font-bold">
              Generated Text
            </h2>

            {output && (
              <span className="text-sm text-gray-400">
                {output.split(" ").length} words
              </span>
            )}

          </div>

          <textarea
            readOnly
            value={output}
            className="w-full h-[500px] rounded-2xl bg-black border border-white/10 p-4 text-gray-300 resize-none outline-none"
            placeholder="Generated Lorem Ipsum will appear here..."
          />

        </div>

        {/* Quick Presets */}
        <div className="grid md:grid-cols-4 gap-4 mt-8">

          {[1, 3, 5, 10].map((count) => (
            <button
              key={count}
              onClick={() => {
                setParagraphs(count);
                const text = Array.from(
                  { length: count },
                  () => DEFAULT_TEXT
                ).join("\n\n");

                setOutput(text);
              }}
              className="p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
            >
              <h3 className="font-semibold">
                {count} Paragraphs
              </h3>

              <p className="text-xs text-gray-400 mt-2">
                Generate placeholder content
              </p>
            </button>
          ))}

        </div>

      </div>

    </main>
  );
}