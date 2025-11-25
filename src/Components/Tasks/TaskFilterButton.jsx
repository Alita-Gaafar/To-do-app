export default function TaskFilterButton({ children, activeBtn, handleFilterBtnClick }) {
  return (
    <div>
      <button onClick={() => handleFilterBtnClick(children)} className={`${activeBtn === children ? "bg-black text-white duration-300 hover:bg-[#000000e0]" : "bg-white text-black border border-neutral-200 duration-300 hover:bg-amber-50"} py-[10px] px-4  rounded-lg cursor-pointer`}>{children}</button>
    </div>
  );
}
