import { Heading } from "@/components/common";
import { CategoryCard } from "@/components/common/card";
import Spinner from "@/components/common/Spinner";
import { CreateCategoryModal } from "@/components/modal/category";
import { useCategoryStore } from "@/store/category";
import { ClipboardList } from "lucide-react";

export default function CategoryPage() {
  const { categories, isLoading } = useCategoryStore();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex w-full flex-col gap-8 pt-[12rem]">
      <Heading title="Categories" icon={<ClipboardList className="text-neutral-100" />} />
      <div className="grid grid-cols-4 items-center gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
        <CreateCategoryModal />
      </div>
    </div>
  );
}
