import { Heading, SearchInput } from "@/components/common";
import { CreateModal } from "@/components/modal/action";
import { ClipboardList } from "lucide-react";
import { useState } from "react";
import { PageWrapper } from "@/components/layout";
import ShoppingListPageContent from "./Content";

export default function ShoppingListPage() {
  const [search, setSearch] = useState("");

  return (
    <PageWrapper>
      <Heading title="Shopping list" icon={<ClipboardList className="text-neutral-100" />} content={<CreateModal />} />
      <SearchInput
        value={search}
        placeholder="Search for items"
        onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
      />
      <ShoppingListPageContent search={search} />
    </PageWrapper>
  );
}
