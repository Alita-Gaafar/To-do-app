export default function Category({category}) {
  return (
    category && (
      <div className="sm:px-2 px-1 py-2 text-center rounded-sm bg-emerald-100 text-emerald-700 dark:text-emerald-300 dark:bg-emerald-900">
        {category}
      </div>
    )
  );
}
