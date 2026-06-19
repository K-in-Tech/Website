import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-6">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-4">
          The page you're looking for doesn't exist or may
          have been moved.
        </p>

        <div className="flex justify-center gap-4 mt-8">

          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold"
          >
            Go Home
          </Link>

          <Link
            href="/coding"
            className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition"
          >
            Solve Problems
          </Link>

        </div>

      </div>

    </main>
  );
}