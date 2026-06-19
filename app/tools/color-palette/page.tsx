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

export default function ColorPalettePage() {
    const [colors, setColors] = useState([
        randomColor(),
        randomColor(),
        randomColor(),
        randomColor(),
        randomColor(),
    ]);

    const generatePalette = () => {
        setColors([
            randomColor(),
            randomColor(),
            randomColor(),
            randomColor(),
            randomColor(),
        ]);
    };

    const [copied, setCopied] = useState("");

    const copyColor = async (color: string) => {
        await navigator.clipboard.writeText(color);
        setCopied(color);

        setTimeout(() => {
            setCopied("");
        }, 1500);
    };
    return (
        <main className="min-h-screen bg-black text-white px-6 py-12">

            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-10">

                    <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Color Palette Generator
                    </h1>

                    <p className="mt-4 text-gray-400">
                        Generate beautiful color palettes for websites,
                        apps, branding, UI design, and creative projects.
                    </p>

                </div>

                {/* ACTION */}
                <div className="flex justify-center mb-10">

                    <button
                        onClick={generatePalette}
                        className="px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 transition font-semibold"
                    >
                        Generate New Palette
                    </button>

                </div>

                {/* COLORS */}
                <div className="grid md:grid-cols-5 gap-5">

                    {colors.map((color) => (
                        <div
                            key={color}
                            className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]"
                        >

                            <div
                                className="h-56"
                                style={{
                                    backgroundColor: color,
                                }}
                            />

                            <div className="p-4">

                                <p className="font-bold text-center">
                                    {color}
                                </p>

                                <button
                                    onClick={() => copyColor(color)}
                                    className="w-full mt-3 py-2 rounded-xl border border-white/10 hover:bg-white/5 transition"
                                >
                                    Copy
                                </button>

                            </div>

                        </div>
                    ))}

                </div>

                {/* INFO */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                        <h3 className="font-bold mb-2">
                            UI Design
                        </h3>

                        <p className="text-gray-400 text-sm">
                            Generate modern color combinations
                            for dashboards, landing pages, and SaaS apps.
                        </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                        <h3 className="font-bold mb-2">
                            Branding
                        </h3>

                        <p className="text-gray-400 text-sm">
                            Find inspiration for logos,
                            personal brands, and startups.
                        </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                        <h3 className="font-bold mb-2">
                            Developer Friendly
                        </h3>

                        <p className="text-gray-400 text-sm">
                            Instantly copy HEX values and use
                            them directly in CSS, Tailwind, or React.
                        </p>

                    </div>

                </div>

            </div>

        </main>
    );
}