"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePlan } from "../context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();
  const [menuOpen, setMenuOpen] = useState(false);

  const isWorkouts = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  const linkClass = (active: boolean) =>
    `px-4 py-1.5 rounded-full transition-colors text-sm ${
      active
        ? "bg-[var(--accent)] text-black font-medium"
        : "text-[var(--muted)] hover:text-white"
    }`;

  return (
    <header className="border-b border-[#1c1c1f] bg-[#0b0b0c] sticky top-0 z-40">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-display font-semibold text-lg tracking-wide"
        >
          <Image src="/assets/logo.png" alt="FitLog logo" width={22} height={22} />
          FITLOG
        </Link>

        {/* Nav links - desktop */}
        <nav className="hidden md:flex items-center gap-2">
          <Link href="/" className={linkClass(isWorkouts)}>
            Workouts
          </Link>
          <Link href="/my-plan" className={linkClass(isMyPlan)}>
            My Plan
          </Link>
        </nav>

        {/* Right side: badges + mobile menu button */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 text-sm">
            <Link href="/my-plan" className="flex items-center gap-1.5 text-[var(--muted)]">
              <span className="hidden sm:inline">Plan</span>
              <span className="bg-[var(--accent)] text-black text-xs font-semibold rounded-full min-w-[20px] h-5 px-1.5 flex items-center justify-center">
                {plan.length}
              </span>
            </Link>
            <Link href="/my-plan" className="flex items-center gap-1.5 text-[var(--muted)]">
              <span className="hidden sm:inline">Saved</span>
              <span className="border border-[#3a3a3f] text-white text-xs font-semibold rounded-full min-w-[20px] h-5 px-1.5 flex items-center justify-center">
                {saved.length}
              </span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <nav className="md:hidden border-t border-[#1c1c1f] px-6 py-3 flex flex-col gap-2">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={linkClass(isWorkouts) + " w-fit"}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            onClick={() => setMenuOpen(false)}
            className={linkClass(isMyPlan) + " w-fit"}
          >
            My Plan
          </Link>
        </nav>
      )}
    </header>
  );
}