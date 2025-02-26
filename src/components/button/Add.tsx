import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { ComponentProps } from "react";

export default function AddButton({ ...props }: ComponentProps<"button">) {
  return (
    <Button {...props} className="size-16 rounded-2xl bg-purple-600">
      <Plus className="size-8 text-neutral-100" />
    </Button>
  );
}
