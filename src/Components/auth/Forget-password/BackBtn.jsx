import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function BackBtn({ title, path }) {
  return (
    <Link
      className="hover:bg-[#0302132c] mt-3 text-center py-1 sm:py-3 rounded-sm cursor-pointer duration-300 block"
      to={path}
    >
      {/* Arrow */}
      <FontAwesomeIcon className="me-2" icon="fa-solid fa-arrow-left" />
      <span>{title}</span>
    </Link>
  );
}
