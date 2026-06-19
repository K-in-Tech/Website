"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type ChartData = {
  date: string;
  solved: number;
};

type Props = {
  data: ChartData[];
};

export default function ActivityChart({
  data,
}: Props) {
  // Ensure chart always renders oldest → newest
  const sortedData = [...data].sort(
    (a, b) =>
      new Date(a.date).getTime() -
      new Date(b.date).getTime()
  );

  const totalSolved = sortedData.reduce(
    (acc, item) => acc + item.solved,
    0
  );

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6 backdrop-blur-xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">
            Activity Trend
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Problems solved over time
          </p>
        </div>

        <div className="text-right">
          <p className="text-3xl font-black text-blue-400">
            {totalSolved}
          </p>

          <p className="text-xs text-gray-500">
            Total Solved
          </p>
        </div>
      </div>

      {sortedData.length === 0 ? (
        <div className="h-[300px] flex items-center justify-center text-gray-500 border border-dashed border-white/10 rounded-2xl">
          No activity yet
        </div>
      ) : (
        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <AreaChart data={sortedData}>
            <defs>
              <linearGradient
                id="activityGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#3B82F6"
                  stopOpacity={0.5}
                />

                <stop
                  offset="100%"
                  stopColor="#3B82F6"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#262626"
              vertical={false}
            />

            <XAxis
              dataKey="date"
              tick={{
                fill: "#737373",
                fontSize: 12,
              }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tick={{
                fill: "#737373",
                fontSize: 12,
              }}
              tickLine={false}
              axisLine={false}
              allowDecimals={false}
            />

            <Tooltip
              contentStyle={{
                background: "#0f0f0f",
                border: "1px solid #262626",
                borderRadius: "12px",
                color: "white",
              }}
            />

            <Area
              type="monotone"
              dataKey="solved"
              stroke="#3B82F6"
              strokeWidth={3}
              fill="url(#activityGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}