export default function Header({ text, title }) {
  return (
    <div className="text-center">
      <p></p>
      <div>{title}</div>
      <div className="text-[#717182] text-sm m-5">{text}</div>
    </div>
  );
}
