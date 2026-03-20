import StreaksChart from "./StreaksChart";

export default function HabitChart({ habits }) {
  return (
    <div className="mt-5">
      {habits.length > 0 && (
        <>
          {/* Streak chart */}
          <StreaksChart chartData={habits} />
        </>
      )}
    </div>
  );
}
