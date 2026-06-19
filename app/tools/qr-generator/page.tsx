"use client";

import { useState } from "react";
import QRCode from "qrcode";

export default function QRGeneratorPage() {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const generateQR = async () => {
    if (!text.trim()) return;

    try {
      const url = await QRCode.toDataURL(text, {
        width: 500,
        margin: 2,
      });

      setQrUrl(url);
    } catch (error) {
      console.error(error);
    }
  };

  const downloadQR = () => {
    if (!qrUrl) return;

    const a = document.createElement("a");
    a.href = qrUrl;
    a.download = "qr-code.png";
    a.click();
  };

  const clearAll = () => {
    setText("");
    setQrUrl("");
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-purple-500/10 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="inline-flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm">
            Utility Tool
          </div>

          <h1 className="mt-6 text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            QR Code Generator
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Generate QR codes instantly for
            websites, text, WiFi passwords,
            contact details, and more.
          </p>

        </div>

        {/* Generator */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold mb-4">
              Enter Content
            </h2>

            <textarea
              value={text}
              onChange={(e) =>
                setText(e.target.value)
              }
              placeholder="https://kintech.dev"
              className="w-full h-48 rounded-2xl bg-black border border-white/10 p-4 resize-none outline-none focus:border-blue-500"
            />

            <div className="flex flex-wrap gap-3 mt-5">

              <button
                onClick={generateQR}
                className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
              >
                Generate QR
              </button>

              <button
                onClick={clearAll}
                className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition"
              >
                Clear
              </button>

            </div>

          </div>

          {/* Right */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 flex flex-col items-center justify-center">

            {qrUrl ? (
              <>
                <img
                  src={qrUrl}
                  alt="QR Code"
                  className="w-72 h-72 rounded-2xl bg-white p-4"
                />

                <button
                  onClick={downloadQR}
                  className="mt-6 px-6 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
                >
                  Download PNG
                </button>
              </>
            ) : (
              <div className="text-center text-gray-500">

                <div className="text-7xl mb-4">
                  📱
                </div>

                <p>
                  Your QR code will appear here
                </p>

              </div>
            )}

          </div>

        </div>

        {/* Quick Examples */}
        <div className="mt-12">

          <h2 className="text-2xl font-bold mb-6">
            Quick Examples
          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            {[
              {
                title: "Website",
                value: "https://kintech.dev",
              },
              {
                title: "Email",
                value:
                  "mailto:hello@kintech.dev",
              },
              {
                title: "Phone",
                value:
                  "tel:+919999999999",
              },
              {
                title: "WiFi",
                value:
                  "WIFI:T:WPA;S:MyWifi;P:password123;;",
              },
            ].map((item) => (
              <button
                key={item.title}
                onClick={() =>
                  setText(item.value)
                }
                className="text-left p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
              >

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 mt-2 break-all">
                  {item.value}
                </p>

              </button>
            ))}

          </div>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              Instant Generation
            </h3>

            <p className="text-gray-400 text-sm">
              Create QR codes for any text or
              URL in seconds.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              Download PNG
            </h3>

            <p className="text-gray-400 text-sm">
              Save high-quality QR codes for
              printing and sharing.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-bold mb-2">
              Multiple Uses
            </h3>

            <p className="text-gray-400 text-sm">
              Works with URLs, emails, phone
              numbers, WiFi, and more.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}