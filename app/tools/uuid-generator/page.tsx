"use client";

import { useState } from "react";

export default function UUIDGeneratorPage() {
  const [count, setCount] = useState(5);
  const [uuids, setUuids] = useState<string[]>([]);

  const generateUUIDs = () => {
    const generated = Array.from(
      { length: count },
      () => crypto.randomUUID()
    );

    setUuids(generated);
  };

  const copyUUID = async (uuid: string) => {
    await navigator.clipboard.writeText(uuid);
  };

  const copyAll = async () => {
    await navigator.clipboard.writeText(
      uuids.join("\n")
    );
  };

  const downloadTXT = () => {
    const blob = new Blob(
      [uuids.join("\n")],
      { type: "text/plain" }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "uuids.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            UUID Generator
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Generate secure UUID v4 identifiers
            instantly for databases, APIs,
            applications, and distributed systems.
          </p>

        </div>

        {/* Controls */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          <div className="flex flex-col md:flex-row gap-4 items-center">

            <div className="w-full md:w-auto">

              <label className="text-sm text-gray-400">
                Number of UUIDs
              </label>

              <input
                type="number"
                min={1}
                max={100}
                value={count}
                onChange={(e) =>
                  setCount(Number(e.target.value))
                }
                className="mt-2 w-full md:w-40 px-4 py-3 rounded-xl bg-black border border-white/10 outline-none focus:border-blue-500"
              />

            </div>

            <button
              onClick={generateUUIDs}
              className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
            >
              Generate UUIDs
            </button>

            {uuids.length > 0 && (
              <>
                <button
                  onClick={copyAll}
                  className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition"
                >
                  Copy All
                </button>

                <button
                  onClick={downloadTXT}
                  className="px-6 py-3 rounded-xl border border-green-500/30 text-green-400 hover:bg-green-500/10 transition"
                >
                  Download TXT
                </button>
              </>
            )}

          </div>

        </div>

        {/* UUID List */}
        <div className="mt-8 space-y-4">

          {uuids.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/10 p-10 text-center text-gray-500">
              Click "Generate UUIDs" to create
              secure identifiers.
            </div>
          ) : (
            uuids.map((uuid, index) => (
              <div
                key={uuid}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >

                <div>

                  <p className="text-xs text-gray-500 mb-1">
                    UUID #{index + 1}
                  </p>

                  <code className="break-all text-blue-400">
                    {uuid}
                  </code>

                </div>

                <button
                  onClick={() =>
                    copyUUID(uuid)
                  }
                  className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition"
                >
                  Copy
                </button>

              </div>
            ))
          )}

        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              UUID v4
            </h3>

            <p className="text-sm text-gray-400">
              Generated using cryptographically
              secure random values.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              Database IDs
            </h3>

            <p className="text-sm text-gray-400">
              Perfect for records, APIs,
              microservices, and distributed
              systems.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              Bulk Generation
            </h3>

            <p className="text-sm text-gray-400">
              Generate up to 100 UUIDs at once
              and export them instantly.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}