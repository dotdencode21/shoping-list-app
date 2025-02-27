import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BaseModal from "../BaseModal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { AddButton } from "@/components/button";
import { useShoppingListStore } from "@/store/shoppingList";

const DEFAULT_STATE = {
  name: "",
  category: "",
  quantity: 0,
};

export default function CreateModal() {
  const [values, setValues] = useState(DEFAULT_STATE);
  const [emoji, setEmoji] = useState("");

  const { createItem } = useShoppingListStore();

  const handleChange = ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmojiPick = ({ imageUrl }: EmojiClickData) => {
    setEmoji(imageUrl);
  };

  const handleCreateCategory = () => {
    createItem({ id: uuidv4(), ...values, isPurchased: false, emoji });
    handleClearState();
  };

  const handleClearState = () => {
    setValues(DEFAULT_STATE);
    setEmoji("");
  };

  const isEmoji = emoji && !!emoji.length;

  return (
    <BaseModal
      title="Create category"
      submitButtonLabel="Create"
      onSubmit={handleCreateCategory}
      modalTrigger={<AddButton />}
      // disableSubmitButton={!category.length}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
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
        <div className="flex items-center gap-4">
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
        <div className="flex items-center gap-4">
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
            inputMode="numeric"
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
