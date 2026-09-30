"use client";

import { useState } from "react";
import styles from "./CategoryTabs.module.css";

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
    <div className={styles.tabs} role="tablist" aria-label="Course categories">
      {rows.map((row, i) => (
        <div className={styles.row} key={i}>
          {row.map((label) => {
            const isActive = label === active;
            return (
              <button
                key={label}
                role="tab"
                aria-selected={isActive}
                type="button"
                className={`${styles.pill} ${isActive ? styles.active : altSurface.has(label) ? styles.alt : ""}`}
                onClick={() => setActive(label)}
              >
                {label}
              </button>
            );
          })}
          {i === rows.length - 1 && <span className={styles.more}>+ More</span>}
        </div>
      ))}
    </div>
  );
}
