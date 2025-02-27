import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ban } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dropdown } from "../common";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { RemoveModal, UpdateModal } from "../modal/action";
import { ShoppingListItem } from "@/types/shopping-list";

interface ShoppingListItemCardProps {
  item: ShoppingListItem;
}

export default function ShoppingListItemCard({ item }: ShoppingListItemCardProps) {
  const { name, quantity, emoji } = item;

  const isEmoji = emoji && !!emoji.length;

  return (
    <Card>
      <CardHeader className="gap-2">
        <CardTitle className="flex items-start justify-between">
          <Badge className="bg-purple-600 text-sm">{name}</Badge>
          <Dropdown>
            <DropdownMenuItem asChild className="flex items-center gap-4">
              <UpdateModal data={item} />
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="flex items-center gap-4">
              <RemoveModal data={item} />
            </DropdownMenuItem>
          </Dropdown>
        </CardTitle>
        <CardDescription className="text-xs text-slate-500">Total quantity: {quantity || 0}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        {isEmoji ? <img src={emoji} className="size-8" /> : <Ban className="size-8 text-slate-700" />}
        <div>aaa</div>
      </CardContent>
    </Card>
  );
}
