import { delay } from "@/lib/utils";
import { Category } from "@/types/category";
import { BaseStoreState } from "@/types/store";
import { create } from "zustand";

const CATEGORY_KEY = "categories";

interface CategoryStore extends BaseStoreState {
  categories: Category[];

  addCategory: (payload: Category) => void;
  editCategory: (categoryId: string, payload: Partial<Category>) => void;
  removeCategory: (categoryId: string) => void;
}

export const useCategoryStore = create<CategoryStore>()((set, get) => ({
  categories: JSON.parse(localStorage.getItem(CATEGORY_KEY) || "[]"),
  isLoading: false,

  saveToLocalStorage() {
    localStorage.setItem(CATEGORY_KEY, JSON.stringify(get().categories));
  },

  async triggerLoading() {
    set({ isLoading: true });
    await delay();
    set({ isLoading: false });
  },

  addCategory(payload) {
    try {
      get().triggerLoading();

      set({ categories: [...get().categories, payload] });

      get().saveToLocalStorage();
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  editCategory(categoryId, payload) {
    try {
      get().triggerLoading();

      set({
        categories: get().categories.map((category) =>
          category.id === categoryId ? { ...category, ...payload } : category,
        ),
      });

      get().saveToLocalStorage();
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  removeCategory(categoryId) {
    try {
      get().triggerLoading();

      set({ categories: get().categories.filter((category) => category.id !== categoryId) });

      get().saveToLocalStorage();
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
}));
