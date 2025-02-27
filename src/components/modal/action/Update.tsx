import { ChangeEvent, useState } from "react";
import BaseModal from "../BaseModal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { EditButton } from "@/components/button";
import { useShoppingListStore } from "@/store/shoppingList";
import { ShoppingListItem } from "@/types/shopping-list";

interface UpdateModalProps {
  data: ShoppingListItem;
}

export default function UpdateModal({ data }: UpdateModalProps) {
  const { id: itemId, name, category, quantity, emoji: itemEmoji } = data;

  const [values, setValues] = useState({
    name,
    category,
    quantity,
  });
  const [emoji, setEmoji] = useState(itemEmoji);

  const { updateItemById } = useShoppingListStore();

  const handleChange = ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
    const isQuantityField = name === "quantity";
    const pattern = /^\d*$/;

    let validatedQuantity = values.quantity;

    if (isQuantityField) {
      if (pattern.test(value)) {
        validatedQuantity = value;
      }
    }

    setValues((prev) => ({ ...prev, [name]: isQuantityField ? validatedQuantity : value }));
  };

  const handleEmojiPick = ({ imageUrl }: EmojiClickData) => {
    setEmoji(imageUrl);
  };

  const handleCreateCategory = () => {
    updateItemById(itemId, { ...data, ...values, emoji });
  };

  const isEmoji = emoji && !!emoji.length;
  const disableSubmitButton = !Object.values(values).every((item) => !!item.length);

  return (
    <BaseModal
      title="Create category"
      submitButtonLabel="Create"
      onSubmit={handleCreateCategory}
      modalTrigger={<EditButton title="Update" />}
      disableSubmitButton={disableSubmitButton}
    >
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[100px_1fr] items-center gap-4">
          <Label htmlFor="name" className="text-base text-slate-800">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            value={values.name}
            placeholder="Name"
            className="placeholder:text-sm"
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-[100px_1fr] items-center gap-4">
          <Label htmlFor="category" className="text-base text-slate-800">
            Category
          </Label>
          <Input
            id="category"
            name="category"
            value={values.category}
            placeholder="Category"
            className="placeholder:text-sm"
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-[100px_1fr] items-center gap-4">
          <Label htmlFor="quantity" className="text-base text-slate-800">
            Quantity
          </Label>
          <Input
            id="quantity"
            name="quantity"
            value={values.quantity}
            placeholder="Quantity"
            className="placeholder:text-sm"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-4">
          <Label className="text-left text-base text-nowrap text-slate-800">
            Emoji <span className="text-xs text-slate-500">(optional)</span>
          </Label>
          {isEmoji ? (
            <img src={emoji} className="size-12" onDoubleClick={() => setEmoji("")} />
          ) : (
            <EmojiPicker onEmojiClick={handleEmojiPick} lazyLoadEmojis searchDisabled />
          )}
        </div>
      </div>
    </BaseModal>
  );
}
