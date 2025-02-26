import { Heading } from "@/components/common";
import { CreateCategoryModal } from "@/components/modal";
import { ClipboardList } from "lucide-react";

export default function CategoryPage() {
  return (
    <div className="flex w-full flex-col gap-8">
      <Heading title="Categories" icon={<ClipboardList className="text-neutral-100" />} />
      <CreateCategoryModal />
    </div>
  );
}
