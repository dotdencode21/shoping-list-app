import { useCategoryStore } from "@/store/category";
import BaseModal from "../BaseModal";
import { RemoveButton } from "@/components/button";
import { Category } from "@/types/category";

interface RemoveCategoryModalProps {
  value: Category;
}

export default function RemoveCategoryModal({ value }: RemoveCategoryModalProps) {
  const { id: categoryId, name } = value;

  const { removeCategory } = useCategoryStore();

  const handleRemoveCategory = () => {
    removeCategory(categoryId);
  };

  return (
    <BaseModal
      title="Remove category"
      submitButtonLabel="Remove"
      onSubmit={handleRemoveCategory}
      modalTrigger={<RemoveButton title="Remove" />}
    >
      <span className="text-slate-600">
        Are you really want to remove <span className="font-semibold text-slate-700">{name}</span> category?
      </span>
    </BaseModal>
  );
}
