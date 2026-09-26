import Link from "next/link";
import Image from "next/image";
import { Workout } from "../lib/api";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="block bg-[var(--panel)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[#3a3a3f] transition-colors"
    >
      <div className="relative w-full h-44">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex gap-2 mb-3 flex-wrap">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="bg-[var(--accent)] text-black text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display font-semibold uppercase text-base mb-1">
          {workout.name}
        </h3>
        <p className="text-[var(--muted)] text-xs mb-3">{workout.equipment}</p>
        <div className="border-t border-[var(--border)] pt-3 flex items-center gap-4 text-xs text-[var(--muted)]">
          <span className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 17 5.5 21 7.5 13.5 2 9 9 9"/></svg>
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}