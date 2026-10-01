"use client";

import { useState } from "react";

const rows: string[][] = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

// The Figma file uses two very slightly different greys for the pills.
const altSurface = new Set(["Drawing & Painting", "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity", "Web Development", "Data Science", "Cooking"]);

export default function CategoryTabs() {
  const [active, setActive] = useState("Featured");

  return (
    <div className="flex flex-col items-center gap-[21px]" role="tablist" aria-label="Course categories">
      {rows.map((row, i) => (
        <div className="flex items-center gap-4" key={i}>
          {row.map((label) => {
            const isActive = label === active;
            return (
              <button
                key={label}
                role="tab"
                aria-selected={isActive}
                type="button"
                className={`h-[43px] cursor-pointer whitespace-nowrap rounded-[24px] border-0 px-4 text-[16px] font-medium leading-6 transition-colors duration-150 ease-in-out ${isActive ? "bg-brand-lime-bright text-black hover:bg-brand-lime-bright" : altSurface.has(label) ? "bg-surface text-[#4b4c53] hover:bg-[#ede8ff]" : "bg-[#f6f6f6] text-[#4f4f4f] hover:bg-[#ede8ff]"}`}
                onClick={() => setActive(label)}
              >
                {label}
              </button>
            );
          })}
          {i === rows.length - 1 && <span className="px-1 text-[16px] leading-6 text-[#4b4c53]">+ More</span>}
        </div>
      ))}
    </div>
  );
}
