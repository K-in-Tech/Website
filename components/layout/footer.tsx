import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <h2 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              K in Tech
            </h2>

            <p className="mt-5 text-gray-400 leading-relaxed max-w-md">
              A modern developer platform to learn coding,
              build projects, share knowledge, solve DSA
              problems, and grow your engineering career.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-4 mt-6">

              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xl font-bold">
                  100+
                </p>
                <p className="text-xs text-gray-500">
                  Coding Problems
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xl font-bold">
                  50+
                </p>
                <p className="text-xs text-gray-500">
                  Projects
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xl font-bold">
                  1000+
                </p>
                <p className="text-xs text-gray-500">
                  Developers
                </p>
              </div>

            </div>

          </div>

          {/* PLATFORM */}
          <div>

            <h3 className="font-semibold mb-5 text-white">
              Platform
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <Link
                href="/coding"
                className="text-gray-400 hover:text-white transition"
              >
                Coding Problems
              </Link>

              <Link
                href="/projects"
                className="text-gray-400 hover:text-white transition"
              >
                Projects
              </Link>

              <Link
                href="/blogs"
                className="text-gray-400 hover:text-white transition"
              >
                Blogs
              </Link>

              <Link
                href="/roadmaps"
                className="text-gray-400 hover:text-white transition"
              >
                Roadmaps
              </Link>

            </div>

          </div>

          {/* RESOURCES */}
          <div>

            <h3 className="font-semibold mb-5 text-white">
              Resources
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <Link
                href="/dashboard"
                className="text-gray-400 hover:text-white transition"
              >
                Dashboard
              </Link>

              <Link
                href="/leaderboard"
                className="text-gray-400 hover:text-white transition"
              >
                Leaderboard
              </Link>

              <Link
                href="/blogs"
                className="text-gray-400 hover:text-white transition"
              >
                Tutorials
              </Link>

              <Link
                href="/projects"
                className="text-gray-400 hover:text-white transition"
              >
                Showcase
              </Link>

            </div>

          </div>

          {/* LEGAL */}
          <div>

            <h3 className="font-semibold mb-5 text-white">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition"
              >
                About
              </Link>

              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition"
              >
                Terms of Service
              </Link>

              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </Link>

            </div>

          </div>

        </div>

        {/* NEWSLETTER */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <div>

              <h3 className="text-2xl font-bold">
                Stay Ahead in Tech 🚀
              </h3>

              <p className="text-gray-400 mt-2">
                Get tutorials, coding challenges,
                project ideas, and developer insights.
              </p>

            </div>

            <NewsletterForm />

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} K in Tech.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">

            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white transition"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-gray-500 hover:text-white transition"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="text-gray-500 hover:text-white transition"
            >
              Contact
            </Link>

          </div>

          <p className="text-sm text-gray-500">
            Built for developers ❤️
          </p>

        </div>

      </div>
    </footer>
  );
}