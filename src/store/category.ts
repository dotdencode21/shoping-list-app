import { delay } from "@/lib/utils";
import { Category } from "@/types/category";
import { BaseStoreState } from "@/types/store";
import { create } from "zustand";

const CATEGORY_KEY = "categories";

interface CategoryStore extends BaseStoreState {
  categories: Category[];

  addCategory: (payload: Category) => Promise<void>;
  editCategory: (categoryId: string, payload: Partial<Category>) => Promise<void>;
  removeCategory: (categoryId: string) => Promise<void>;
}

export const useCategoryStore = create<CategoryStore>()((set, get) => ({
  categories: JSON.parse(localStorage.getItem(CATEGORY_KEY) || "[]"),
  isLoading: false,

  saveToLocalStorage() {
    localStorage.setItem(CATEGORY_KEY, JSON.stringify(get().categories));
  },

  async addCategory(payload) {
    set({ isLoading: true });
    await delay();
    set({ isLoading: false });

    set({ categories: [...get().categories, payload] });

    get().saveToLocalStorage();
  },

  async editCategory(categoryId, payload) {
    set({ isLoading: true });
    await delay();
    set({ isLoading: false });

    set({
      categories: get().categories.map((category) =>
        category.id === categoryId ? { ...category, ...payload } : category,
      ),
    });

    get().saveToLocalStorage();
  },

  async removeCategory(categoryId) {
    set({ isLoading: true });
    await delay();
    set({ isLoading: false });

    set({ categories: get().categories.filter((category) => category.id !== categoryId) });

    get().saveToLocalStorage();
  },
}));
