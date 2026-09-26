"use client";

import { useState } from "react";
import { Workout } from "../lib/api";
import WorkoutCard from "./WorkoutCard";

export default function LibrarySection({ workouts }: { workouts: Workout[] }) {
  const [query, setQuery] = useState("");

  const filtered = workouts.filter((w) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      w.name.toLowerCase().includes(q) ||
      w.muscleGroups.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  return (
    <section id="library" className="mt-16 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="font-display font-bold uppercase text-2xl md:text-3xl mb-2">
            The Library
          </h2>
          <p className="text-[var(--muted)] text-sm">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="relative w-full md:w-64">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or tag…"
            className="w-full bg-[var(--panel)] border border-[var(--border)] rounded-lg pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-[var(--muted)] focus:outline-none focus:border-[#4a4a4f]"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-[var(--muted)] text-sm text-center py-16">
          No workouts match &quot;{query}&quot;.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </section>
  );
}