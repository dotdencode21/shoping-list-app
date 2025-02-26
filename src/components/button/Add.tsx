import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { ComponentProps } from "react";

export default function AddButton({ ...props }: ComponentProps<"button">) {
  return (
    <Button {...props} className="size-12 rounded-2xl bg-purple-600">
      <Plus className="size-6 text-neutral-100" />
    </Button>
  );
}
