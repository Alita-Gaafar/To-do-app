import Header from "./Header";
import StatsCard from "./StatsCard";

export default function TopSection({
  children,
  cards,
  all,
  completed,
  pending,
  avgProgress,
  title,
  streaks,
  successRate
}) {
  return (
    <div className="mb-5">
      {/* Header title */}
      <Header title={title}>{children}</Header>

      {/* Stats cards */}
      <div className="flex justify-between gap-4">
        {cards.map((card) => {
          return (
            <StatsCard
              key={card.id}
              icon={card.icon}
              bgColor={card.bgColor}
              iconColor={card.iconColor}
              count={
                card.condition === "total"
                  ? all
                  : card.condition === "completed"
                  ? completed
                  : card.condition === "progress"
                  ? `${avgProgress}%`
                  : card.condition === "streaks"
                  ? streaks
                  : card.condition === "rate"
                  ? `${successRate}%`
                  : pending
              }
            >
              {card.title}
            </StatsCard>
          );
        })}
      </div>
    </div>
  );
}
