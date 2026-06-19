"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

type Props = {
  easy: number;
  medium: number;
  hard: number;
};

export default function DifficultyChart({
  easy,
  medium,
  hard,
}: Props) {
  const data = [
    {
      name: "Easy",
      value: easy,
      color: "#22c55e",
    },
    {
      name: "Medium",
      value: medium,
      color: "#f59e0b",
    },
    {
      name: "Hard",
      value: hard,
      color: "#ef4444",
    },
  ];

  const total = easy + medium + hard;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">
          Difficulty Breakdown
        </h3>

        <span className="text-sm text-gray-400">
          {total} Solved
        </span>
      </div>

      <div className="h-[280px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={5}
            >
              {data.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={entry.color}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-3 text-center">
          <p className="text-green-400 text-sm">
            Easy
          </p>

          <h4 className="text-2xl font-bold">
            {easy}
          </h4>
        </div>

        <div className="rounded-xl bg-yellow-500/10 border border-yellow-500/20 p-3 text-center">
          <p className="text-yellow-400 text-sm">
            Medium
          </p>

          <h4 className="text-2xl font-bold">
            {medium}
          </h4>
        </div>

        <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-center">
          <p className="text-red-400 text-sm">
            Hard
          </p>

          <h4 className="text-2xl font-bold">
            {hard}
          </h4>
        </div>
      </div>
    </div>
  );
}