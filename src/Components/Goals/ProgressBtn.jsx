export default function ProgressBtn({ handleClick, title }) {
  return (
    <div>
      <button
        className="w-50 mb-3 bg-black text-white dark:bg-white dark:text-black p-3 sm:py-3 sm:px-5 rounded-sm cursor-pointer"
        onClick={handleClick}
      >
        {title}
      </button>
    </div>
  );
}
