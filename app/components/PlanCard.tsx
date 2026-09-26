"use client";

import Link from "next/link";
import Image from "next/image";
import { usePlan, PlanItem } from "../context/PlanContext";

export default function PlanCard({
  item,
  tab,
}: {
  item: PlanItem;
  tab: "plan" | "saved";
}) {
  const { removeFromPlan, removeFromSaved, markAsDone } = usePlan();

  return (
    <div className="flex items-center gap-4 bg-[var(--panel)] border border-[var(--border)] rounded-xl p-4">
      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-display font-semibold uppercase text-sm mb-0.5 truncate">
          {item.name}
          {item.done && (
            <span className="ml-2 text-[var(--accent)] text-xs">✓ Done</span>
          )}
        </h3>
        <p className="text-[var(--muted)] text-xs mb-1.5 truncate">
          {item.equipment}
        </p>
        <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
          <span className="flex items-center gap-1">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            {item.duration} min
          </span>
          <span className="flex items-center gap-1">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>
            {item.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 17 5.5 21 7.5 13.5 2 9 9 9"/></svg>
            {item.rating}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <Link
          href={`/workout/${item.id}`}
          className="border border-[var(--border)] text-white text-xs font-medium px-3 py-2 rounded-lg hover:border-[#4a4a4f] transition whitespace-nowrap"
        >
          View Details
        </Link>

        {tab === "plan" && !item.done && (
          <button
            onClick={() => markAsDone(item.id)}
            className="flex items-center gap-1 bg-[var(--accent)] text-black text-xs font-semibold px-3 py-2 rounded-lg hover:brightness-95 transition whitespace-nowrap"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
            Mark as Done
          </button>
        )}

        <button
          onClick={() =>
            tab === "plan" ? removeFromPlan(item.id) : removeFromSaved(item.id)
          }
          className="text-[var(--muted)] hover:text-white text-lg px-1"
          aria-label="Remove"
        >
          ×
        </button>
      </div>
    </div>
  );
}