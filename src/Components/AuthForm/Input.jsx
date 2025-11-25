export default function Input({ type, htmlFor, required, placeholder, ref, children }) {
  return (
    <div className=" mb-5">
      <label htmlFor={htmlFor} className="block mb-1 font-bold">
        {children}
      </label>
      <input ref={ref} required={required ? required : ""} type={type} id={htmlFor} placeholder={`Enter your ${placeholder}`} className="input-focus px-4 py-2 w-full rounded-lg duration-300" />
    </div>
  );
}
