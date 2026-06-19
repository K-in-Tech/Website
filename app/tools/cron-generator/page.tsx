"use client";

import { useState } from "react";

const weekdays = [
  { label: "Sunday", value: "0" },
  { label: "Monday", value: "1" },
  { label: "Tuesday", value: "2" },
  { label: "Wednesday", value: "3" },
  { label: "Thursday", value: "4" },
  { label: "Friday", value: "5" },
  { label: "Saturday", value: "6" },
];

export default function CronGeneratorPage() {
  const [minute, setMinute] = useState("*");
  const [hour, setHour] = useState("*");
  const [day, setDay] = useState("*");
  const [month, setMonth] = useState("*");
  const [weekday, setWeekday] = useState("*");

  const cron = `${minute} ${hour} ${day} ${month} ${weekday}`;

  const copyCron = async () => {
    await navigator.clipboard.writeText(cron);
  };

  const applyPreset = (value: string) => {
    const parts = value.split(" ");

    setMinute(parts[0]);
    setHour(parts[1]);
    setDay(parts[2]);
    setMonth(parts[3]);
    setWeekday(parts[4]);
  };

  const getExplanation = () => {
    if (cron === "* * * * *")
      return "Runs every minute";

    if (cron === "0 * * * *")
      return "Runs every hour";

    if (cron === "0 0 * * *")
      return "Runs every day at midnight";

    if (cron === "0 0 * * 1")
      return "Runs every Monday";

    if (cron === "0 0 1 * *")
      return "Runs on the first day of every month";

    return `Runs at minute ${minute}, hour ${hour}, day ${day}, month ${month}, weekday ${weekday}`;
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-12">

          <div className="inline-flex px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm">
            DevOps Tool
          </div>

          <h1 className="mt-6 text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Cron Expression Generator
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Generate Linux cron expressions for scheduled jobs,
            automated tasks, backups, scripts, and deployments.
          </p>

        </div>

        {/* Presets */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 mb-8">

          <h2 className="text-xl font-bold mb-4">
            Quick Presets
          </h2>

          <div className="flex flex-wrap gap-3">

            <button
              onClick={() =>
                applyPreset("* * * * *")
              }
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
            >
              Every Minute
            </button>

            <button
              onClick={() =>
                applyPreset("0 * * * *")
              }
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
            >
              Every Hour
            </button>

            <button
              onClick={() =>
                applyPreset("0 0 * * *")
              }
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
            >
              Daily
            </button>

            <button
              onClick={() =>
                applyPreset("0 0 * * 1")
              }
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
            >
              Weekly
            </button>

            <button
              onClick={() =>
                applyPreset("0 0 1 * *")
              }
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
            >
              Monthly
            </button>

          </div>

        </div>

        {/* Builder */}
        <div className="grid md:grid-cols-5 gap-4">

          <Field
            label="Minute"
            value={minute}
            setValue={setMinute}
            max={59}
          />

          <Field
            label="Hour"
            value={hour}
            setValue={setHour}
            max={23}
          />

          <Field
            label="Day"
            value={day}
            setValue={setDay}
            max={31}
          />

          <Field
            label="Month"
            value={month}
            setValue={setMonth}
            max={12}
          />

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Weekday
            </label>

            <select
              value={weekday}
              onChange={(e) =>
                setWeekday(e.target.value)
              }
              className="w-full rounded-xl bg-black border border-white/10 px-4 py-3"
            >
              <option value="*">
                Every Day
              </option>

              {weekdays.map((day) => (
                <option
                  key={day.value}
                  value={day.value}
                >
                  {day.label}
                </option>
              ))}
            </select>

          </div>

        </div>

        {/* Result */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">

          <div className="flex items-center justify-between mb-4">

            <h2 className="text-2xl font-bold">
              Cron Expression
            </h2>

            <button
              onClick={copyCron}
              className="px-5 py-3 rounded-xl bg-green-500 text-black font-semibold"
            >
              Copy
            </button>

          </div>

          <div className="bg-black border border-white/10 rounded-2xl p-6">

            <code className="text-3xl text-green-400 font-mono break-all">
              {cron}
            </code>

          </div>

          <div className="mt-6 p-5 rounded-2xl bg-green-500/10 border border-green-500/20">

            <p className="text-green-300">
              {getExplanation()}
            </p>

          </div>

        </div>

        {/* Help */}
        <div className="grid md:grid-cols-5 gap-4 mt-8">

          {[
            "Minute",
            "Hour",
            "Day",
            "Month",
            "Weekday",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="font-semibold">
                {item}
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                Use * for any value.
              </p>
            </div>
          ))}

        </div>

      </div>

    </main>
  );
}

function Field({
  label,
  value,
  setValue,
  max,
}: {
  label: string;
  value: string;
  setValue: (v: string) => void;
  max: number;
}) {
  return (
    <div>
      <label className="block text-sm text-gray-400 mb-2">
        {label}
      </label>

      <input
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
        placeholder={`* or 0-${max}`}
        className="w-full rounded-xl bg-black border border-white/10 px-4 py-3"
      />
    </div>
  );
}