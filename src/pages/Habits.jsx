// Comps
import TopSection from "../components/TopSection";
import { habitCards } from "@/util/data";
import AddButton from "../components/buttons/AddButton";
import CardStyle from "../components/styling components/CardStyle";
import PagesContainer from "@/components/styling components/PagesContainer";
import Quote from "@/components/habits/Quote";
import { requireAuth } from "@/util/react-router";
import { Outlet, useLoaderData } from "react-router-dom";
import HabitChart from "@/components/habits/HabitChart";
import HabitsLayout from "@/components/habits/HabitsLayout";

export default function Habits() {
  // Variables
  const allHabits = [].length; // All habits

  const totalStreaks = 0; // Total streaks

  // Stats of habits
  const stats = {
    total: allHabits,
    streaks: totalStreaks,
  };
  // End of variables.

  // React router
  const habits = useLoaderData();

  const finalHabits = habits || [{ title: "test", id: 56, streaks: 1 }];

  // End of react router

  // Component Structure
  return (
    <>
      {/* Add habit popup */}
      <Outlet />

      <PagesContainer>
        {/* Top section (title and stats cards) */}
        <TopSection
          cards={habitCards}
          stats={{ ...stats }}
          title="Habits"
          classes="md:grid-cols-2"
        >
          Build consistent routines and track your progress
        </TopSection>

        {/* Add goals button */}
        <AddButton path="/app/habits/new">+ Add Habit</AddButton>

        {/* Quote */}
        <Quote />

        {/* Habits */}
        {finalHabits.length === 0 && (
          <CardStyle data={finalHabits} title="habit" />
        )}

        {/* Habits */}
        <HabitsLayout habits={finalHabits} />

        {/* Habits Chart */}
        <HabitChart habits={finalHabits} />
      </PagesContainer>
    </>
  );
}

export function habitsLoader() {
  requireAuth();
}
