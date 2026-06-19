"use client";

import { useMemo, useState } from "react";

export default function RegexTesterPage() {
  const [pattern, setPattern] = useState("\\b\\w+@\\w+\\.\\w+\\b");

  const [testText, setTestText] = useState(
    `john@gmail.com
hello world
admin@yahoo.com
test@example.org`
  );

  const [globalFlag, setGlobalFlag] =
    useState(true);

  const [ignoreCase, setIgnoreCase] =
    useState(true);

  const [multiline, setMultiline] =
    useState(false);

  const result = useMemo(() => {
    try {
      let flags = "";

      if (globalFlag) flags += "g";
      if (ignoreCase) flags += "i";
      if (multiline) flags += "m";

      const regex = new RegExp(
        pattern,
        flags
      );

      const matches = [
        ...testText.matchAll(regex),
      ];

      const highlighted = [];

      let lastIndex = 0;

      matches.forEach((match, index) => {
        const start =
          match.index ?? 0;

        const end =
          start + match[0].length;

        highlighted.push(
          testText.slice(
            lastIndex,
            start
          )
        );

        highlighted.push(
          <mark
            key={index}
            className="bg-green-500/30 text-green-300 rounded px-1"
          >
            {match[0]}
          </mark>
        );

        lastIndex = end;
      });

      highlighted.push(
        testText.slice(lastIndex)
      );

      return {
        valid: true,
        count: matches.length,
        matches: matches.map(
          (m) => m[0]
        ),
        highlighted,
      };
    } catch (error) {
      return {
        valid: false,
        error:
          error instanceof Error
            ? error.message
            : "Invalid Regex",
      };
    }
  }, [
    pattern,
    testText,
    globalFlag,
    ignoreCase,
    multiline,
  ]);

  const copyPattern = async () => {
    await navigator.clipboard.writeText(
      pattern
    );
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Regex Tester
          </h1>

          <p className="mt-4 text-gray-400">
            Test, validate, and debug regular
            expressions instantly.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold mb-6">
              Regex Pattern
            </h2>

            <input
              value={pattern}
              onChange={(e) =>
                setPattern(
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-blue-500 font-mono"
            />

            <button
              onClick={copyPattern}
              className="mt-3 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
            >
              Copy Pattern
            </button>

            {/* Flags */}
            <div className="mt-8">

              <h3 className="font-semibold mb-3">
                Flags
              </h3>

              <div className="space-y-3">

                <Flag
                  label="Global (g)"
                  checked={globalFlag}
                  onChange={() =>
                    setGlobalFlag(
                      !globalFlag
                    )
                  }
                />

                <Flag
                  label="Ignore Case (i)"
                  checked={ignoreCase}
                  onChange={() =>
                    setIgnoreCase(
                      !ignoreCase
                    )
                  }
                />

                <Flag
                  label="Multiline (m)"
                  checked={multiline}
                  onChange={() =>
                    setMultiline(
                      !multiline
                    )
                  }
                />

              </div>

            </div>

          </div>

          {/* Right */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold mb-6">
              Test String
            </h2>

            <textarea
              value={testText}
              onChange={(e) =>
                setTestText(
                  e.target.value
                )
              }
              className="w-full h-[300px] rounded-xl border border-white/10 bg-black/40 p-4 outline-none resize-none font-mono"
            />

          </div>

        </div>

        {/* Results */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          <h2 className="text-xl font-bold mb-5">
            Results
          </h2>

          {!result.valid ? (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-400">
              {result.error}
            </div>
          ) : (
            <>
              <div className="flex flex-wrap gap-4 mb-5">

                <div className="px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20">
                  Matches: {result.count}
                </div>

              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-4 whitespace-pre-wrap leading-7">
                {result.highlighted}
              </div>

              {result.matches.length > 0 && (
                <div className="mt-6">

                  <h3 className="font-semibold mb-3">
                    Matched Values
                  </h3>

                  <div className="flex flex-wrap gap-2">

                    {result.matches.map(
                      (
                        match,
                        index
                      ) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300"
                        >
                          {match}
                        </span>
                      )
                    )}

                  </div>

                </div>
              )}
            </>
          )}

        </div>

        {/* Examples */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <ExampleCard
            title="Email"
            regex="\b\w+@\w+\.\w+\b"
          />

          <ExampleCard
            title="Phone Number"
            regex="\d{10}"
          />

          <ExampleCard
            title="URL"
            regex="https?:\/\/[^\s]+"
          />

        </div>

      </div>

    </main>
  );
}

function Flag({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center justify-between rounded-xl border border-white/10 p-4 cursor-pointer">

      <span>{label}</span>

      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

    </label>
  );
}

function ExampleCard({
  title,
  regex,
}: {
  title: string;
  regex: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <h3 className="font-bold mb-2">
        {title}
      </h3>

      <code className="text-sm text-blue-400 break-all">
        {regex}
      </code>

    </div>
  );
}