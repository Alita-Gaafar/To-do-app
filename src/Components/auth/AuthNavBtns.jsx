import { authButtons } from "@/util/data";
import Button from "./Button";

export default function AuthNavBtns() {
  return (
    <div className="flex justify-between gap-2 mb-5">
      {authButtons.map((btn) => (
        <Button key={btn.id} title={btn.title} path={btn.path} />
      ))}
    </div>
  );
}
