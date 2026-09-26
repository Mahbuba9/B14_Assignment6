const BASE_URL = "https://api.api-store.workers.dev/api/fitlog";

export type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};

export async function getWorkouts(): Promise<Workout[]> {
  const res = await fetch(BASE_URL, {
    next: { revalidate: 60 },
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; FitLogApp/1.0)",
      Accept: "application/json",
    },
  });
  if (!res.ok) {
    console.error("getWorkouts failed:", res.status, await res.text());
    throw new Error(`Failed to fetch workouts (status ${res.status})`);
  }
  return res.json();
}

export async function getWorkoutById(id: string | number): Promise<Workout> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    next: { revalidate: 60 },
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; FitLogApp/1.0)",
      Accept: "application/json",
    },
  });
  if (!res.ok) {
    console.error("getWorkoutById failed:", res.status, await res.text());
    throw new Error(`Failed to fetch workout (status ${res.status})`);
  }
  return res.json();
}