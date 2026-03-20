import { editProfileInputs as inputs } from "@/util/data";
import Input from "../Input";

export default function EditProfileInputs() {
  return (
    <div className="w-full p-5 mb-3 shadow-sm hover:shadow-md duration-300 rounded-sm dark:bg-neutral-800">
      {inputs.map((input) => (
        <Input key={input.title} {...input} />
      ))}
    </div>
  );
}