import ActionBtn from "@/components/buttons/ActionBtn";
import Input from "@/components/Input";
import { Form, useLoaderData, useNavigation } from "react-router-dom";

export default function HabitPopupForm() {
  // Variables
  const inputData = {
    required: true,
    placeholder: "e.g., Drink Water, Exercise",
    title: "Title",
    name: "title",
    type: "text",
    inputClass: "font-semibold text-sm",
    labelClass: "mb-3",
  };

  // End of variables
  const data = useLoaderData();

  const navigating = useNavigation();
  const submittingState = navigating.state === "submitting";

  // Comp structure
  return (
    <Form action="" method="post">
      {/* Title input */}
      <Input {...inputData} />

      {/* Add habit button */}
      <ActionBtn state={submittingState} fallback="Adding...">
        Add New Habit
      </ActionBtn>
    </Form>
  );
}
