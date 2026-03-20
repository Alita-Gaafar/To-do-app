import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFetcher } from "react-router-dom";

export default function DeleteBtn({ path }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form
      action={path}
      method="delete"
      
    >
      <button className="cursor-pointer text-red-600 p-2 hover:bg-neutral-300 duration-300 rounded-lg">
        <FontAwesomeIcon icon="fa-regular fa-trash-can" />
      </button>
    </fetcher.Form>
  );
}
