import { use } from "react";
import PagesContainer from "../components/styling components/PagesContainer";
import TopSection from "../Components/TopSection";
import { goalCards } from "@/util/data";
import AddButton from "../components/buttons/AddButton";
import GoalCard from "../components/goals/GoalCard";
import CardStyle from "../components/styling components/CardStyle";
import GoalPopup from "../components/goals/popup/GoalPopup";

import { Toaster } from "@/components/ui/sonner";
import { GoalsCtx } from "../components/contexts/GoalsContext";

export default function Goals() {
  // -------------------- Contexts --------------------
  const { goals, handleShowAddPopup, popupInfo } = use(GoalsCtx);
  
  // End of contexts

  // Variables

  const allGoals = goals.length; // Goals number

  const completedGoals = goals.filter((goal) => goal.completed).length; // Completed goals  

  const allProgress = goals.reduce((all, value) => all + value.progress, 0); // All progress

  const avgProgress = allProgress / allGoals || 0; // Avg progress

  // Stats of goals
  const stats = {
    total: allGoals,
    completed: completedGoals,
    avgProgress: Math.round(avgProgress) + "%",
  };

  // End of variables

  // Component structure
  return (
    <>
      {/* Add popup */}
      {popupInfo.show && (
        <GoalPopup
          title={popupInfo.type == "add" ? "Add New Goal" : "Edit Goal"}
        ></GoalPopup>
      )}

      {/* Page content */}
      <PagesContainer>
        {/* Top section (title and stats cards) */}
        <TopSection cards={goalCards} stats={{ ...stats }} title="Goals" classes="md:grid-cols-3">
          Set and achieve your long-term objectives
        </TopSection>

        {/* Add goals button */}
        <AddButton handleClick={handleShowAddPopup}>+ Add Goal</AddButton>

        {/* Goal cards */}
        {goals.length === 0 && (
          <CardStyle title="goal" data={goals}></CardStyle>
        )}
        {goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goalId={goal.id}
            title={goal.title}
            description={goal.description}
            date={goal.date}
          />
        ))}
      </PagesContainer>
    </>
  );
}
