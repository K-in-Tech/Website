"use client";

import { useState } from "react";

export default function ImageBase64Page() {
  const [base64, setBase64] = useState("");
  const [preview, setPreview] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");

  const handleFile = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFileName(file.name);
    setFileSize(
      `${(file.size / 1024).toFixed(2)} KB`
    );

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result as string;

      setPreview(result);
      setBase64(result);
    };

    reader.readAsDataURL(file);
  };

  const copyBase64 = async () => {
    await navigator.clipboard.writeText(base64);
    alert("Copied to clipboard");
  };

  const downloadBase64 = () => {
    const blob = new Blob([base64], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "image-base64.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  const clearAll = () => {
    setBase64("");
    setPreview("");
    setFileName("");
    setFileSize("");
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="inline-flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm">
            Developer Tool
          </div>

          <h1 className="mt-6 text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Image to Base64 Converter
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Convert PNG, JPG, JPEG, SVG, and
            WebP images into Base64 instantly.
          </p>

        </div>

        {/* Upload */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

          <input
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="block w-full text-sm file:mr-4 file:px-5 file:py-3 file:rounded-xl file:border-0 file:bg-blue-500 file:text-white file:cursor-pointer"
          />

          {fileName && (
            <div className="mt-5 flex flex-wrap gap-4">

              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                📄 {fileName}
              </div>

              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                📦 {fileSize}
              </div>

            </div>
          )}

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          {/* Preview */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold mb-5">
              Image Preview
            </h2>

            <div className="rounded-2xl border border-white/10 bg-black min-h-[420px] flex items-center justify-center overflow-hidden">

              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="max-h-[400px] object-contain"
                />
              ) : (
                <p className="text-gray-500">
                  Upload an image
                </p>
              )}

            </div>

          </div>

          {/* Base64 */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <div className="flex items-center justify-between mb-5">

              <h2 className="text-xl font-bold">
                Base64 Output
              </h2>

              <div className="flex gap-2">

                <button
                  onClick={copyBase64}
                  disabled={!base64}
                  className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 disabled:opacity-50"
                >
                  Copy
                </button>

                <button
                  onClick={downloadBase64}
                  disabled={!base64}
                  className="px-4 py-2 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 disabled:opacity-50"
                >
                  Download
                </button>

                <button
                  onClick={clearAll}
                  className="px-4 py-2 rounded-lg border border-white/10"
                >
                  Clear
                </button>

              </div>

            </div>

            <textarea
              readOnly
              value={base64}
              className="w-full h-[420px] rounded-2xl bg-black border border-white/10 p-4 text-xs text-green-400 font-mono resize-none"
              placeholder="Base64 output will appear here..."
            />

          </div>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-bold mb-2">
              Instant Conversion
            </h3>

            <p className="text-sm text-gray-400">
              Convert images to Base64 locally
              in your browser.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-bold mb-2">
              Secure
            </h3>

            <p className="text-sm text-gray-400">
              Files never leave your device.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-bold mb-2">
              Download & Copy
            </h3>

            <p className="text-sm text-gray-400">
              Easily export Base64 strings for
              APIs and frontend projects.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}