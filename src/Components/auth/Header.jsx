import Icon from "./Icon";

export default function Header() {
  return (
    <div className="top text-center mb-8">
      {/* Icon */}
      <Icon
        classes="w-20 h-20 rounded-3xl shadow-2xl shadow-emerald-500/50"
        svgW={"w-10"}
        svgH={"h-10"}
      />

      {/* Title and description of project */}
      <div className="title mb-3 text-white">TaskFlow</div>
      <div className="description text-[#d0fae5]">
        Manage your tasks, goals, and habits
      </div>
    </div>
  );
}
