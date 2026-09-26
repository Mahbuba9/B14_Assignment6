"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Workout } from "../lib/api";

export type PlanItem = Workout & { done?: boolean };

type ToastType = "success" | "error";
type Toast = { id: number; message: string; type: ToastType };

type PlanContextType = {
  plan: PlanItem[];
  saved: PlanItem[];
  addToPlan: (workout: Workout) => void;
  addToSaved: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number, list: "plan" | "saved") => void;
  isInPlan: (id: number) => boolean;
  isInSaved: (id: number) => boolean;
  toasts: Toast[];
  showToast: (message: string, type?: ToastType) => void;
  PLAN_CAP: number;
};

const PlanContext = createContext<PlanContextType | undefined>(undefined);

const PLAN_CAP = 5;

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<PlanItem[]>([]);
  const [saved, setSaved] = useState<PlanItem[]>([]);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog_plan");
      const storedSaved = localStorage.getItem("fitlog_saved");
      if (storedPlan) setPlan(JSON.parse(storedPlan));
      if (storedSaved) setSaved(JSON.parse(storedSaved));
    } catch (e) {
      console.error("Failed to load from localStorage", e);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("fitlog_plan", JSON.stringify(plan));
  }, [plan, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem("fitlog_saved", JSON.stringify(saved));
  }, [saved, hydrated]);

  function showToast(message: string, type: ToastType = "success") {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }

  function isInPlan(id: number) {
    return plan.some((w) => w.id === id);
  }

  function isInSaved(id: number) {
    return saved.some((w) => w.id === id);
  }

  function addToPlan(workout: Workout) {
    if (isInPlan(workout.id)) {
      showToast("Already in your plan", "error");
      return;
    }
    if (plan.length >= PLAN_CAP) {
      showToast("Today's plan is full (5 lifts max)", "error");
      return;
    }
    setPlan((prev) => [...prev, { ...workout, done: false }]);
    showToast("Added to today's plan");
  }

  function addToSaved(workout: Workout) {
    if (isInSaved(workout.id)) {
      showToast("Already saved", "error");
      return;
    }
    setSaved((prev) => [...prev, { ...workout, done: false }]);
    showToast("Saved for later");
  }

  function removeFromPlan(id: number) {
    setPlan((prev) => prev.filter((w) => w.id !== id));
    showToast("Removed from today's plan");
  }

  function removeFromSaved(id: number) {
    setSaved((prev) => prev.filter((w) => w.id !== id));
    showToast("Removed from saved");
  }

  function markAsDone(id: number, list: "plan" | "saved") {
    if (list === "plan") {
      setPlan((prev) =>
        prev.map((w) => (w.id === id ? { ...w, done: true } : w))
      );
    } else {
      setSaved((prev) =>
        prev.map((w) => (w.id === id ? { ...w, done: true } : w))
      );
    }
    showToast("Marked as done");
  }

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        isInPlan,
        isInSaved,
        toasts,
        showToast,
        PLAN_CAP,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used within PlanProvider");
  return ctx;
}