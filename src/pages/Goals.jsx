import PagesContainer from "../components/styling components/PagesContainer";
import TopSection from "../Components/TopSection";
import { goalCards } from "@/util/data";
import AddButton from "../components/buttons/AddButton";
import GoalCard from "../components/goals/GoalCard";
import CardStyle from "../components/styling components/CardStyle";

import { requireAuth } from "@/util/react-router";
import { fetchAllData, tryAndCatch } from "@/util/http";
import { Outlet, useLoaderData } from "react-router";

export default function Goals() {
  // Variables
  const allGoals = 0; // Goals number

  const completedGoals = 0; // Completed goals

  const avgProgress = 0; // Avg progress

  // Stats of goals
  const stats = {
    total: allGoals,
    completed: completedGoals,
    avgProgress: Math.round(avgProgress) + "%",
  };

  // End of variables

  // React router
  const goals = useLoaderData();

  const finalGoals = goals || [{ title: "test", id: 56 }];

  // End of react router

  // Component structure
  return (
    <>
      {/* Page content */}
      <PagesContainer>
        <Outlet />

        {/* Top section (title and stats cards) */}
        <TopSection
          cards={goalCards}
          stats={stats}
          title="Goals"
          classes="md:grid-cols-3"
        >
          Set and achieve your long-term objectives
        </TopSection>

        {/* Add goals button */}
        <AddButton path="/app/goals/new">+ Add Goal</AddButton>

        {/* Goal cards */}
        {finalGoals.length === 0 && (
          <CardStyle title="goal" data={finalGoals}></CardStyle>
        )}

        {finalGoals.map((goal) => (
          <GoalCard key={goal.id} {...goal} />
        ))}
      </PagesContainer>
    </>
  );
}

export function goalsLoader() {
  requireAuth();

  // const url = ``;

  // tryAndCatch(() => fetchAllData(url));
}
