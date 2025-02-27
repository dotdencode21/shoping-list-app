import BaseModal from "../BaseModal";
import { RemoveButton } from "@/components/button";
import { useShoppingListStore } from "@/store/shoppingList";
import { ShoppingListItem } from "@/types/shopping-list";

interface RemoveModalProps {
  data: ShoppingListItem;
}

export default function RemoveModal({ data }: RemoveModalProps) {
  const { id: itemId, name } = data;

  const { removeItemById } = useShoppingListStore();

  const handleRemoveCategory = () => {
    removeItemById(itemId);
  };

  return (
    <BaseModal
      title="Remove category"
      submitButtonLabel="Remove"
      onSubmit={handleRemoveCategory}
      modalTrigger={<RemoveButton title="Remove" />}
    >
      <span className="text-slate-600">
        Do you really want to remove <span className="font-semibold text-slate-700">{name}</span> item?
      </span>
    </BaseModal>
  );
}
