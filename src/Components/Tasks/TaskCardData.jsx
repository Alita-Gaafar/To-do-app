import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "./taskInfo/Title";
import Category from "./taskInfo/Category";
import Date from "./taskInfo/Date";
import Descriptions from "./taskInfo/Descriptions";

export default function TaskCardData(props) {
  return (
    <div className="">
      {/* Task title */}
      <Title completed={props.completed} title={props.title} />

      {/* Task description */}
      <Descriptions description={props.description} />

      {/* Task Category and date */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        {/* Category */}
        <Category category={props.category} />

        {/* Date */}
        <Date date={props.date} />
      </div>
    </div>
  );
}
