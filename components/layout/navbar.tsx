"use client";

import Link from "next/link";
import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useProgress } from "@/store/use-progress";

export default function Navbar() {
  const pathname = usePathname();
  const { isSignedIn, isLoaded } = useAuth();

  const xp = useProgress((state) => state.xp);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    {
      href: "/blogs",
      label: "Blogs",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/roadmaps",
      label: "Roadmaps",
    },
    {
      href: "/coding",
      label: "Coding",
    },
    {
      href: "/tools",
      label: "Tools",
    },
    {
      href: "/leaderboard",
      label: "Leaderboard",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-18 items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 text-lg font-black text-white shadow-lg shadow-blue-500/20">
              K
            </div>

            <div>
              <h1 className="text-lg font-bold text-white">
                K in Tech
              </h1>

              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                Learn • Build • Grow
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-3">

            {/* DASHBOARD */}
            {isSignedIn && (
              <Link
                href="/dashboard"
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  pathname.startsWith("/dashboard")
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                Dashboard
              </Link>
            )}

            {!isLoaded ? (
              <div className="text-sm text-gray-500">
                Loading...
              </div>
            ) : !isSignedIn ? (
              <>
                <Link
                  href="/sign-in"
                  className="rounded-xl border border-white/10 px-4 py-2 text-sm text-gray-300 hover:bg-white/5"
                >
                  Sign In
                </Link>

                <Link
                  href="/sign-up"
                  className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="lg:hidden rounded-xl border border-white/10 p-2 text-white"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden">
          <div className="space-y-2 px-6 py-5">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() =>
                  setMobileOpen(false)
                }
                className={`block rounded-xl px-4 py-3 transition ${
                  pathname === link.href
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {isSignedIn && (
              <>
                <Link
                  href="/dashboard"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="block rounded-xl bg-blue-600 px-4 py-3 text-white"
                >
                  Dashboard
                </Link>

                <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 px-4 py-3 text-purple-300 font-medium">
                  ⚡ {xp.toLocaleString()} XP
                </div>
              </>
            )}

            {!isLoaded ? (
              <div className="text-gray-500">
                Loading...
              </div>
            ) : !isSignedIn ? (
              <div className="flex gap-3 pt-2">
                <Link
                  href="/sign-in"
                  className="rounded-xl border border-white/10 px-4 py-2 text-gray-300"
                >
                  Sign In
                </Link>

                <Link
                  href="/sign-up"
                  className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-white"
                >
                  Get Started
                </Link>
              </div>
            ) : (
              <div className="pt-2">
                <UserButton afterSignOutUrl="/" />
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}