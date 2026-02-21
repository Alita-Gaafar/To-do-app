import QUOTE from "@/util/quotes";

export default function Quote() {
  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-7 mt-5 dark:border-emerald-800 dark:bg-gradient-to-r dark:from-emerald-950 dark:to-teal-950 dark:text-[var(--dark-text-primary-color)]">
      <i>"{QUOTE}"</i>
    </div>
  );
}
