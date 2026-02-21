

export default function TaskFilterButton({
  children,
  val,
  handleFilter,
  activeFilter,
}) {
  
  const isActive = val === activeFilter;
  return (
    <div>
      <button
        onClick={() => handleFilter(val)}
        className={`${
          isActive
            ? "bg-black text-white hover:bg-[#000000e0] dark:bg-white dark:text-black"
            : "bg-white text-black border border-neutral-200  hover:bg-amber-50 hover:dark:opacity-85 dark:bg-[#262626] dark:text-white dark:border-[var(--dark-border-primary-color)]"
        } p-2 md:px-4 md:py-[10px] rounded-lg cursor-pointer duration-300`}
      >
        {children}
      </button>
    </div>
  );
}
