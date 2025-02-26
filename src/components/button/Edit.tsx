import { Pencil } from "lucide-react";
import { Button } from "../ui/button";
import { ComponentProps } from "react";

interface EditButtonProps extends ComponentProps<"button"> {
  title?: string;
}

export default function EditButton({ title = "", ...props }: EditButtonProps) {
  return (
    <Button {...props} className="flex items-center gap-3 bg-transparent shadow-none">
      <Pencil className="size-4 text-slate-700" />
      {title && <span className="text-slate-700">{title}</span>}
    </Button>
  );
}
