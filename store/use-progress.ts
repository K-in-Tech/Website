"use client";

import { create } from "zustand";

type ProgressStore = {
  solvedProblems: string[];
  xp: number;

  solveProblem: (id: string, xp: number) => void;
};

export const useProgress = create<ProgressStore>((set, get) => ({
  solvedProblems: [],
  xp: 0,

  solveProblem: (id, xp) => {
    const current = get().solvedProblems;

    if (current.includes(id)) return;

    set({
      solvedProblems: [...current, id],
      xp: get().xp + xp,
    });
  },
}));