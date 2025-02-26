import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddButton from "../button/Add";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { useState } from "react";
import { useCategoryStore } from "@/store/category";
import { v4 as uuidv4 } from "uuid";

export default function CreateCategoryModal() {
  const [category, setCategory] = useState("");
  const [emoji, setEmoji] = useState<string>("");

  const { addCategory } = useCategoryStore();

  const handleEmojiPick = ({ imageUrl }: EmojiClickData) => {
    setEmoji(imageUrl);
  };

  const handleRemoveEmoji = () => setEmoji("");

  const handleCreateCategory = () => {
    addCategory({ id: uuidv4(), name: category, emoji });
    setCategory("");
    handleRemoveEmoji();
  };

  const isEmoji = emoji && !!emoji.length;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <AddButton />
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-4 bg-neutral-100">
        <DialogHeader>
          <DialogTitle className="text-2xl text-slate-800">Create category</DialogTitle>
        </DialogHeader>
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
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleCreateCategory} className="bg-purple-600 text-base text-neutral-100">
              Create
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
