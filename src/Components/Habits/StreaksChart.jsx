// Chart
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function StreaksChart({ chartData }) {
  // Variables
  const chartConfig = {
    streaks: {
      label: "streaks",
      color: "var(--chart-2)",
    },
  };
  // End of variables

  // Comp structure
  return (
    <Card>
      {/* Header */}
      <CardHeader>
        <CardTitle className={"font-bold text-xl"}>Streak Progress</CardTitle>
      </CardHeader>

      {/* Content */}
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
  );
}
