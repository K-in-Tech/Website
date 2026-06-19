"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LeaderboardClient() {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh();
    }, 10000);

    return () => clearInterval(interval);
  }, [router]);

  return null;
}