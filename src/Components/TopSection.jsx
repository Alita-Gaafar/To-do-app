import Header from "./Header";
import StatsCard from "./StatsCard";

export default function TopSection({ children, stats, cards, title, classes }) {
  // Comp structure
  return (
    <div className="mb-5">
      {/* Header title */}
      <Header title={title}>{children}</Header>

      {/* Stats cards */}
      <div className={`grid ${classes} grid-cols-1 gap-4`}>
        {cards.map((card) => {
          return (
            <StatsCard
              key={card.id}
              icon={card.icon}
              bgColor={card.bgColor}
              iconColor={card.iconColor}
              count={stats[card.condition]}
            >
              {card.title}
            </StatsCard>
          );
        })}
      </div>
    </div>
  );
}
