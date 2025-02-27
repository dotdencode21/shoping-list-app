import { Heading, SearchInput } from "@/components/common";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { PageWrapper } from "@/components/layout";
import { useNavigate, useParams } from "react-router";
import { useLocation } from "react-router";
import ItemPageContent from "./Content";
import { useCategoryStore } from "@/store/category";
import { CreateItemModal } from "@/components/modal/item";

export default function ItemPage() {
  const [search, setSearch] = useState("");

  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const { getCategoryById } = useCategoryStore();

  const { categoryId } = location.state as { categoryId: string };
  const title = `Items in the category: ${category}`;

  useEffect(() => {
    getCategoryById(categoryId);
  }, [categoryId, getCategoryById]);

  return (
    <PageWrapper>
      <Heading
        title={title}
        icon={<ArrowLeft className="cursor-pointer text-neutral-100" onClick={() => navigate("/")} />}
        content={<CreateItemModal />}
      />
      <SearchInput
        value={search}
        placeholder="Search for items"
        onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
      />
      <ItemPageContent search={search} />
    </PageWrapper>
  );
}
