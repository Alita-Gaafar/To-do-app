import CardStyle from "../styling components/CardStyle";
import StatsCard from "./StatsCard";

export default function AccountStats() {
  return (
    <CardStyle>
      {/* Header */}
      <h3 className="mb-10 font-semibold text-lg">Account Stats</h3>

      {/* Stats */}
      <div className="flex justify-around">
        {/* Member entry date */}
        <StatsCard label="Member Since" data="November 2024" hidden={true} />

        {/* Total Tasks */}
        <StatsCard label="Total Tasks" data="5 Completed" />

        {/* Streak */}
        <StatsCard label="Current Streak" data="19 days" />
      </div>
    </CardStyle>
  );
}
