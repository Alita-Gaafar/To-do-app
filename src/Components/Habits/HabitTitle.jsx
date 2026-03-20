import DeleteBtn from "../buttons/DeleteBtn";

export default function HabitTitle({ id, title }) {
  return (
    <div className="mb-2 flex justify-between items-center">
      {/* Title */}
      <div className="capitalize dark:text-white">{title}</div>

      {/* Remove Button */}
      <div>
        <DeleteBtn path={`/app/habits/${id}/delete`} />
      </div>
    </div>
  );
}
