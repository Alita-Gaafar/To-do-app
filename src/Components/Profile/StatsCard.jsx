export default function StatsCard({ label, data, hidden }) {
  return (
    <div className={`text-center ${hidden && "hidden"} sm:block dark:text-white`}>
      <p className="mb-2">{label}</p>
      <p className="text-neutral-700 dark:text-neutral-400">{data}</p>
    </div>
  );
}
