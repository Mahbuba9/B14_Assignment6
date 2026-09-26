import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkoutById } from "../../lib/api";
import WorkoutActions from "../../components/WorkoutActions";

export default async function WorkoutDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let workout;
  try {
    workout = await getWorkoutById(id);
  } catch {
    notFound();
  }

  if (!workout) notFound();

  const specs = [
    { label: "EQUIPMENT", value: workout.equipment },
    { label: "DIFFICULTY", value: workout.difficulty },
    { label: "SETS", value: workout.sets },
    { label: "REPS", value: workout.reps },
    { label: "DURATION", value: `${workout.duration} min` },
    { label: "CALORIES", value: `${workout.caloriesBurned} kcal` },
    { label: "RATING", value: workout.rating },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: image */}
        <div className="relative w-full h-[320px] md:h-[500px] rounded-2xl overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: details */}
        <div>
          <h1 className="font-display font-bold uppercase text-3xl md:text-4xl mb-3">
            {workout.name}
          </h1>
          <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed mb-4">
            {workout.description}
          </p>

          <div className="flex gap-2 mb-6 flex-wrap">
            {workout.muscleGroups.map((tag) => (
              <span
                key={tag}
                className="bg-[var(--accent)] text-black text-xs font-semibold px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="border border-[var(--border)] rounded-xl overflow-hidden mb-6">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-4 py-3 text-sm ${
                  i !== specs.length - 1 ? "border-b border-[var(--border)]" : ""
                }`}
              >
                <span className="text-[var(--muted)] text-xs tracking-wide">
                  {spec.label}
                </span>
                <span className="font-medium">{spec.value}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display font-semibold uppercase text-lg mb-3">
            Instructions
          </h2>
          <ol className="space-y-2 mb-8">
            {workout.instructions.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-[var(--muted)]">
                <span className="text-white font-semibold">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <WorkoutActions workout={workout} />
        </div>
      </div>
    </div>
  );
}