"use client";

import { usePlan } from "../context/PlanContext";

export default function ToastContainer() {
  const { toasts } = usePlan();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-[#1a1a1d] border border-[#26262a] text-white px-4 py-3 rounded-lg shadow-lg text-sm animate-[fadeIn_0.2s_ease-out]"
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}