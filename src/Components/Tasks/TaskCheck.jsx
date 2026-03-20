// UI
import { Checkbox } from "@/components/ui/checkbox";

export default function TaskCheck({ completed }) {
  return (
    <div className="me-3">
      <Checkbox
        checked={completed}
        id="terms"
        className="cursor-pointer dark:border-[var(--dark-border-primary-color)]"
      />
    </div>
  );
}
