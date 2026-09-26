"use client";

import { usePlan } from "../context/PlanContext";
import { Workout } from "../lib/api";

export default function WorkoutActions({ workout }: { workout: Workout }) {
  const { addToPlan, addToSaved, isInPlan, isInSaved, plan, PLAN_CAP } =
    usePlan();

  const inPlan = isInPlan(workout.id);
  const inSaved = isInSaved(workout.id);
  const planFull = plan.length >= PLAN_CAP && !inPlan;

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => addToPlan(workout)}
        className={`inline-flex items-center gap-2 font-semibold text-sm px-5 py-3 rounded-lg transition ${
          inPlan
            ? "bg-[#2a2a1f] text-[var(--accent)] cursor-pointer"
            : planFull
            ? "bg-[var(--panel)] text-[var(--muted)] cursor-pointer"
            : "bg-[var(--accent)] text-black hover:brightness-95"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4" />
        </svg>
        {inPlan ? "Added to plan" : planFull ? "Plan is full" : "Add to today's plan"}
      </button>

      <button
        onClick={() => addToSaved(workout)}
        className={`inline-flex items-center gap-2 border font-semibold text-sm px-5 py-3 rounded-lg transition ${
          inSaved
            ? "border-[var(--border)] text-[var(--muted)] cursor-pointer"
            : "border-[var(--border)] text-white hover:border-[#4a4a4f]"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
        </svg>
        {inSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}