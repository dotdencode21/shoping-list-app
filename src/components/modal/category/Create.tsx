import { useCategoryStore } from "@/store/category";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BaseModal from "../BaseModal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { AddButton } from "@/components/button";
import { toast } from "sonner";

export default function CreateCategoryModal() {
  const [category, setCategory] = useState("");
  const [emoji, setEmoji] = useState("");

  const { addCategory } = useCategoryStore();

  const handleEmojiPick = ({ imageUrl }: EmojiClickData) => {
    setEmoji(imageUrl);
  };

  const handleCreateCategory = () => {
    addCategory({ id: uuidv4(), name: category, emoji });
    setCategory("");
    setEmoji("");
    toast(`Category ${category} has been created!`, {
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };

  const isEmoji = emoji && !!emoji.length;

  return (
    <BaseModal
      title="Create category"
      submitButtonLabel="Create"
      onSubmit={handleCreateCategory}
      modalTrigger={<AddButton />}
      disableSubmitButton={!category.length}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Label htmlFor="category" className="text-base text-slate-800">
            Category
          </Label>
          <Input
            id="category"
            value={category}
            placeholder="e.g., Fruits, Dairy, Vegetables"
            className="placeholder:text-sm"
            onChange={(e) => setCategory(e.target.value)}
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
