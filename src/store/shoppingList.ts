import { delay } from "@/lib/utils";
import { ShoppingListItem } from "@/types/shopping-list";
import { BaseStoreState } from "@/types/store";
import { create } from "zustand";

const SHOPPING_LIST_ITEMS_KEY = "shoppingListItem";

interface ShoppingListStore extends BaseStoreState {
  items: ShoppingListItem[];

  createItem: (payload: ShoppingListItem) => void;
  updateItemById: (itemId: string, payload: Partial<ShoppingListItem>) => void;
  removeItemById: (itemId: string) => void;
}

export const useShoppingListStore = create<ShoppingListStore>()((set, get) => ({
  items: JSON.parse(localStorage.getItem(SHOPPING_LIST_ITEMS_KEY) || "[]"),
  isLoading: false,

  async triggerLoading() {
    set({ isLoading: true });
    await delay();
    set({ isLoading: false });
  },

  saveToLocalStorage() {
    const items = get().items;
    localStorage.setItem(SHOPPING_LIST_ITEMS_KEY, JSON.stringify(items));
  },

  createItem(payload) {
    try {
      get().triggerLoading();

      const items = [...get().items, payload];
      set({ items });

      get().saveToLocalStorage?.();
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  updateItemById(itemId, payload) {
    try {
      get().triggerLoading();

      const items = get().items.map((item) => (item.id === itemId ? { ...item, ...payload } : item));
      set({ items });

      get().saveToLocalStorage?.();
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  removeItemById(itemId) {
    try {
      get().triggerLoading();

      const items = get().items.filter((item) => item.id !== itemId);
      set({ items });

      get().saveToLocalStorage?.();
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
}));
