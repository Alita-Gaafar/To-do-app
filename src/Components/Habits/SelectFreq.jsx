import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { use } from "react";
import { HabitsCtx } from "../contexts/HabitsCtx";

export default function SelectFreq() {
  const { setFrequency } = use(HabitsCtx);

  return (
    <Select onValueChange={setFrequency}>
      <SelectTrigger className="w-full cursor-pointer">
        <SelectValue placeholder="Select frequency" />
      </SelectTrigger>

      {/* Choices */}
      <SelectContent className="z-100">
        <SelectGroup>
          {/* Daily choice */}
          <SelectItem className="cursor-pointer" value="daily">
            Daily
          </SelectItem>

          {/* Weekly choice */}
          <SelectItem className="cursor-pointer" value="weekly">
            Weekly
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
