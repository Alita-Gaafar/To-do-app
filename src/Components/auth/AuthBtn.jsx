import { Link } from "react-router-dom";

export default function AuthBtn({ title, to }) {
  return (
    <div className="bg-black text-white hover:bg-[#000000e0] text-center py-1 sm:py-3 rounded-sm cursor-pointer duration-300 dark:text-black dark:bg-white">
      <Link
        className={` `}
        to="/tasks"
      >
        {title}
      </Link>
    </div>
  );
}
