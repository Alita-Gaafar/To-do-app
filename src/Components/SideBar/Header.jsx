import Icon from "../auth/Icon";

export default function SidebarHeader() {
  return (
    <div
      className="
        p-5 flex items-center border-b border-neutral-200 dark:border-[var(--dark-border-primary-color)]
        group-data-[collapsible=icon]:justify-center
        group-data-[collapsible=icon]:p-3
      "
    >
      <Icon
        svgW={"w-6"}
        svgH={"h-6"}
        classes="
          w-10 h-10 rounded-xl p-2 shadow-lg shadow-emerald-500/30
          group-data-[collapsible=icon]:w-9
          group-data-[collapsible=icon]:h-9
        "
      />

      {/* Hide text when collapsed */}
      <span className="text-xl font-medium ms-2 dark:text-white group-data-[collapsible=icon]:hidden">
        TaskFlow
      </span>
    </div>
  );
}
