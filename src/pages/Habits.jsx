// Hooks
import { use } from "react";

// Ctx
import { HabitsCtx } from "../components/contexts/HabitsCtx";

// Comps
import TopSection from "../components/TopSection";
import { habitCards } from "@/util/data";
import AddButton from "../components/buttons/AddButton";
import HabitPopup from "../components/habits/HabitPopup";
import CardStyle from "../components/styling components/CardStyle";
import PagesContainer from "@/components/styling components/PagesContainer";
import HabitCard from "@/components/habits/HabitCard";
import Quote from "@/components/habits/Quote";
import StreaksChart from "@/components/habits/StreaksChart";

export default function Habits() {
  // -------------------- Contexts --------------------
  const { habits, handleShowPopup, showPopup } = use(HabitsCtx);
  // End of contexts

  // -------------------- Variables --------------------
  const allHabits = habits.length; // All habits

  const totalStreaks = habits.reduce((all, value) => all + value.streaks, 0); // Total streaks

  // Stats of habits
  const stats = {
    total: allHabits,
    streaks: totalStreaks,
  };

  // -------------------- Component Structure --------------------
  return (
    <>
      {/* Add habit popup */}
      {showPopup && <HabitPopup />}

      <PagesContainer>
        {/* Top section (title and stats cards) */}
        <TopSection cards={habitCards} stats={{ ...stats }} title="Habits" classes="md:grid-cols-2">
          Build consistent routines and track your progress
        </TopSection>

        {/* Add goals button */}
        <AddButton handleClick={handleShowPopup}>+ Add Habit</AddButton>

        {/* Quote */}
        <Quote />

        {/* Habits */}
        {habits.length === 0 && <CardStyle data={habits} title="habit" />}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {habits.map((habit) => {
            return (
              <HabitCard
                key={habit.id}
                habitId={habit.id}
                title={habit.title}
                frequency={habit.frequency}
                streaks={habit.streaks}
                canIncrease={habit.canIncrease}
                completed={habit.completed}
              >
                {habit.title}
              </HabitCard>
            );
          })}
        </div>

        {/* Habits Chart */}
        <div className="mt-5">
          {habits.length > 0 && (
            <>
              {/* Streak chart */}
              <StreaksChart chartData={habits} />
            </>
          )}
        </div>
      </PagesContainer>
    </>
  );
}
