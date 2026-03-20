import StatsCard from "./StatsCard";

export default function Stats(props) {
  return (
    <div className={`grid ${props.classes} grid-cols-1 gap-4`}>
      {props.cards.map((card) => {
        return (
          <StatsCard
            key={card.id}
            {...card}
            count={props.stats[card.condition]}
          >
            {card.title}
          </StatsCard>
        );
      })}
    </div>
  );
}
