import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function EditBtn({ path }) {
  return (
    <Link
      to={path}
      className="cursor-pointer p-2 hover:bg-neutral-200 duration-300 rounded-lg dark:text-white"
    >
      <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
    </Link>
  );
}
