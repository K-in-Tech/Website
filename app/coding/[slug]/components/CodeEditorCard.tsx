"use client";

import Editor from "@monaco-editor/react";
import {
  Copy,
  RotateCcw,
  Save,
  Maximize2,
  Minimize2,
  Code2,
} from "lucide-react";
import { useEffect, useState } from "react";

const starterCodes = {
  javascript: `function solve() {

}`,
  python: `def solve():
    pass`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {

    return 0;
}`,
  java: `public class Main {
    public static void main(String[] args) {

    }
}`,
};

export default function CodeEditorCard() {
  const [language, setLanguage] =
    useState("javascript");

  const [code, setCode] =
    useState(starterCodes.javascript);

  const [savedAt, setSavedAt] =
    useState("");

  const [fullscreen, setFullscreen] =
    useState(false);

  const storageKey = `editor-${language}`;

  useEffect(() => {
    const saved =
      localStorage.getItem(storageKey);

    if (saved) {
      setCode(saved);
    } else {
      setCode(
        starterCodes[
          language as keyof typeof starterCodes
        ]
      );
    }
  }, [language]);

  const saveDraft = () => {
    localStorage.setItem(
      storageKey,
      code
    );

    setSavedAt(
      new Date().toLocaleTimeString()
    );
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(
      code
    );
  };

  const resetCode = () => {
    setCode(
      starterCodes[
        language as keyof typeof starterCodes
      ]
    );
  };

  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 overflow-hidden ${
        fullscreen
          ? "fixed inset-4 z-50"
          : ""
      }`}
    >
      {/* HEADER */}

      <div className="border-b border-white/10 p-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">
            <Code2
              size={18}
              className="text-blue-400"
            />

            <h2 className="font-bold">
              Code Editor
            </h2>
          </div>

          <button
            onClick={() =>
              setFullscreen(
                !fullscreen
              )
            }
            className="p-2 rounded-lg hover:bg-white/10"
          >
            {fullscreen ? (
              <Minimize2 size={16} />
            ) : (
              <Maximize2 size={16} />
            )}
          </button>

        </div>

        <div className="flex items-center justify-between mt-4">

          <select
            value={language}
            onChange={(e) =>
              setLanguage(
                e.target.value
              )
            }
            className="bg-black border border-white/10 rounded-xl px-3 py-2 text-sm"
          >
            <option value="javascript">
              JavaScript
            </option>

            <option value="python">
              Python
            </option>

            <option value="cpp">
              C++
            </option>

            <option value="java">
              Java
            </option>
          </select>

          <div className="text-xs text-gray-500">
            {savedAt
              ? `Saved at ${savedAt}`
              : "Not saved"}
          </div>

        </div>

      </div>

      {/* EDITOR */}

      <Editor
        height={
          fullscreen
            ? "calc(100vh - 220px)"
            : "500px"
        }
        theme="vs-dark"
        language={language}
        value={code}
        onChange={(value) =>
          setCode(value || "")
        }
        options={{
          minimap: {
            enabled: false,
          },
          fontSize: 14,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />

      {/* ACTIONS */}

      <div className="border-t border-white/10 p-4">

        <div className="grid grid-cols-3 gap-3">

          <button
            onClick={saveDraft}
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-medium transition"
          >
            <Save size={16} />
            Save
          </button>

          <button
            onClick={copyCode}
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <Copy size={16} />
            Copy
          </button>

          <button
            onClick={resetCode}
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <RotateCcw size={16} />
            Reset
          </button>

        </div>

        <div className="mt-4 text-xs text-gray-500 text-center">
          Code execution is coming soon.
          You can write, save, and manage
          your solutions meanwhile.
        </div>

      </div>

    </div>
  );
}