import { delay } from "@/lib/utils";
import { Category } from "@/types/category";
import { Item } from "@/types/item";
import { BaseStoreState } from "@/types/store";
import { create } from "zustand";

const CATEGORY_KEY = "categories";
const CURRENT_CATEGORY_KEY = "currentCategory";

interface CategoryStore extends BaseStoreState {
  categories: Category[];
  currentCategory: Category | null;

  getCategoryById: (categoryId: string) => void;
  createCategory: (payload: Category) => void;
  editCategoryById: (categoryId: string, payload: Partial<Category>) => void;
  removeCategoryById: (categoryId: string) => void;
  updateCurrentCategory: (payload: Item[]) => void;
}

export const useCategoryStore = create<CategoryStore>()((set, get) => ({
  categories: JSON.parse(localStorage.getItem(CATEGORY_KEY) || "[]"),
  currentCategory: JSON.parse(localStorage.getItem(CURRENT_CATEGORY_KEY) || "null"),
  isLoading: false,

  saveToLocalStorage(key = CATEGORY_KEY, value = get().categories) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  async triggerLoading() {
    set({ isLoading: true });
    await delay();
    set({ isLoading: false });
  },

  getCategoryById(categoryId) {
    try {
      const foundCategory = get().categories.find((category) => category.id === categoryId) as Category;
      const currentCategory = { ...foundCategory, items: [] };
      set({ currentCategory });

      get().saveToLocalStorage?.(CURRENT_CATEGORY_KEY, get().currentCategory);
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  createCategory(payload) {
    try {
      get().triggerLoading();

      const categories = [...get().categories, payload];
      set({ categories });

      get().saveToLocalStorage?.();
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  editCategoryById(categoryId, payload) {
    try {
      get().triggerLoading();

      const categories = get().categories.map((category) =>
        category.id === categoryId ? { ...category, ...payload } : category,
      );
      set({ categories });

      get().saveToLocalStorage?.();
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  removeCategoryById(categoryId) {
    try {
      get().triggerLoading();

      const categories = get().categories.filter((category) => category.id !== categoryId);
      set({ categories });

      get().saveToLocalStorage?.();
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  updateCurrentCategory(payload) {
    try {
      const currentCategory = get().currentCategory;
      if (!currentCategory) {
        throw new Error("Current category is not properly initialized");
      }

      const items = [...(currentCategory.items as Item[]), ...payload];

      set({
        currentCategory: {
          ...currentCategory,
          items,
        },
      });

      get().saveToLocalStorage?.(CURRENT_CATEGORY_KEY, get().currentCategory);
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
}));
