"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownPreviewPage() {
  const [markdown, setMarkdown] = useState(`# Welcome to K in Tech

## Markdown Preview Tool

Write markdown on the left and see the preview instantly.

### Features

- Live Preview
- Copy Markdown
- Clear Editor
- Developer Friendly

\`\`\`ts
function greet() {
  console.log("Hello K in Tech");
}
\`\`\`

> Build. Learn. Grow.
`);

  const copyMarkdown = async () => {
    await navigator.clipboard.writeText(markdown);
  };

  const clearMarkdown = () => {
    setMarkdown("");
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Markdown Preview
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Write Markdown and preview it instantly.
            Perfect for README files, blogs,
            documentation, and technical notes.
          </p>

        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">

          <button
            onClick={copyMarkdown}
            className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
          >
            Copy Markdown
          </button>

          <button
            onClick={clearMarkdown}
            className="px-5 py-3 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition"
          >
            Clear
          </button>

        </div>

        {/* Editor + Preview */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Editor */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold mb-4">
              Markdown Editor
            </h2>

            <textarea
              value={markdown}
              onChange={(e) =>
                setMarkdown(e.target.value)
              }
              className="w-full h-[600px] rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-sm resize-none outline-none focus:border-blue-500"
              placeholder="Write markdown..."
            />

          </div>

          {/* Preview */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold mb-4">
              Live Preview
            </h2>

            <div className="prose prose-invert max-w-none min-h-[600px] break-words">

              <ReactMarkdown>
                {markdown}
              </ReactMarkdown>

            </div>

          </div>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              Live Rendering
            </h3>

            <p className="text-sm text-gray-400">
              Instantly preview markdown while
              typing.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              README Ready
            </h3>

            <p className="text-sm text-gray-400">
              Perfect for GitHub README files and
              project documentation.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              Blog Writing
            </h3>

            <p className="text-sm text-gray-400">
              Draft technical blogs before
              publishing.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}