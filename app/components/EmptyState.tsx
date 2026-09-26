import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="border border-[var(--border)] rounded-xl py-20 flex flex-col items-center text-center">
      <h3 className="font-display font-bold uppercase text-xl mb-2">
        Nothing here yet
      </h3>
      <p className="text-[var(--muted)] text-sm mb-6 max-w-sm">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="bg-[var(--accent)] text-black font-semibold text-sm px-5 py-3 rounded-lg hover:brightness-95 transition"
      >
        Go to workouts
      </Link>
    </div>
  );
}