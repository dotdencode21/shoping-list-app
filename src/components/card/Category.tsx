import { Category } from "@/types/category";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Ban } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dropdown } from "../common";
import { Link } from "react-router";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { EditCategoryModal, RemoveCategoryModal } from "../modal/category";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { name, items, emoji } = category;

  const isEmoji = emoji && !!emoji.length;

  return (
    <Card>
      <CardHeader className="gap-2">
        <CardTitle className="flex items-start justify-between">
          <Badge className="bg-purple-600 text-sm">{name}</Badge>
          <Dropdown>
            <DropdownMenuItem asChild className="flex items-center gap-4">
              <EditCategoryModal data={category} />
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="flex items-center gap-4">
              <RemoveCategoryModal data={category} />
            </DropdownMenuItem>
          </Dropdown>
        </CardTitle>
        <CardDescription className="text-xs text-slate-500">Total items: {items?.length || 0}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        {isEmoji ? <img src={emoji} className="size-8" /> : <Ban className="size-8 text-slate-700" />}
        <Link to={`${category.name}`} className="rounded-sm bg-purple-600/15 p-1">
          <ArrowRight className="text-slate-700" />
        </Link>
      </CardContent>
    </Card>
  );
}
