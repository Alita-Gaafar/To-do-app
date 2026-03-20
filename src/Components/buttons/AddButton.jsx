import { Link } from "react-router-dom";

export default function AddButton({ children,path }) {
  return (
    <div>
      <Link
        to={path}
        className="py-2.5 px-4 bg-black text-white rounded-lg cursor-pointer duration-300 hover:bg-[#000000e0] dark:bg-white dark:text-black"
      >
        {children}
      </Link>
    </div>
  );
}
