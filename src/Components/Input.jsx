import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddButton from "./buttons/AddButton";
import { use } from "react";
import TaskContext from "./contexts/TasksContext";

export default function Input({
  title,
  type,
  name,
  required,
  placeholder,
  labelClass,
  inputClass,
  handleClick,
  handleInputChange,
  dataToEdit,
  icon,
}) {
  return (
    <div className={`mb-2 ${inputClass && inputClass}`}>
      {/* Label */}
      <label
        htmlFor={name}
        className={`block mb-1 dark:text-white capitalize ${labelClass && labelClass}`}
      >
        {title}
      </label>

      {/* Input container */}
      <div
        className="flex items-center"
        // style={
        //   addBtn && {
        //     display: "flex",
        //     alignItems: "stretch",
        //     gap: "5px",
        //     position: "relative",
        //   }
        // }
      >
        {icon && (
          <span className="absolute ms-3 text-neutral-400">
            <FontAwesomeIcon icon={`${icon}`}></FontAwesomeIcon>
          </span>
        )}
        {/* Input */}
        <input
          defaultValue={dataToEdit?.[name]}
          onChange={(e) => handleInputChange && handleInputChange(e, name)}
          name={name}
          required={required}
          type={type}
          id={name}
          placeholder={`Enter your ${placeholder || "..."}`}
          className={`${
            icon && "ps-10"
          } input-focus px-4 py-3 w-full rounded-sm duration-300 bg-[#f3f3f5] dark:bg-neutral-900 dark:text-[var(--dark-text-primary-color)]`}
        />

        {/* Add button */}
        {/* {addBtn && (
          <AddButton handleClick={handleClick} height={true}>
            Add
          </AddButton>
        )} */}
      </div>
    </div>
  );
}
