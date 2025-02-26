import { EllipsisVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import EditCategoryModal from "../modal/category/Edit";
import { Category } from "@/types/category";
import RemoveCategoryModal from "../modal/category/Remove";

interface ActionDropdownProps {
  category: Category;
}

export default function ActionDropdown({ category }: ActionDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <EllipsisVertical className="size-6 text-slate-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild className="flex items-center gap-4">
          <EditCategoryModal value={category} />
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="flex items-center gap-4">
          <RemoveCategoryModal value={category} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
