"use client";

import { useState } from "react";

const starterHtml = `<!DOCTYPE html>
<html>
<head>
  <title>K in Tech</title>
</head>
<body>
  <h1>Hello Developers 🚀</h1>
  <p>Start editing HTML here...</p>
</body>
</html>`;

export default function HtmlPreviewPage() {
  const [html, setHtml] = useState(starterHtml);

  const copyHtml = async () => {
    await navigator.clipboard.writeText(html);
  };

  const downloadHtml = () => {
    const blob = new Blob([html], {
      type: "text/html",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    a.click();

    URL.revokeObjectURL(url);
  };

  const openFullscreen = () => {
    const win = window.open();

    if (!win) return;

    win.document.open();
    win.document.write(html);
    win.document.close();
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-purple-500/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="inline-flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm">
            Frontend Tool
          </div>

          <h1 className="mt-6 text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            HTML Preview
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Write HTML and instantly see the
            rendered output in real time.
          </p>

        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mb-6">

          <button
            onClick={copyHtml}
            className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
          >
            Copy HTML
          </button>

          <button
            onClick={downloadHtml}
            className="px-5 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
          >
            Download HTML
          </button>

          <button
            onClick={openFullscreen}
            className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition"
          >
            Fullscreen Preview
          </button>

        </div>

        {/* Editor + Preview */}
        <div className="grid xl:grid-cols-2 gap-6">

          {/* Editor */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">

            <div className="border-b border-white/10 px-5 py-4 flex items-center justify-between">

              <h2 className="font-bold">
                HTML Editor
              </h2>

              <span className="text-xs text-gray-500">
                Live Editing
              </span>

            </div>

            <textarea
              value={html}
              onChange={(e) =>
                setHtml(e.target.value)
              }
              spellCheck={false}
              className="w-full h-[700px] bg-black text-green-400 p-5 font-mono text-sm outline-none resize-none"
            />

          </div>

          {/* Preview */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">

            <div className="border-b border-white/10 px-5 py-4 flex items-center justify-between">

              <h2 className="font-bold">
                Live Preview
              </h2>

              <span className="text-xs text-gray-500">
                Rendered Output
              </span>

            </div>

            <iframe
              title="HTML Preview"
              srcDoc={html}
              className="w-full h-[700px] bg-white"
              sandbox="allow-scripts"
            />

          </div>

        </div>

        {/* Tips */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <h3 className="font-bold mb-2">
              Instant Rendering
            </h3>

            <p className="text-sm text-gray-400">
              Changes appear immediately in the
              preview window.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <h3 className="font-bold mb-2">
              Practice HTML
            </h3>

            <p className="text-sm text-gray-400">
              Great for beginners learning tags,
              layouts, and web structure.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <h3 className="font-bold mb-2">
              Export Files
            </h3>

            <p className="text-sm text-gray-400">
              Download your work as a ready-to-use
              HTML file.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}