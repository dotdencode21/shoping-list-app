import { CategoryCard } from "@/components/card";
import { Spinner } from "@/components/common";
import EmptyState from "@/components/common/EmptyState";
import { useCategoryStore } from "@/store/category";
import { useMemo } from "react";

interface CategoryPageContentProps {
  search: string;
}

export default function CategoryPageContent({ search }: CategoryPageContentProps) {
  const { categories, isLoading } = useCategoryStore();

  const filteredCategories = useMemo(() => {
    return categories.filter((category) => category.name.toLowerCase().includes(search));
  }, [search, categories]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!filteredCategories.length) {
    return <EmptyState message="The category list is empty. Try creating one!" />;
  }

  return (
    <div className="grid grid-cols-4 items-center gap-4">
      {filteredCategories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
