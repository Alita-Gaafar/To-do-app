export default function CardStyle(props) {
  // Comp structure
  return (
    <div
      className={`${props.classes} ${props.completed && "bg-neutral-100 dark:opacity-50"} dark:border dark:border-neutral-700 p-5 md:p-7 mt-5 rounded-xl duration-300 shadow-sm hover:shadow-md dark:bg-black dark:text-[var(--dark-text-primary-color)]`}
    >
      {/* If there is no task */}
      {props.data?.length == 0 && (
        <p className="text-center p-10 text-neutral-500 ">
          No {props.title}s found. Add a new {props.title} to get started!
        </p>
      )}

      {props.children}
    </div>
  );
}
