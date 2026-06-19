"use client";

import { useState } from "react";

export default function CaseConverterPage() {
  const [input, setInput] = useState("");

  const toCamelCase = (str: string) =>
    str
      .toLowerCase()
      .replace(/[-_\s]+(.)?/g, (_, c) =>
        c ? c.toUpperCase() : ""
      );

  const toPascalCase = (str: string) =>
    toCamelCase(str).replace(
      /^[a-z]/,
      (m) => m.toUpperCase()
    );

  const toSnakeCase = (str: string) =>
    str
      .replace(/([a-z])([A-Z])/g, "$1_$2")
      .replace(/[\s-]+/g, "_")
      .toLowerCase();

  const toKebabCase = (str: string) =>
    str
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();

  const toUpperCase = (str: string) =>
    str.toUpperCase();

  const toLowerCase = (str: string) =>
    str.toLowerCase();

  const toTitleCase = (str: string) =>
    str.replace(
      /\w\S*/g,
      (txt) =>
        txt.charAt(0).toUpperCase() +
        txt.substring(1).toLowerCase()
    );

  const results = {
    CamelCase: toCamelCase(input),
    PascalCase: toPascalCase(input),
    snake_case: toSnakeCase(input),
    "kebab-case": toKebabCase(input),
    UPPERCASE: toUpperCase(input),
    lowercase: toLowerCase(input),
    "Title Case": toTitleCase(input),
  };

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 h-[400px] w-[400px] bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-12">

          <div className="inline-flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm">
            Developer Utility
          </div>

          <h1 className="mt-6 text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Case Converter
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Convert text instantly between camelCase,
            PascalCase, snake_case, kebab-case,
            UPPERCASE, lowercase and Title Case.
          </p>

        </div>

        {/* Input */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          <label className="block text-sm text-gray-400 mb-3">
            Enter Text
          </label>

          <textarea
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            placeholder="Example: hello world example"
            className="w-full h-40 rounded-2xl bg-black border border-white/10 p-4 outline-none focus:border-blue-500 resize-none"
          />

        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {Object.entries(results).map(
            ([label, value]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
              >

                <div className="flex items-center justify-between mb-3">

                  <h3 className="font-bold text-lg">
                    {label}
                  </h3>

                  <button
                    onClick={() => copy(value)}
                    className="px-3 py-1 text-sm rounded-lg border border-white/10 hover:bg-white/5"
                  >
                    Copy
                  </button>

                </div>

                <div className="rounded-xl bg-black border border-white/10 p-4 break-all text-blue-400 min-h-[70px]">
                  {value || "-"}
                </div>

              </div>
            )
          )}

        </div>

        {/* Examples */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          <h2 className="text-2xl font-bold mb-6">
            Common Naming Conventions
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="rounded-xl border border-white/10 p-4">
              <h3 className="font-semibold mb-2">
                camelCase
              </h3>
              <p className="text-gray-400 text-sm">
                JavaScript variables and functions.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <h3 className="font-semibold mb-2">
                PascalCase
              </h3>
              <p className="text-gray-400 text-sm">
                React components and classes.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <h3 className="font-semibold mb-2">
                snake_case
              </h3>
              <p className="text-gray-400 text-sm">
                Databases and Python naming.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <h3 className="font-semibold mb-2">
                kebab-case
              </h3>
              <p className="text-gray-400 text-sm">
                URLs and CSS classes.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <h3 className="font-semibold mb-2">
                UPPERCASE
              </h3>
              <p className="text-gray-400 text-sm">
                Constants and environment variables.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <h3 className="font-semibold mb-2">
                Title Case
              </h3>
              <p className="text-gray-400 text-sm">
                Blog titles and headings.
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}