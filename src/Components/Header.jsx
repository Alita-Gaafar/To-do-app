export default function Header({ children, title }) {
  return (
    <div className="mb-10">
      <p className="font-semibold text-2xl mb-2 dark:text-white">My {title}</p>
      <p className="text-neutral-700 dark:text-[var(--dark-text-primary-color)]">
        {children}
      </p>
    </div>
  );
}
