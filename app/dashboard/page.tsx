"use client";

import { useEffect, useState } from "react";

import ProfileHero from "./components/ProfileHero";
import QuickActions from "./components/QuickActions";
import StatsGrid from "./components/StatsGrid";
import ActivityChart from "./components/ActivityChart";
import DifficultyChart from "./components/DifficultyChart";
import Achievements from "./components/Achievements";
import RecentSolved from "./components/RecentSolved";
import RecentProjects from "./components/RecentProjects";
import RecentBlogs from "./components/RecentBlogs";

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/dashboard", {
        cache: "no-store",
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to load dashboard");
      }

      setData(json);
    } catch (error) {
      console.error(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 SAFE NAME RESOLVER (IMPORTANT FIX)
  const getDisplayName = () => {
    const user = data?.user;

    return (
      user?.fullName ||
      user?.name ||
      user?.firstName ||
      user?.username ||
      user?.email ||
      "User"
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-gray-400">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            Dashboard Error
          </h1>
          <p className="text-gray-400 mt-3">
            Failed to load dashboard
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">

        {/* HERO */}
        <ProfileHero
          name={getDisplayName()}
          imageUrl={data.user?.imageUrl}
          xp={data.xp || 0}
          streak={data.streak || 0}
          solved={data.solved?.total || 0}
          blogs={data.stats?.blogs || 0}
          projects={data.stats?.projects || 0}
        />

        {/* ACTIONS */}
        <QuickActions />

        {/* STATS */}
        <StatsGrid
          xp={data.xp || 0}
          streak={data.streak || 0}
          solved={data.solved?.total || 0}
          easy={data.solved?.easy || 0}
          medium={data.solved?.medium || 0}
          hard={data.solved?.hard || 0}
          blogs={data.stats?.blogs || 0}
          projects={data.stats?.projects || 0}
          bookmarks={data.stats?.bookmarks || 0}
        />

        {/* CHARTS */}
        <div className="grid xl:grid-cols-2 gap-6">
          <ActivityChart data={data.chartData || []} />

          <DifficultyChart
            easy={data.solved?.easy || 0}
            medium={data.solved?.medium || 0}
            hard={data.solved?.hard || 0}
          />
        </div>

        {/* ACHIEVEMENTS */}
        <Achievements
  xp={data.xp || 0}
  solved={data.solved?.total || 0}
  blogs={data.stats?.blogs || 0}
  projects={data.stats?.projects || 0}
  easy={data.solved?.easy || 0}
  medium={data.solved?.medium || 0}
  hard={data.solved?.hard || 0}
/>

        {/* RECENT SOLVED */}
        <RecentSolved solved={data.recentSolved || []} />

        {/* PROJECTS */}
        <RecentProjects projects={data.recentProjects || []} />

        {/* BLOGS */}
        <RecentBlogs
          blogs={data.recentBlogs || []}
          onDelete={async (id) => {
            const ok = confirm("Delete this blog?");
            if (!ok) return;

            try {
              const res = await fetch(`/api/blogs/${id}`, {
                method: "DELETE",
              });

              if (!res.ok) throw new Error();

              loadDashboard();
            } catch {
              alert("Failed to delete blog");
            }
          }}
        />

      </div>
    </main>
  );
}