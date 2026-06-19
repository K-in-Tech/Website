"use client";

import { useState } from "react";
import {
  ChevronDown,
  Lightbulb,
} from "lucide-react";

type HintCardProps = {
  hint: string;
  index: number;
};

export default function HintCard({
  hint,
  index,
}: HintCardProps) {
  const [open, setOpen] =
    useState(false);

  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        overflow-hidden
        transition-all
        duration-300
        hover:border-yellow-500/30
      "
    >
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          w-full
          flex
          items-center
          justify-between
          p-5
          text-left
        "
      >
        <div className="flex items-center gap-4">

          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-yellow-500/10
              text-yellow-400
              flex
              items-center
              justify-center
            "
          >
            <Lightbulb size={18} />
          </div>

          <div>

            <div className="flex items-center gap-2">

              <span
                className="
                  px-2
                  py-1
                  rounded-md
                  text-xs
                  bg-yellow-500/10
                  text-yellow-400
                "
              >
                Hint {index + 1}
              </span>

            </div>

            <p className="text-sm text-gray-400 mt-1">
              {open
                ? "Hint revealed"
                : "Click to reveal this hint"}
            </p>

          </div>

        </div>

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            open
              ? "rotate-180"
              : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">

          <div
            className="
              border-t
              border-white/10
              p-5
            "
          >
            <div
              className="
                rounded-xl
                bg-yellow-500/5
                border
                border-yellow-500/10
                p-4
              "
            >
              <p className="text-gray-300 leading-7">
                {hint}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}