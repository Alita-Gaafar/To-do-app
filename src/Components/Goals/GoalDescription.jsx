export default function GoalDescription({ description }) {
  return (
    description && (
      <p className="text-neutral-600 dark:text-neutral-400 mb-3">
        {description}
      </p>
    )
  );
}
