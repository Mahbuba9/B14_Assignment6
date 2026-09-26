import Link from "next/link";
import Image from "next/image";
import { getWorkouts } from "./lib/api";
import LibrarySection from "./components/LibrarySection";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8">
      {/* Hero */}
      <section className="bg-[var(--panel)] border border-[var(--border)] rounded-2xl px-8 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-[520px]">
          <p className="text-[var(--accent)] text-xs font-semibold tracking-[0.15em] mb-4">
            WORKOUT LIBRARY
          </p>
          <h1 className="font-display font-bold uppercase text-4xl md:text-5xl leading-[1.05] mb-5">
            Train with intent.
            <br />
            Log every set.
          </h1>
          <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed mb-7">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <Link
            href="#library"
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-black font-semibold text-sm px-5 py-3 rounded-lg hover:brightness-95 transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
            BROWSE WORKOUTS
          </Link>
        </div>
        <div className="w-full md:w-[320px] flex-shrink-0">
          <Image
            src="/assets/banner.png"
            alt="Workout illustration"
            width={320}
            height={320}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      <LibrarySection workouts={workouts} />
    </div>
  );
}