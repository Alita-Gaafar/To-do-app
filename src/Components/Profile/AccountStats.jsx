import CardStyle from "../styling components/CardStyle";

export default function AccountStats() {
  return (
    <CardStyle>
      {/* Header */}
      <h3 className="mb-10 font-semibold text-lg">Account Stats</h3>

      {/* Stats */}
      <div className="flex justify-around">
        {/* Member entry date */}
        <div className="text-center">
          <p className="mb-2">Member Since</p>
          <p className="text-neutral-700">November 2024</p>
        </div>

        {/* Total Tasks */}
        <div className="text-center">
          <p className="mb-2">Total Tasks</p>
          <p className="text-neutral-700">5 Completed</p>
        </div>

        {/* Streak */}
        <div className="text-center">
          <p className="mb-2">Current Streak</p>
          <p className="text-neutral-700">19 days</p>
        </div>
      </div>
    </CardStyle>
  );
}
