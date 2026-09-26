export default function Loading() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
      <div className="w-10 h-10 border-2 border-[var(--border)] border-t-[var(--accent)] rounded-full animate-spin mb-4" />
      <p className="text-[var(--muted)] text-sm">Loading workouts…</p>
    </div>
  );
}