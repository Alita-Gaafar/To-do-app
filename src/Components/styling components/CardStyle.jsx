export default function CardStyle({
  children,
  title,
  data,
  completed,
  classes,
}) {
  // Comp structure
  return (
    <div
      className={`${classes} ${completed && "bg-neutral-100"} p-5 md:p-7 mt-5 rounded-xl duration-300 shadow-sm hover:shadow-md`}
    >
      {/* If there is no task */}
      {data?.length == 0 && (
        <p className="text-center p-10 text-neutral-500 dark:bg-black dark:text-[var(--dark-text-primary-color)]">
          No {title}s found. Add a new {title} to get started!
        </p>
      )}

      {children}
    </div>
  );
}
