export default function Header({ children }) {
  return (
    <div className="mb-10">
      <p className="font-semibold text-2xl mb-2">My Tasks</p>
      <p className="text-neutral-700">{children}</p>
    </div>
  );
}
