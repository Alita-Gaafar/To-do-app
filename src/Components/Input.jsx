import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Input(props) {
  return (
    <div className={`mb-2 ${props.inputClass && props.inputClass}`}>
      {/* Label */}
      <label
        htmlFor={props.name}
        className={`block mb-1 dark:text-white capitalize ${props.labelClass && props.labelClass}`}
      >
        {props.title}
      </label>

      {/* Input container */}
      <div className="flex items-center">
        {props.icon && (
          <span className="absolute ms-3 text-neutral-400">
            <FontAwesomeIcon icon={`${props.icon}`}></FontAwesomeIcon>
          </span>
        )}
        {/* Input */}
        <input
          defaultValue={props.dataToEdit?.[props.name]}
          // onChange={(e) =>
          //   props.handleInputChange && props.handleInputChange(e, props.name)
          // }
          name={props.name}
          required={props.required}
          type={props.type}
          id={props.name}
          placeholder={`Enter your ${props.placeholder || "..."}`}
          className={`${
            props.icon && "ps-10"
          } input-focus px-4 py-3 w-full rounded-sm duration-300 bg-[#f3f3f5] dark:bg-neutral-900 dark:text-[var(--dark-text-primary-color)]`}
        />
      </div>
    </div>
  );
}
