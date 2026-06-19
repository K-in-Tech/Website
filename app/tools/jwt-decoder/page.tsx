"use client";

import { useState } from "react";

export default function JwtDecoderPage() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [error, setError] = useState("");

  const decodeJwt = () => {
    try {
      setError("");

      const parts = token.trim().split(".");

      if (parts.length < 2) {
        throw new Error("Invalid JWT token");
      }

      const decodePart = (str: string) => {
        const base64 = str
          .replace(/-/g, "+")
          .replace(/_/g, "/");

        const padded =
          base64 +
          "=".repeat(
            (4 - (base64.length % 4)) % 4
          );

        return JSON.parse(
          decodeURIComponent(
            Array.prototype.map
              .call(
                atob(padded),
                (c: string) =>
                  "%" +
                  ("00" + c.charCodeAt(0).toString(16)).slice(-2)
              )
              .join("")
          )
        );
      };

      const decodedHeader = decodePart(parts[0]);
      const decodedPayload = decodePart(parts[1]);

      setHeader(
        JSON.stringify(
          decodedHeader,
          null,
          2
        )
      );

      setPayload(
        JSON.stringify(
          decodedPayload,
          null,
          2
        )
      );
    } catch (err) {
      setHeader("");
      setPayload("");

      setError(
        err instanceof Error
          ? err.message
          : "Failed to decode JWT"
      );
    }
  };

  const clearAll = () => {
    setToken("");
    setHeader("");
    setPayload("");
    setError("");
  };

  const copyPayload = async () => {
    if (!payload) return;
    await navigator.clipboard.writeText(
      payload
    );
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            JWT Decoder
          </h1>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Decode JWT tokens instantly and inspect
            headers, payloads, expiration times,
            claims, and user information.
          </p>

        </div>

        {/* Token Input */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          <h2 className="text-xl font-bold mb-4">
            JWT Token
          </h2>

          <textarea
            value={token}
            onChange={(e) =>
              setToken(e.target.value)
            }
            placeholder="Paste JWT token here..."
            className="w-full h-40 rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-sm resize-none outline-none focus:border-blue-500"
          />

          <div className="flex flex-wrap gap-3 mt-5">

            <button
              onClick={decodeJwt}
              className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
            >
              Decode Token
            </button>

            <button
              onClick={copyPayload}
              className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition"
            >
              Copy Payload
            </button>

            <button
              onClick={clearAll}
              className="px-5 py-3 rounded-xl border border-red-500/20 text-red-400 hover:bg-red-500/10 transition"
            >
              Clear
            </button>

          </div>

        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
            ❌ {error}
          </div>
        )}

        {/* Decoded Sections */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          {/* Header */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold mb-4">
              Header
            </h2>

            <textarea
              readOnly
              value={header}
              placeholder="Decoded header..."
              className="w-full h-[400px] rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-sm"
            />

          </div>

          {/* Payload */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold mb-4">
              Payload
            </h2>

            <textarea
              readOnly
              value={payload}
              placeholder="Decoded payload..."
              className="w-full h-[400px] rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-sm"
            />

          </div>

        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              Authentication
            </h3>

            <p className="text-gray-400 text-sm">
              Inspect user claims, roles,
              permissions, and authentication data.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              Debug APIs
            </h3>

            <p className="text-gray-400 text-sm">
              Verify JWT contents when testing
              backend APIs and auth systems.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              Secure & Local
            </h3>

            <p className="text-gray-400 text-sm">
              Decoding happens entirely in your
              browser. Tokens are never sent anywhere.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}