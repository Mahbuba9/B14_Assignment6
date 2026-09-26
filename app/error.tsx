"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
      <h2 className="font-display font-bold uppercase text-2xl mb-3">
        Couldn&apos;t load workouts
      </h2>
      <p className="text-[var(--muted)] text-sm mb-6 max-w-md">
        The workout API is temporarily unavailable (it may be rate-limited).
        Please wait a moment and try again.
      </p>
      <button
        onClick={() => reset()}
        className="bg-[var(--accent)] text-black font-semibold text-sm px-5 py-3 rounded-lg hover:brightness-95 transition"
      >
        Try again
      </button>
    </div>
  );
}