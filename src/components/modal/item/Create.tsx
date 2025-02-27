import { useCategoryStore } from "@/store/category";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BaseModal from "../BaseModal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { AddButton } from "@/components/button";
import { useItemStore } from "@/store/item";

export default function CreateItemModal() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [emoji, setEmoji] = useState("");

  const { currentCategory, updateCurrentCategory } = useCategoryStore();
  const { items, createItem } = useItemStore();

  useEffect(() => {
    updateCurrentCategory(items);
  }, [items, updateCurrentCategory]);

  const handleEmojiPick = ({ imageUrl }: EmojiClickData) => {
    setEmoji(imageUrl);
  };

  const handleCreateItem = () => {
    createItem({
      id: uuidv4(),
      name: item,
      emoji,
      quantity,
      isPurchased: false,
      category: currentCategory?.name || "",
    });
    handleClearState();
  };

  const handleClearState = () => {
    setItem("");
    setEmoji("");
  };

  console.log(currentCategory);

  const isEmoji = emoji && !!emoji.length;

  return (
    <BaseModal
      title="Create item"
      submitButtonLabel="Create"
      onSubmit={handleCreateItem}
      modalTrigger={<AddButton />}
      disableSubmitButton={!item.length}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Label htmlFor="item" className="text-base text-slate-800">
            Item
          </Label>
          <Input
            id="item"
            value={item}
            placeholder="Item"
            className="placeholder:text-sm"
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="quantity" className="text-base text-slate-800">
            Quantity
          </Label>
          <Input
            id="quantity"
            value={quantity}
            placeholder="Quantity"
            className="placeholder:text-sm"
            onChange={(e) => setQuantity(e.target.value)}
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
