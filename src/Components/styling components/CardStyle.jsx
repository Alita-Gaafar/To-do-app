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
      className={`${classes} ${completed && "bg-neutral-100 dark:opacity-50"} dark:border dark:border-neutral-700 p-5 md:p-7 mt-5 rounded-xl duration-300 shadow-sm hover:shadow-md dark:bg-black dark:text-[var(--dark-text-primary-color)]`}
    >
      {/* If there is no task */}
      {data?.length == 0 && (
        <p className="text-center p-10 text-neutral-500 ">
          No {title}s found. Add a new {title} to get started!
        </p>
      )}

      {children}
    </div>
  );
}
