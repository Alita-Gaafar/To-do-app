import { Form, useLoaderData, useNavigation } from "react-router-dom";
import { taskPopup } from "@/util/data";
import ActionBtn from "../../buttons/ActionBtn";
import Input from "../../Input";

export default function TaskPopupForm({ type }) {
  const data = useLoaderData();

  const navigating = useNavigation();
  const submittingState = navigating.state === "submitting";

  return (
    <Form action="" method="post">
      {taskPopup.map((task) => (
        <Input
          key={task.id}
          dataToEdit={data}
          {...task}
          inputClass="font-semibold text-sm"
        />
      ))}

      {/* Add task button */}
      <ActionBtn state={submittingState} fallback="Adding...">
        {type === "edit" ? "Edit Task" : "Add New Task"}
      </ActionBtn>
    </Form>
  );
}
