import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ban } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dropdown } from "../common";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { RemoveModal, UpdateModal } from "../modal/action";
import { ShoppingListItem } from "@/types/shopping-list";
import { capitalize } from "@/lib/utils";
import { Button } from "../ui/button";

interface ShoppingListItemCardProps {
  item: ShoppingListItem;
  onPurchase: (itemId: string) => void;
}

export default function ShoppingListItemCard({ item, onPurchase }: ShoppingListItemCardProps) {
  const { id, name, quantity, emoji, category, isPurchased } = item;

  const isEmoji = emoji && !!emoji.length;
  const purchaseLabel = isPurchased ? "purchased" : "purchase";

  return (
    <Card>
      <CardHeader className="gap-2">
        <CardTitle className="flex items-start justify-between">
          <Badge className="bg-purple-600 text-base">{capitalize(name)}</Badge>
          <Dropdown>
            <DropdownMenuItem asChild className="flex items-center gap-4">
              <UpdateModal data={item} />
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="flex items-center gap-4">
              <RemoveModal data={item} />
            </DropdownMenuItem>
          </Dropdown>
        </CardTitle>
        <div className="flex flex-col gap-1">
          <CardDescription className="text-xs text-slate-500">
            Total quantity: <span className="font-semibold text-slate-700">{quantity || 0}</span>
          </CardDescription>
          <CardDescription className="text-xs text-slate-500">
            Category: <span className="font-semibold text-slate-700">{capitalize(category)}</span>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        {isEmoji ? <img src={emoji} className="size-8" /> : <Ban className="size-8 text-slate-700" />}
        <Button className="bg-purple-600/15 text-slate-700" onClick={() => onPurchase(id)}>
          {capitalize(purchaseLabel)}
        </Button>
      </CardContent>
    </Card>
  );
}
