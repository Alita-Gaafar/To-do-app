// Import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab); // Add (fas, far, fab) to the library of icons

// Component structure
export default function TaskStatsCard({ children, icon, bgColor }) {
  // Variables
  const faIcon = icon;
  // end of variables
  return (
    <div className="w-1/3 flex justify-between items-center px-5 py-8 bg-white border rounded-2xl border-neutral-200">
      <div>
        <p className="text-neutral-600 mb-3">{children}</p>
        <p>3</p>
      </div>
      <div className={`${bgColor && bgColor} p-2 rounded-full`}>
        <FontAwesomeIcon
          icon={`fa-solid ${faIcon}`}
          style={{
            color: "#00bc7d",
            width: "30px",
            height: "30px",
            backgroundColor: bgColor && bgColor,
          }}
        />
      </div>
    </div>
  );
}
