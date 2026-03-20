export default function ActionBtn({ children, style, state, fallback }) {
  return (
    <button
      disabled={state}
      className={`w-full ${style ? style : "bg-black text-white hover:bg-[#000000e0]"} text-center py-1 sm:py-3 rounded-sm cursor-pointer duration-300 dark:text-black dark:bg-white`}
    >
      {state ? fallback : children}
    </button>
  );
}
