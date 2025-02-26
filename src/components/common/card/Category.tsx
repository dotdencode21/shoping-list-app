import { Category } from "@/types/category";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ban } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ActionDropdown from "../ActionDropdown";
import { Link } from "react-router";

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
          <ActionDropdown category={category} />
        </CardTitle>
        <CardDescription className="text-xs text-slate-500">Total items: {items?.length || 0}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        {isEmoji ? <img src={emoji} className="size-8" /> : <Ban className="size-8 text-slate-800" />}
        <Link to={`${category.name}`} className="rounded-sm bg-purple-600/15 p-2 text-sm text-slate-700">
          Items
        </Link>
      </CardContent>
    </Card>
  );
}
