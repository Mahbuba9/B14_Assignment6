"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePlan } from "../context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const isWorkouts = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  return (
    <header className="border-b border-[#1c1c1f] bg-[#0b0b0c] sticky top-0 z-40">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-display font-semibold text-lg tracking-wide">
          <Image src="/assets/logo.png" alt="FitLog logo" width={22} height={22} />
          FITLOG
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-2 text-sm">
          <Link
            href="/"
            className={`px-4 py-1.5 rounded-full transition-colors ${
              isWorkouts
                ? "bg-[var(--accent)] text-black font-medium"
                : "text-[var(--muted)] hover:text-white"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`px-4 py-1.5 rounded-full transition-colors ${
              isMyPlan
                ? "bg-[var(--accent)] text-black font-medium"
                : "text-[var(--muted)] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Badges */}
        <div className="flex items-center gap-3 text-sm">
          <Link href="/my-plan" className="flex items-center gap-1.5 text-[var(--muted)]">
            Plan
            <span className="bg-[var(--accent)] text-black text-xs font-semibold rounded-full min-w-[20px] h-5 px-1.5 flex items-center justify-center">
              {plan.length}
            </span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-1.5 text-[var(--muted)]">
            Saved
            <span className="border border-[#3a3a3f] text-white text-xs font-semibold rounded-full min-w-[20px] h-5 px-1.5 flex items-center justify-center">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}