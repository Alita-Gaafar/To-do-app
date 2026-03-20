import { Progress } from "@/components/ui/progress";

export default function GoalProgress({progress}) {
  return (
    <div className="my-12">
      <div className="flex justify-between mb-3 text-neutral-600 dark:text-neutral-400">
        <span>Progress</span>
        <span></span>
        {progress > 0 ? progress : 0}%
      </div>
      <Progress
        value={progress}
        className="w-[100%] dark:bg-neutral-600  z-1"
      />
    </div>
  );
}
