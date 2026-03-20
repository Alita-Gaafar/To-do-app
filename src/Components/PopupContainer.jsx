export default function PopupContainer({ children }) {
  return (
    <div className="w-140 bg-white dark:bg-black p-5 rounded-lgw-140 overflow-y-auto rounded-lg shadow-2xl">
      {children}
    </div>
  );
}
