"use client";

type Props = {
  search: string;
  setSearch: (value: string) => void;
  difficulty: string;
  setDifficulty: (value: string) => void;
};

export default function ProblemFilters({
  search,
  setSearch,
  difficulty,
  setDifficulty,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">

      {/* Search */}
      <input
        type="text"
        placeholder="Search problems..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none w-full"
      />

      {/* Difficulty Filter */}
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="px-4 py-3 rounded-xl bg-black border border-white/10"
      >
        <option value="All">All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

    </div>
  );
}