export default function PagesContainer({ children }) {
  return (
    <div
      className="flex-2 ml-0 min-h-screen bg-neutral-50 px-5 py-5 md:py-10 md:px-20 dark:bg-neutral-900"
    >
      {children}
    </div>
  );
}
