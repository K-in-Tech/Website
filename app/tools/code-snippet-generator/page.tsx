"use client";

import { useState } from "react";

export default function CodeSnippetGeneratorPage() {
  const [title, setTitle] = useState("example.ts");
  const [language, setLanguage] = useState("typescript");
  const [code, setCode] = useState(
`function greet(name: string) {
  return \`Hello \${name}\`;
}`
  );

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  const downloadSnippet = () => {
    const blob = new Blob([code], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = title || "snippet.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Code Snippet Generator
          </h1>

          <p className="mt-4 text-gray-400">
            Create, preview, copy, and export beautiful
            code snippets for blogs, portfolios, and social media.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Editor */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold mb-5">
              Editor
            </h2>

            <div className="space-y-4">

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  File Name
                </label>

                <input
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Language
                </label>

                <select
                  value={language}
                  onChange={(e) =>
                    setLanguage(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-blue-500"
                >
                  <option>typescript</option>
                  <option>javascript</option>
                  <option>python</option>
                  <option>java</option>
                  <option>cpp</option>
                  <option>c</option>
                  <option>go</option>
                  <option>rust</option>
                  <option>php</option>
                  <option>html</option>
                  <option>css</option>
                  <option>sql</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Code
                </label>

                <textarea
                  value={code}
                  onChange={(e) =>
                    setCode(e.target.value)
                  }
                  className="w-full h-[400px] rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-sm outline-none resize-none focus:border-blue-500"
                />
              </div>

              <div className="flex flex-wrap gap-3">

                <button
                  onClick={copyCode}
                  className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
                >
                  Copy Code
                </button>

                <button
                  onClick={downloadSnippet}
                  className="px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition"
                >
                  Download
                </button>

              </div>

            </div>

          </div>

          {/* Preview */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">

            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 bg-black/50">

              <div className="flex items-center gap-2">

                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />

              </div>

              <div className="text-sm text-gray-400">
                {title}
              </div>

              <div className="text-xs text-blue-400">
                {language}
              </div>

            </div>

            <pre className="overflow-auto p-6 h-[560px] text-sm">
              <code className="font-mono whitespace-pre-wrap">
                {code}
              </code>
            </pre>

          </div>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              Multiple Languages
            </h3>

            <p className="text-gray-400 text-sm">
              Generate snippets for JavaScript,
              TypeScript, Python, Java, C++, Go,
              Rust, and more.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              Copy & Export
            </h3>

            <p className="text-gray-400 text-sm">
              Instantly copy code or download
              snippets as files.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              Portfolio Ready
            </h3>

            <p className="text-gray-400 text-sm">
              Perfect for blogs, documentation,
              social posts, and developer portfolios.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}