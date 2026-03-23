import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({ icon }) {
  return (
    <div className="flex justify-center mb-5">
      <div className="w-15 h-15 flex justify-center items-center p-3 rounded-full bg-emerald-100 text-emerald-600 text-2xl">
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
}
