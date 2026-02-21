export default function ActionBtn({ handleClick, children, style }) {
  return (
    <button
      onClick={handleClick && handleClick}
      className={`w-full ${style ? style : "bg-black text-white hover:bg-[#000000e0]"} text-center py-1 sm:py-3 rounded-sm cursor-pointer duration-300 dark:text-black dark:bg-white`}
    >
      {children}
    </button>
  );
}
