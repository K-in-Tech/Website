"use client";

import { useState } from "react";

function randomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
}

export default function GradientGeneratorPage() {
  const [color1, setColor1] = useState(randomColor());
  const [color2, setColor2] = useState(randomColor());
  const [direction, setDirection] =
    useState("to right");

  const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;

  const cssCode = `background: ${gradient};`;

  const generateRandom = () => {
    setColor1(randomColor());
    setColor2(randomColor());
  };

  const copyCSS = async () => {
    await navigator.clipboard.writeText(cssCode);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Gradient Generator
          </h1>

          <p className="mt-4 text-gray-400">
            Create beautiful CSS gradients for websites,
            apps, landing pages, and portfolios.
          </p>

        </div>

        {/* Preview */}
        <div
          className="h-80 rounded-3xl border border-white/10"
          style={{
            background: gradient,
          }}
        />

        {/* Controls */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03]">

            <label className="block mb-3 text-gray-400">
              First Color
            </label>

            <input
              type="color"
              value={color1}
              onChange={(e) =>
                setColor1(e.target.value)
              }
              className="w-full h-14"
            />

            <p className="mt-3 font-semibold">
              {color1}
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03]">

            <label className="block mb-3 text-gray-400">
              Second Color
            </label>

            <input
              type="color"
              value={color2}
              onChange={(e) =>
                setColor2(e.target.value)
              }
              className="w-full h-14"
            />

            <p className="mt-3 font-semibold">
              {color2}
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03]">

            <label className="block mb-3 text-gray-400">
              Direction
            </label>

            <select
              value={direction}
              onChange={(e) =>
                setDirection(e.target.value)
              }
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3"
            >
              <option value="to right">
                Left → Right
              </option>

              <option value="to left">
                Right → Left
              </option>

              <option value="to bottom">
                Top → Bottom
              </option>

              <option value="to top">
                Bottom → Top
              </option>

              <option value="45deg">
                45°
              </option>

              <option value="135deg">
                135°
              </option>

              <option value="225deg">
                225°
              </option>

              <option value="315deg">
                315°
              </option>
            </select>

          </div>

        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mt-8">

          <button
            onClick={generateRandom}
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
          >
            Random Gradient
          </button>

          <button
            onClick={copyCSS}
            className="px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition"
          >
            Copy CSS
          </button>

        </div>

        {/* CSS Output */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <h2 className="font-bold text-lg mb-4">
            CSS Code
          </h2>

          <pre className="overflow-auto text-sm text-green-400">
{cssCode}
          </pre>

        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
            <h3 className="font-bold mb-2">
              CSS Ready
            </h3>

            <p className="text-gray-400 text-sm">
              Copy gradients directly into
              CSS, Tailwind, React, or Next.js projects.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
            <h3 className="font-bold mb-2">
              Modern UI Design
            </h3>

            <p className="text-gray-400 text-sm">
              Generate eye-catching backgrounds
              for dashboards and landing pages.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
            <h3 className="font-bold mb-2">
              Developer Friendly
            </h3>

            <p className="text-gray-400 text-sm">
              No design tools needed. Generate
              and copy gradients instantly.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}