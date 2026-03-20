import ActionBtn from "@/components/buttons/ActionBtn";
import Input from "@/components/Input";
import { goalPopup } from "@/util/data";
import { Form, useLoaderData, useNavigation } from "react-router-dom";

export default function GoalPopupForm({ type }) {
  const data = useLoaderData();

  const navigating = useNavigation();
  const submittingState = navigating.state === "submitting";

  return (
    <Form action="" method="post">
      {goalPopup.map((goal) => (
        <Input {...goal} key={goal.id} dataToEdit={data} />
      ))}

      {/* Add goal button */}
      <ActionBtn state={submittingState} fallback="Adding...">
        {type === "edit" ? "Edit Goal" : "Add New Goal"}
      </ActionBtn>
    </Form>
  );
}
