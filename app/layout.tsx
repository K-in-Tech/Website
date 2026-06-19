import "./globals.css";
import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://kintech.dev"),

  title: {
    default: "K in Tech",
    template: "%s | K in Tech",
  },

  description:
    "Learn coding, solve DSA problems, build projects, explore roadmaps, and grow as a software developer with K in Tech.",

  keywords: [
    "K in Tech",
    "Coding Platform",
    "DSA",
    "Data Structures",
    "Algorithms",
    "Programming",
    "Web Development",
    "Next.js",
    "React",
    "Projects",
    "Blogs",
    "Developer Roadmaps",
    "Software Engineering",
    "Coding Interview",
    "LeetCode Alternative",
  ],

  authors: [
    {
      name: "K in Tech",
    },
  ],

  creator: "K in Tech",

  publisher: "K in Tech",

  openGraph: {
    title: "K in Tech",
    description:
      "Learn coding, build projects, solve DSA problems, and grow your developer career.",

    url: "https://kintech.dev",

    siteName: "K in Tech",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "K in Tech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "K in Tech",

    description:
      "Coding, DSA, Projects, Blogs, and Developer Roadmaps.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className="
            min-h-screen
            bg-black
            text-white
            antialiased
            selection:bg-blue-500
            selection:text-white
          "
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}