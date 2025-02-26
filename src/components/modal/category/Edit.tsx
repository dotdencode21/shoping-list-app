import { useCategoryStore } from "@/store/category";
import { useState } from "react";
import BaseModal from "../BaseModal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { Category } from "@/types/category";
import { EditButton } from "@/components/button";

interface EditCategoryModalProps {
  value: Category;
}

export default function EditCategoryModal({ value }: EditCategoryModalProps) {
  const { id: categoryId, name, emoji: categoryEmoji } = value;

  const [category, setCategory] = useState(name);
  const [emoji, setEmoji] = useState(categoryEmoji);

  const { editCategory } = useCategoryStore();

  const handleEmojiPick = ({ imageUrl }: EmojiClickData) => {
    setEmoji(imageUrl);
  };

  const handleRemoveEmoji = () => setEmoji("");

  const handleUpdateCategory = () => {
    editCategory(categoryId, { ...value, name: category, emoji });
  };

  const isEmoji = emoji && !!emoji.length;

  return (
    <BaseModal
      title="Edit category"
      submitButtonLabel="Edit"
      onSubmit={handleUpdateCategory}
      modalTrigger={<EditButton title="Edit" />}
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
            <img src={emoji} className="size-12" onDoubleClick={handleRemoveEmoji} />
          ) : (
            <EmojiPicker onEmojiClick={handleEmojiPick} lazyLoadEmojis searchDisabled />
          )}
        </div>
      </div>
    </BaseModal>
  );
}
