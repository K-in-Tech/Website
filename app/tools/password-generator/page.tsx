"use client";

import { useState, useEffect } from "react";

export default function PasswordGeneratorPage() {
  const [length, setLength] = useState(16);

  const [includeUppercase, setIncludeUppercase] =
    useState(true);

  const [includeLowercase, setIncludeLowercase] =
    useState(true);

  const [includeNumbers, setIncludeNumbers] =
    useState(true);

  const [includeSymbols, setIncludeSymbols] =
    useState(true);

  const [password, setPassword] = useState("");

  const uppercase =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const lowercase =
    "abcdefghijklmnopqrstuvwxyz";

  const numbers =
    "0123456789";

  const symbols =
    "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const generatePassword = () => {
    let chars = "";

    if (includeUppercase)
      chars += uppercase;

    if (includeLowercase)
      chars += lowercase;

    if (includeNumbers)
      chars += numbers;

    if (includeSymbols)
      chars += symbols;

    if (!chars) {
      setPassword("");
      return;
    }

    let generated = "";

    for (
      let i = 0;
      i < length;
      i++
    ) {
      generated +=
        chars[
          Math.floor(
            Math.random() *
              chars.length
          )
        ];
    }

    setPassword(generated);
  };

  useEffect(() => {
    generatePassword();
  }, [
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ]);

  const copyPassword = async () => {
    if (!password) return;

    await navigator.clipboard.writeText(
      password
    );

    alert("Password copied!");
  };

  const getStrength = () => {
    let score = 0;

    if (length >= 12) score++;
    if (length >= 16) score++;

    if (includeUppercase) score++;
    if (includeNumbers) score++;
    if (includeSymbols) score++;

    if (score <= 2)
      return {
        text: "Weak",
        color: "bg-red-500",
      };

    if (score <= 4)
      return {
        text: "Medium",
        color: "bg-yellow-500",
      };

    return {
      text: "Strong",
      color: "bg-green-500",
    };
  };

  const strength =
    getStrength();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Password Generator
          </h1>

          <p className="text-gray-400 mt-4">
            Generate secure passwords
            instantly for websites,
            applications, and accounts.
          </p>

        </div>

        {/* Main Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

          {/* Password Output */}
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">

            <label className="text-sm text-gray-400">
              Generated Password
            </label>

            <div className="flex items-center gap-3 mt-3">

              <input
                value={password}
                readOnly
                className="flex-1 bg-transparent outline-none text-lg font-mono"
              />

              <button
                onClick={
                  copyPassword
                }
                className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
              >
                Copy
              </button>

            </div>

          </div>

          {/* Strength */}
          <div className="mt-6">

            <div className="flex justify-between mb-2">

              <span className="text-gray-400">
                Strength
              </span>

              <span>
                {strength.text}
              </span>

            </div>

            <div className="h-3 rounded-full bg-white/10 overflow-hidden">

              <div
                className={`h-full ${strength.color}`}
                style={{
                  width:
                    strength.text ===
                    "Weak"
                      ? "33%"
                      : strength.text ===
                        "Medium"
                      ? "66%"
                      : "100%",
                }}
              />

            </div>

          </div>

          {/* Length */}
          <div className="mt-8">

            <div className="flex justify-between mb-2">

              <label>
                Password Length
              </label>

              <span>
                {length}
              </span>

            </div>

            <input
              type="range"
              min={6}
              max={64}
              value={length}
              onChange={(e) =>
                setLength(
                  Number(
                    e.target.value
                  )
                )
              }
              className="w-full"
            />

          </div>

          {/* Options */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">

            <Option
              label="Uppercase Letters"
              checked={
                includeUppercase
              }
              onChange={() =>
                setIncludeUppercase(
                  !includeUppercase
                )
              }
            />

            <Option
              label="Lowercase Letters"
              checked={
                includeLowercase
              }
              onChange={() =>
                setIncludeLowercase(
                  !includeLowercase
                )
              }
            />

            <Option
              label="Numbers"
              checked={
                includeNumbers
              }
              onChange={() =>
                setIncludeNumbers(
                  !includeNumbers
                )
              }
            />

            <Option
              label="Symbols"
              checked={
                includeSymbols
              }
              onChange={() =>
                setIncludeSymbols(
                  !includeSymbols
                )
              }
            />

          </div>

          {/* Generate */}
          <button
            onClick={
              generatePassword
            }
            className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 font-bold hover:opacity-90 transition"
          >
            Generate New Password
          </button>

        </div>

        {/* Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <InfoCard
            title="Secure"
            text="Generate strong passwords with uppercase letters, numbers, and symbols."
          />

          <InfoCard
            title="Customizable"
            text="Choose length and character types based on your requirements."
          />

          <InfoCard
            title="Instant Copy"
            text="Copy passwords to your clipboard with one click."
          />

        </div>

      </div>

    </main>
  );
}

function Option({
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

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

      <h3 className="font-bold mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm">
        {text}
      </p>

    </div>
  );
}