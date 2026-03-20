import { Link, useSubmit } from "react-router-dom";

export default function ProfileBtn(props) {
  
  return (
    <Link
      onClick={props.handleSubmit && props.handleSubmit}
      to={props.path}
      className={`${props.style ? props.style : "text-white"} w-full bg-black hover:bg-[#000000e0] text-center py-1 sm:py-3 rounded-sm cursor-pointer duration-300 dark:text-black dark:bg-white`}
    >
      {props.children}
    </Link>
  );
}
