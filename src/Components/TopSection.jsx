import Header from "./Header";
import Stats from "./Stats";

export default function TopSection({ title, children, ...props }) {
  // Comp structure
  return (
    <div className="mb-5">
      {/* Header title */}
      <Header title={title}>{children}</Header>

      {/* Stats cards */}
      <Stats {...props} />
    </div>
  );
}
