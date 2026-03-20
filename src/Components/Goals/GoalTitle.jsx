import DeleteBtn from "../buttons/DeleteBtn";
import EditBtn from "../buttons/EditBtn";

export default function GoalTitle({ title, id }) {
  return (
    <div className="mb-3 flex justify-between">
      {/* Title */}
      <p>{title}</p>

      {/* Edit and delete goal buttons */}
      <div className="flex gap-3">
        {/* Edit button */}
        <EditBtn path={`/app/goals/${id}/edit`} />

        {/* Delete button */}
        <DeleteBtn path={`/app/goals/${id}/delete`} />
      </div>
    </div>
  );
}
