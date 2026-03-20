import HabitCard from "./HabitCard";

export default function HabitsLayout({ habits }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {habits.map((habit) => (
        <HabitCard key={habit.id} {...habit} />
      ))}
    </div>
  );
}
