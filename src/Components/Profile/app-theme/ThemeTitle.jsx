export default function ThemeTitle({ theme }) {
  return (
    <div className="flex-20">
      <p className="mb-1 dark:text-white">Theme</p>
      <p className="text-neutral-600 dark:text-neutral-400">
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </p>
    </div>
  );
}
