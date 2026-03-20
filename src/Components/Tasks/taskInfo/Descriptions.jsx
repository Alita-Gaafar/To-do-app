export default function Descriptions({ description }) {
  return (
    description && (
      <div className="text-neutral-600 capitalize text-lg mb-2 dark:text-[var(--dark-text-primary-color)]">
        {description}
      </div>
    )
  );
}
