"use client";

import Editor from "@monaco-editor/react";
import { useState } from "react";

export default function CodeEditor() {
  const [language, setLanguage] =
    useState("javascript");

  const starterCode: Record<string, string> = {
    javascript: `function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }
}

console.log(twoSum([2,7,11,15], 9));`,

    python: `def two_sum(nums, target):
    seen = {}

    for i in range(len(nums)):
        complement = target - nums[i]

        if complement in seen:
            return [seen[complement], i]

        seen[nums[i]] = i

print(two_sum([2,7,11,15], 9))`,

    cpp: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    cout << "Two Sum Solution Loaded";
    return 0;
}`,

    java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Two Sum Solution Loaded");
    }
}`,
  };

  const [code, setCode] = useState(
    starterCode.javascript
  );

  const [output, setOutput] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [aiLoading, setAiLoading] =
    useState(false);

  const [aiExplanation, setAiExplanation] =
    useState("");

  // CHANGE LANGUAGE
  const handleLanguageChange = (
    lang: string
  ) => {
    setLanguage(lang);

    setCode(starterCode[lang]);

    setOutput("");

    setAiExplanation("");
  };

  // RUN CODE
  const runCode = async () => {
    setLoading(true);

    setOutput("");

    // only JS runs locally
    if (language !== "javascript") {
      setTimeout(() => {
        setOutput(
          `${language.toUpperCase()} execution requires backend compiler integration.

Future integrations:
- Judge0 API
- Piston API
- Docker Sandbox`
        );

        setLoading(false);
      }, 500);

      return;
    }

    try {
      const logs: string[] = [];

      const originalLog = console.log;

      console.log = (...args) => {
        logs.push(
          args
            .map((arg) =>
              typeof arg === "object"
                ? JSON.stringify(arg)
                : String(arg)
            )
            .join(" ")
        );
      };

      // execute code
      new Function(code)();

      console.log = originalLog;

      setOutput(
        logs.join("\n") ||
          "✅ Code executed successfully"
      );

    } catch (error: any) {
      setOutput(`❌ Error:\n${error.message}`);
    }

    setLoading(false);
  };

  // AI EXPLAINER
  const explainCode = async () => {
    try {
      setAiLoading(true);

      setAiExplanation("");

      const response = await fetch(
        "/api/ai/explain",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            code,
            language,
            problem: "Two Sum",
          }),
        }
      );

      const data = await response.json();

      setAiExplanation(
        data.explanation
      );

    } catch (error) {
      setAiExplanation(
        "Failed to generate AI explanation"
      );
    }

    setAiLoading(false);
  };

  // SUBMIT
  const submitCode = () => {
    setOutput(
      `🚀 Solution submitted successfully!

Future Features:
- Real hidden test cases
- Runtime analysis
- AI evaluation
- Global leaderboard
- Submission history`
    );
  };

  return (
    <div className="mt-12 w-full">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Online Code Editor
          </h2>

          <p className="text-gray-400 mt-2">
            Write, Run, Analyze and Submit your code
          </p>
        </div>

        {/* LANGUAGE SELECT */}
        <select
          value={language}
          onChange={(e) =>
            handleLanguageChange(
              e.target.value
            )
          }
          className="px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white outline-none"
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

      </div>

      {/* EDITOR */}
      <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">

        <Editor
          height="600px"
          theme="vs-dark"
          language={language}
          value={code}
          onChange={(value) =>
            setCode(value || "")
          }
          options={{
            fontSize: 16,

            minimap: {
              enabled: false,
            },

            padding: {
              top: 20,
            },

            scrollBeyondLastLine: false,

            automaticLayout: true,

            wordWrap: "on",

            cursorSmoothCaretAnimation:
              "on",

            smoothScrolling: true,
          }}
        />

      </div>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-4 mt-6">

        <button
          onClick={runCode}
          disabled={loading}
          className="px-8 py-3 rounded-xl bg-green-500 hover:bg-green-600 transition duration-300 font-semibold disabled:opacity-50"
        >
          {loading
            ? "Running..."
            : "▶ Run Code"}
        </button>

        <button
          onClick={explainCode}
          disabled={aiLoading}
          className="px-8 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition duration-300 font-semibold disabled:opacity-50"
        >
          {aiLoading
            ? "Analyzing..."
            : "🤖 Explain Code"}
        </button>

        <button
          onClick={submitCode}
          className="px-8 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition duration-300 font-semibold"
        >
          🚀 Submit
        </button>

        <button
          onClick={() => {
            setCode(
              starterCode[language]
            );

            setOutput("");

            setAiExplanation("");
          }}
          className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition duration-300 font-semibold"
        >
          Reset
        </button>

      </div>

      {/* OUTPUT */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-[#0d0d0d] p-6">

        <div className="flex items-center justify-between mb-4">

          <h3 className="text-xl font-semibold text-white">
            Output
          </h3>

          <button
            onClick={() =>
              setOutput("")
            }
            className="text-sm text-red-400 hover:text-red-500"
          >
            Clear
          </button>

        </div>

        <pre className="text-green-400 whitespace-pre-wrap text-sm overflow-x-auto leading-7">
          {output ||
            "Run your code to see output..."}
        </pre>

      </div>

      {/* AI EXPLANATION */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-[#0d0d0d] p-6">

        <div className="flex items-center justify-between mb-4">

          <h3 className="text-2xl font-semibold text-white">
            🤖 AI Code Explanation
          </h3>

          <button
            onClick={() =>
              setAiExplanation("")
            }
            className="text-sm text-red-400 hover:text-red-500"
          >
            Clear
          </button>

        </div>

        <div className="text-gray-300 whitespace-pre-wrap leading-7">
          {aiExplanation ||
            "Use AI to analyze your solution..."}
        </div>

      </div>

      {/* FUTURE FEATURES */}
      <div className="mt-10 grid md:grid-cols-3 gap-4">

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">

          <h4 className="text-lg font-semibold">
            🤖 AI Hints
          </h4>

          <p className="text-sm text-gray-400 mt-2">
            Get intelligent hints before viewing solutions
          </p>

        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">

          <h4 className="text-lg font-semibold">
            🏆 Leaderboard
          </h4>

          <p className="text-sm text-gray-400 mt-2">
            Compete globally with XP rankings
          </p>

        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">

          <h4 className="text-lg font-semibold">
            ⚡ Runtime Analysis
          </h4>

          <p className="text-sm text-gray-400 mt-2">
            Compare runtime and memory usage
          </p>

        </div>

      </div>

    </div>
  );
}