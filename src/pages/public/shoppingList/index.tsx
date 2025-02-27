import { Heading, SearchInput } from "@/components/common";
import { CreateModal } from "@/components/modal/action";
import { ClipboardList } from "lucide-react";
import { useState } from "react";
import { PageWrapper } from "@/components/layout";
import ShoppingListPageContent from "./Content";
import { BaseCheckbox } from "@/components/common/Checkbox";

export default function ShoppingListPage() {
  const [search, setSearch] = useState("");
  const [showOnlyPurchased, setShowOnlyPurchased] = useState(false);

  return (
    <PageWrapper>
      <Heading title="Shopping list" icon={<ClipboardList className="text-neutral-100" />} content={<CreateModal />} />
      <div className="grid grid-cols-[450px_1fr] gap-x-4">
        <SearchInput
          value={search}
          placeholder="Search for items"
          onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
        />
        <BaseCheckbox
          id="purchased-items"
          checked={showOnlyPurchased}
          onChange={setShowOnlyPurchased}
          label="Show only purchased"
        />
      </div>
      <ShoppingListPageContent search={search} showOnlyPurchased={showOnlyPurchased} />
    </PageWrapper>
  );
}
