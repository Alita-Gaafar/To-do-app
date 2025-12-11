import { Toaster } from "sonner";
import PagesContainer from "../PagesContainer";
import { use } from "react";
import { HabitsCtx } from "../Contexts/HabitsCtx";
import TopSection from "../TopSection";
import { habitCards } from "@/util/data";
import AddButton from "../AddButton";
import { AnimatePresence } from "motion/react";
import HabitPopup from "./HabitPopup";
import { MotionHabitCard } from "./HabitCard";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import CardStyle from "../CardStyle";

export default function Habits() {
  // -------------------- Contexts --------------------
  const {
    habits,
    numberOfAllHabits,
    totalStreaks,
    avgSuccessRate,
    handleAddHabitClick,
    showPopup,
  } = use(HabitsCtx);
  // End of contexts

  // -------------------- Variables --------------------

  const chartData = habits;

  const chartConfig = {
    streaks: {
      label: "streaks",
      color: "var(--chart-2)",
    },
    successRate: {
      label: "Success Rate",
      color: "var(--chart-3)",
    },
  };
  // -------------------- Component Structure --------------------
  return (
    <>
      {/* Popup */}
      <AnimatePresence>
        {/* Add goal popup */}
        {showPopup && <HabitPopup>Add New Habit</HabitPopup>}
      </AnimatePresence>

      <PagesContainer>
        {/* Notification */}
        <div>
          <Toaster />
        </div>

        {/* Top section (title and stats cards) */}
        <TopSection
          cards={habitCards}
          all={numberOfAllHabits}
          streaks={totalStreaks}
          successRate={Math.round(avgSuccessRate)}
          title="Habits"
        >
          Build consistent routines and track your progress
        </TopSection>

        {/* Add goals button */}
        <AddButton handleClick={handleAddHabitClick}>+ Add Habit</AddButton>

        {/* Quote */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-7 mt-5">
          <i>
            "We are what we repeatedly do. Excellence, then, is not an act, but
            a habit." — Aristotle
          </i>
        </div>

        {/* Habits */}
        {habits.length === 0 && <CardStyle habits={habits} />}
        <div className="grid grid-cols-2 gap-3">
          <AnimatePresence>
            {habits.map((habit) => {
              return (
                <MotionHabitCard
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  key={habit.id}
                  habitId={habit.id}
                  title={habit.title}
                  frequency={habit.frequency}
                  streaks={habit.streaks}
                  successRate={habit.successRate}
                >
                  {habit.title}
                </MotionHabitCard>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Habits Chart */}
        {habits.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {/* Streak */}
            <Card>
              <CardHeader>
                <CardTitle className={"font-bold text-xl"}>
                  Streak Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <BarChart accessibilityLayer data={chartData}>
                    <XAxis
                      dataKey="title"
                      tickMargin={10}
                      tickFormatter={(value) => {
                        return value;
                      }}
                    />
                    <YAxis />
                    <Bar
                      dataKey="streaks"
                      stackId="a"
                      fill="var(--color-streaks)"
                      radius={[4, 4, 0, 0]}
                    />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                      cursor={false}
                      defaultIndex={1}
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Success Rate */}
            <Card>
              <CardHeader>
                <CardTitle className={"font-bold text-xl"}>
                  Success Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <BarChart accessibilityLayer data={chartData}>
                    <XAxis
                      dataKey="title"
                      tickMargin={10}
                      tickFormatter={(value) => {
                        return value;
                      }}
                    />
                    <YAxis />
                    <Bar
                      dataKey="successRate"
                      stackId="a"
                      fill="var(--color-successRate)"
                      radius={[4, 4, 0, 0]}
                    />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                      cursor={false}
                      defaultIndex={1}
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        )}
      </PagesContainer>
    </>
  );
}
