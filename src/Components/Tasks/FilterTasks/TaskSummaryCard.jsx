import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
export default function TaskSummaryCard({
  title,
  description,
  date,
  category,
}) {

  return (
    <div>
      <div>
        {/* You can only use normal events but onCheckedChange is better */}
        <Checkbox
          id="terms"
          className="cursor-pointer"
          
          onCheckedChange={(checked) => {
            console.log("Checkbox changed:", checked);
          }}
        />
      </div>
    </div>
  );
}
