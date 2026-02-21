export default function ActionBtn({ children, style }) {
  return (
    <button
      className={`w-full ${style ? style : "bg-black text-white hover:bg-[#000000e0]"} text-center  py-3 rounded-sm cursor-pointer duration-300 dark:text-black dark:bg-white`}
    >
      {children}
    </button>
  );
}
