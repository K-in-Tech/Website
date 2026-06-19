"use client";

import { useMemo, useState } from "react";

export default function JsonValidatorPage() {
  const [jsonInput, setJsonInput] = useState(`{
  "name": "K in Tech",
  "category": "Developer Platform",
  "tools": ["JSON Formatter", "JWT Decoder"]
}`);

  const [result, setResult] = useState<{
    valid: boolean;
    error?: string;
    formatted?: string;
  } | null>(null);

  const validateJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);

      setResult({
        valid: true,
        formatted: JSON.stringify(
          parsed,
          null,
          2
        ),
      });
    } catch (error) {
      setResult({
        valid: false,
        error:
          error instanceof Error
            ? error.message
            : "Invalid JSON",
      });
    }
  };

  const stats = useMemo(() => {
    try {
      const parsed = JSON.parse(jsonInput);

      const jsonString =
        JSON.stringify(parsed);

      return {
        characters: jsonString.length,
        keys: countKeys(parsed),
        sizeKB: (
          new Blob([jsonString]).size / 1024
        ).toFixed(2),
      };
    } catch {
      return null;
    }
  }, [jsonInput]);

  const copyFormatted = async () => {
    if (!result?.formatted) return;

    await navigator.clipboard.writeText(
      result.formatted
    );
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            JSON Validator
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Validate JSON, detect syntax errors,
            inspect structure, and analyze JSON
            data instantly.
          </p>

        </div>

        {/* Action */}
        <div className="flex justify-center mb-8">

          <button
            onClick={validateJson}
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
          >
            Validate JSON
          </button>

        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Input */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold mb-4">
              JSON Input
            </h2>

            <textarea
              value={jsonInput}
              onChange={(e) =>
                setJsonInput(e.target.value)
              }
              className="w-full h-[500px] rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-sm resize-none outline-none focus:border-blue-500"
              placeholder="Paste JSON here..."
            />

          </div>

          {/* Result */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold mb-4">
              Validation Result
            </h2>

            {!result ? (
              <div className="h-[500px] flex items-center justify-center text-gray-500">
                Run validation to see results
              </div>
            ) : result.valid ? (
              <div>

                <div className="mb-4 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
                  ✅ Valid JSON
                </div>

                <button
                  onClick={copyFormatted}
                  className="mb-4 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5"
                >
                  Copy JSON
                </button>

                <textarea
                  readOnly
                  value={result.formatted}
                  className="w-full h-[380px] rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-sm"
                />

              </div>
            ) : (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
                ❌ {result.error}
              </div>
            )}

          </div>

        </div>

        {/* Stats */}
        {stats && (
          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-gray-400 text-sm">
                Characters
              </p>

              <h3 className="text-3xl font-black mt-2">
                {stats.characters}
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-gray-400 text-sm">
                Total Keys
              </p>

              <h3 className="text-3xl font-black mt-2">
                {stats.keys}
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-gray-400 text-sm">
                Size
              </p>

              <h3 className="text-3xl font-black mt-2">
                {stats.sizeKB} KB
              </h3>
            </div>

          </div>
        )}

      </div>

    </main>
  );
}

function countKeys(obj: any): number {
  let count = 0;

  if (
    obj &&
    typeof obj === "object"
  ) {
    for (const key in obj) {
      count++;

      count += countKeys(obj[key]);
    }
  }

  return count;
}