import { Heading, SearchInput } from "@/components/common";
import { CreateCategoryModal } from "@/components/modal/category";
import { ClipboardList } from "lucide-react";
import { useState } from "react";
import CategoryPageContent from "./Content";
import { PageWrapper } from "@/components/layout";

export default function CategoryPage() {
  const [search, setSearch] = useState("");

  return (
    <PageWrapper>
      <Heading
        title="Categories"
        icon={<ClipboardList className="text-neutral-100" />}
        content={<CreateCategoryModal />}
      />
      <SearchInput
        value={search}
        placeholder="Search for categories"
        onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
      />
      <CategoryPageContent search={search} />
    </PageWrapper>
  );
}
