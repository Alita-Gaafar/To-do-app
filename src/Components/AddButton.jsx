export default function AddButton({ children }) {
  return (
    <div>
      <button className="py-[10px] px-4 bg-black text-white rounded-lg cursor-pointer duration-300 hover:bg-[#000000e0]">{children}</button>
    </div>
  );
}
