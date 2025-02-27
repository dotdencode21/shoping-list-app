import { ShoppingListItemCard } from "@/components/card";
import { Spinner } from "@/components/common";
import EmptyState from "@/components/common/EmptyState";
import { useShoppingListStore } from "@/store/shoppingList";
import { useMemo } from "react";

interface ShoppingListPageContentProps {
  search: string;
}

export default function ShoppingListPageContent({ search }: ShoppingListPageContentProps) {
  const { items, isLoading } = useShoppingListStore();

  const filteredItems = useMemo(() => {
    return items?.filter((category) => category.name.toLowerCase().includes(search)) || [];
  }, [search, items]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!filteredItems.length) {
    return <EmptyState message="The category list is empty. Try creating one!" />;
  }

  return (
    <div className="grid grid-cols-4 items-center gap-4">
      {filteredItems.map((item) => (
        <ShoppingListItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
