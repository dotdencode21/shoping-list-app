import { CategoryCard } from "@/components/card";
import { Spinner } from "@/components/common";
import EmptyState from "@/components/common/EmptyState";
import { useCategoryStore } from "@/store/category";
import { useItemStore } from "@/store/item";
import { useMemo } from "react";

interface ItemPageContentProps {
  search: string;
}

export default function ItemPageContent({ search }: ItemPageContentProps) {
  const { currentCategory } = useCategoryStore();
  const { isLoading } = useItemStore();

  const filteredItems = useMemo(() => {
    return currentCategory?.items?.filter((item) => item.name.toLowerCase().includes(search));
  }, [search, currentCategory]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!filteredItems?.length) {
    return <EmptyState message="The item list is empty. Try creating one!" />;
  }

  return (
    <div className="grid grid-cols-4 items-center gap-4">
      {filteredItems.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
