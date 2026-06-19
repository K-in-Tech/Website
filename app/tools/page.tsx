"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
  FileJson,
  ShieldCheck,
  KeyRound,
  Braces,
  Regex,
  Clock3,
  Lock,
  UserRound,
  Palette,
  Wand2,
  Brain,
  Map,
  Globe,
  Minimize2,
  Type,
  GitCompare,
  Link2,
  QrCode,
  Image,
  Settings2,
  Bot,
} from "lucide-react";

type Tool = {
  name: string;
  href: string;
  category: string;
  icon: LucideIcon;
  description: string;
};

const tools: Tool[] = [
  {
    name: "AI Resume Analyzer",
    href: "/tools/resume-analyzer",
    category: "Career",
    icon: Bot,
    description:
      "Get ATS scores, AI-powered feedback, skill gap analysis, project recommendations and career guidance.",
  },

  {
    name: "JSON Formatter",
    href: "/tools/json-formatter",
    category: "Developer",
    icon: FileJson,
    description:
      "Format and beautify JSON data for improved readability.",
  },

  {
    name: "JSON Validator",
    href: "/tools/json-validator",
    category: "Developer",
    icon: ShieldCheck,
    description:
      "Validate JSON syntax and identify formatting errors instantly.",
  },

  {
    name: "JWT Decoder",
    href: "/tools/jwt-decoder",
    category: "Authentication",
    icon: KeyRound,
    description:
      "Decode and inspect JWT payloads securely in your browser.",
  },

  {
    name: "UUID Generator",
    href: "/tools/uuid-generator",
    category: "Developer",
    icon: Braces,
    description:
      "Generate RFC-compliant UUIDs for applications and APIs.",
  },

  {
    name: "Regex Tester",
    href: "/tools/regex-tester",
    category: "Developer",
    icon: Regex,
    description:
      "Build and test regular expressions interactively.",
  },

  {
    name: "Timestamp Converter",
    href: "/tools/timestamp-converter",
    category: "Developer",
    icon: Clock3,
    description:
      "Convert Unix timestamps into human-readable formats.",
  },

  {
    name: "Password Generator",
    href: "/tools/password-generator",
    category: "Security",
    icon: Lock,
    description:
      "Generate strong and secure passwords instantly.",
  },

  {
    name: "Resume Builder",
    href: "/tools/resume-builder",
    category: "Career",
    icon: UserRound,
    description:
      "Build modern ATS-friendly resumes.",
  },

  {
    name: "Color Palette Generator",
    href: "/tools/color-palette",
    category: "Design",
    icon: Palette,
    description:
      "Generate harmonious color palettes for web projects.",
  },

  {
    name: "Gradient Generator",
    href: "/tools/gradient-generator",
    category: "Design",
    icon: Wand2,
    description:
      "Create beautiful CSS gradients visually.",
  },

  {
    name: "LeetCode Pattern Finder",
    href: "/tools/leetcode-pattern-finder",
    category: "DSA",
    icon: Brain,
    description:
      "Discover coding interview patterns and learning paths.",
  },

  {
    name: "Roadmap Generator",
    href: "/tools/roadmap-generator",
    category: "Learning",
    icon: Map,
    description:
      "Generate personalized developer learning roadmaps.",
  },

  {
    name: "HTML Preview",
    href: "/tools/html-preview",
    category: "Frontend",
    icon: Globe,
    description:
      "Preview and test HTML code instantly.",
  },

  {
    name: "CSS Minifier",
    href: "/tools/css-minifier",
    category: "Frontend",
    icon: Minimize2,
    description:
      "Optimize and compress CSS files.",
  },

  {
    name: "Case Converter",
    href: "/tools/case-converter",
    category: "Developer",
    icon: Type,
    description:
      "Convert text between multiple naming conventions.",
  },

  {
    name: "Text Diff Checker",
    href: "/tools/text-diff",
    category: "Developer",
    icon: GitCompare,
    description:
      "Compare text and visualize differences instantly.",
  },

  {
    name: "URL Encoder",
    href: "/tools/url-encoder",
    category: "Developer",
    icon: Link2,
    description:
      "Encode and decode URLs for web development.",
  },

  {
    name: "QR Generator",
    href: "/tools/qr-generator",
    category: "Utility",
    icon: QrCode,
    description:
      "Generate QR codes for links and text.",
  },

  {
    name: "Image to Base64",
    href: "/tools/image-base64",
    category: "Utility",
    icon: Image,
    description:
      "Convert images into Base64 strings.",
  },

  {
    name: "Cron Generator",
    href: "/tools/cron-generator",
    category: "Backend",
    icon: Settings2,
    description:
      "Build and validate cron schedules visually.",
  },
];

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(tools.map((tool) => tool.category)),
  ];

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        tool.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        tool.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        tool.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* HERO */}
        <div className="text-center mb-14">

          <span className="inline-flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm">
  ⚡ {tools.length} Professional Developer Tools
</span>

          <h1 className="mt-8 text-6xl font-black">
            Developer
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Tools Hub
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-400">
  Everything a developer needs in one place.
  JSON utilities, AI Resume Analyzer, JWT tools,
  Regex Tester, Roadmap Generator, DSA helpers,
  Resume Builder and more.
</p>

        </div>

        {/* SEARCH */}
        <div className="mb-10">

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search tools..."
            className="w-full rounded-2xl bg-white/[0.03] border border-white/10 px-5 py-4 outline-none focus:border-blue-500"
          />

        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap gap-3 mb-10">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category)
              }
              className={`px-4 py-2 rounded-xl border transition ${
                activeCategory === category
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white/[0.03] border-white/10"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-5 mb-14">

          <StatCard
  title="Tools"
  value={String(tools.length)}
/>
          <StatCard
            title="Categories"
            value={String(categories.length - 1)}
          />
          <StatCard title="Cost" value="Free" />
          <StatCard title="Updates" value="Weekly" />

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {filteredTools.map((tool) => {
  const Icon = tool.icon;

  return (
    <Link
      key={tool.href}
      href={tool.href}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-7
        hover:border-blue-500/30
        hover:bg-white/[0.05]
        transition
      "
    >
      <div className="mb-5">
        <Icon
          size={42}
          className="
            text-blue-400
            transition
            group-hover:scale-110
            group-hover:text-blue-300
          "
        />
      </div>

      <span className="inline-flex px-3 py-1 rounded-full text-xs border border-white/10 bg-white/[0.04] text-gray-400">
        {tool.category}
      </span>

      <h2 className="text-2xl font-bold mt-4 group-hover:text-blue-400 transition">
        {tool.name}
      </h2>

      <p className="text-gray-400 mt-3">
        {tool.description}
      </p>

      <div className="mt-6 text-blue-400 font-medium">
        Open Tool →
      </div>
    </Link>
  );
})}

        </div>

      </div>
    </main>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <p className="text-gray-400 text-sm">
        {title}
      </p>
      <h2 className="text-4xl font-black mt-2">
        {value}
      </h2>
    </div>
  );
}