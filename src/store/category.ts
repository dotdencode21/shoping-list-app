import { Category } from "@/types/category";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CategoryStore {
  categories: Category[];
  addCategory: (payload: Category) => void;
  editCategory: (categoryId: string, payload: Partial<Category>) => void;
  removeCategory: (categoryId: string) => void;
}

export const useCategoryStore = create<CategoryStore>()(
  persist(
    (set, get) => ({
      categories: [],

      addCategory(payload) {
        set({ categories: [...get().categories, payload] });
      },

      editCategory(categoryId, payload) {
        set({
          categories: get().categories.map((category) =>
            category.id === categoryId ? { ...category, ...payload } : category,
          ),
        });
      },

      removeCategory(categoryId) {
        set({ categories: get().categories.filter((category) => category.id !== categoryId) });
      },
    }),
    {
      name: "categories",
      storage: createJSONStorage(() => localStorage),
      partialize: ({ categories }) => categories,
    },
  ),
);
