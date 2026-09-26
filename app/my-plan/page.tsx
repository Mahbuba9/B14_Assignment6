"use client";

import { useState } from "react";
import { usePlan } from "../context/PlanContext";
import PlanCard from "../components/PlanCard";
import EmptyState from "../components/EmptyState";

type Tab = "plan" | "saved";
type SortKey = "duration" | "caloriesBurned" | "rating";

export default function MyPlanPage() {
  const { plan, saved } = usePlan();
  const [tab, setTab] = useState<Tab>("plan");
  const [sortKey, setSortKey] = useState<SortKey>("duration");

  const activeList = tab === "plan" ? plan : saved;

  const sortedList = [...activeList].sort((a, b) => {
    if (sortKey === "rating") return b.rating - a.rating;
    return (a[sortKey] as number) - (b[sortKey] as number);
  });

  const totalExercises = plan.length;
  const totalMinutes = plan.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = plan.reduce((sum, w) => sum + w.caloriesBurned, 0);

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8">
      <h1 className="font-display font-bold uppercase text-3xl md:text-4xl mb-2">
        My Plan
      </h1>
      <p className="text-[var(--muted)] text-sm mb-8">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 bg-[var(--panel)] border border-[var(--border)] rounded-xl p-6 mb-8">
        <div>
          <p className="text-[var(--muted)] text-xs mb-1">Exercises</p>
          <p className="font-display font-bold text-2xl md:text-3xl text-[var(--accent)]">
            {totalExercises}
          </p>
        </div>
        <div>
          <p className="text-[var(--muted)] text-xs mb-1">Minutes</p>
          <p className="font-display font-bold text-2xl md:text-3xl">
            {totalMinutes}
          </p>
        </div>
        <div>
          <p className="text-[var(--muted)] text-xs mb-1">Calories</p>
          <p className="font-display font-bold text-2xl md:text-3xl">
            {totalCalories}
          </p>
        </div>
      </div>

      {/* Tabs + Sort */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="inline-flex bg-[var(--panel)] border border-[var(--border)] rounded-full p-1 w-fit">
          <button
            onClick={() => setTab("plan")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              tab === "plan" ? "bg-white text-black" : "text-[var(--muted)]"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            onClick={() => setTab("saved")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              tab === "saved" ? "bg-white text-black" : "text-[var(--muted)]"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-[var(--muted)]">Sort By</span>
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            className="bg-[var(--panel)] border border-[var(--border)] rounded-lg px-3 py-1.5 text-white focus:outline-none"
          >
            <option value="duration">Duration</option>
            <option value="caloriesBurned">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* List */}
      {sortedList.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="flex flex-col gap-3">
          {sortedList.map((item) => (
            <PlanCard key={item.id} item={item} tab={tab} />
          ))}
        </div>
      )}
    </div>
  );
}