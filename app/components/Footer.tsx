import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#1c1c1f] bg-[#0b0b0c] mt-16">
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-2 font-display font-semibold tracking-wide">
          <Image src="/assets/logo.png" alt="FitLog logo" width={18} height={18} />
          FITLOG
        </div>
        <p className="text-[var(--muted)] text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}