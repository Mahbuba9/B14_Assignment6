"use client";

import { usePlan } from "../context/PlanContext";

export default function ToastContainer() {
  const { toasts } = usePlan();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg text-sm border animate-[fadeIn_0.2s_ease-out] ${
            toast.type === "error"
              ? "bg-[#2a1214] border-[#5c2226] text-[#ff6b6b]"
              : "bg-[#1a1a1d] border-[#26262a] text-white"
          }`}
        >
          {toast.type === "error" ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
              <circle cx="12" cy="12" r="10" />
              <path d="M15 9l-6 6M9 9l6 6" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-[var(--accent)]">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          )}
          {toast.message}
        </div>
      ))}
    </div>
  );
}