import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { ComponentProps } from "react";

interface RemoveButtonProps extends ComponentProps<"button"> {
  title?: string;
}

export default function RemoveButton({ title = "", ...props }: RemoveButtonProps) {
  return (
    <Button {...props} className="flex items-center gap-3 bg-transparent shadow-none">
      <Trash2 className="size-4 text-slate-700" />
      {title && <span className="text-slate-700">{title}</span>}
    </Button>
  );
}
