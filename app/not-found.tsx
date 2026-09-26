import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col items-center text-center">
      <p className="text-[var(--accent)] text-xs font-semibold tracking-[0.15em] mb-4">
        ERROR 404
      </p>
      <h1 className="font-display font-bold uppercase text-4xl md:text-5xl mb-4">
        Lift not found
      </h1>
      <p className="text-[var(--muted)] text-sm mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist. It might have
        been moved, or the link is broken.
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