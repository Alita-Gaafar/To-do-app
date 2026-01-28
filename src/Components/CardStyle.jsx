import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

export default function CardStyle({
  children,
  flex,
  tasks,
  goals,
  habits,
  ...props
}) {
  // -------------------- Contexts --------------------
  // End of contexts
  return (
    <motion.div
      {...props}
      className={` bg-white ${flex && "flex justify-between"} 
      my-5 border border-neutral-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300 dark:bg-black dark:border-[var(--dark-border-primary-color)]`}
    >
      {/* If there is no task */}
      {tasks && tasks.length === 0 && (
        <p className="text-center p-10 text-neutral-500 dark:bg-black dark:text-[var(--dark-text-primary-color)]">
          No tasks found. Add a new task to get started!
        </p>
      )}

      {/* If there is no goal */}
      {goals && goals.length === 0 && (
        <p className="text-center p-10 text-neutral-500 dark:bg-black dark:text-[var(--dark-text-primary-color)]">
          No goals found. Add a new goal to get started!
        </p>
      )}

      {/* If there is no habit */}
      {habits && habits.length === 0 && (
        <div className="p-10">
          <div className="text-center mb-10 text-neutral-300 dark:bg-black dark:text-[var(--dark-text-primary-color)]">
            <FontAwesomeIcon
              style={{ fontSize: "40px" }}
              icon="fa-solid fa-arrow-trend-up"
            ></FontAwesomeIcon>
          </div>
          <p className="text-center  text-neutral-500">
            No habits yet. Add a habit to start tracking!
          </p>
        </div>
      )}
      {children}
    </motion.div>
  );
}
