import { ShoppingListItemCard } from "@/components/card";
import { Spinner } from "@/components/common";
import EmptyState from "@/components/common/EmptyState";
import { useShoppingListStore } from "@/store/shoppingList";
import { ShoppingListItem } from "@/types/shopping-list";
import { useMemo } from "react";

interface ShoppingListPageContentProps {
  search: string;
  showOnlyPurchased: boolean;
}

export default function ShoppingListPageContent({ search, showOnlyPurchased }: ShoppingListPageContentProps) {
  const { items, isLoading, updateItemById } = useShoppingListStore();

  const handlePurchase = (itemId: string) => {
    const currentItem = items.find((item) => item.id === itemId);

    updateItemById(itemId, { ...currentItem, isPurchased: !currentItem?.isPurchased });
  };

  const filteredItems = useMemo(() => {
    const sortedItems = [...items].sort((a: ShoppingListItem, b: ShoppingListItem) => {
      return Number(b.isPurchased) - Number(a.isPurchased);
    });

    if (showOnlyPurchased) {
      return sortedItems.filter((item) => item.isPurchased);
    }

    if (search.length > 0) {
      return sortedItems.filter((item) => item.name.toLowerCase().includes(search));
    }

    return sortedItems;
  }, [search, items, showOnlyPurchased]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!filteredItems.length) {
    return <EmptyState message="The shopping list is empty. Try creating some items!" />;
  }

  return (
    <div className="grid grid-cols-4 items-center gap-4">
      {filteredItems.map((item) => (
        <ShoppingListItemCard key={item.id} item={item} onPurchase={handlePurchase} />
      ))}
    </div>
  );
}
