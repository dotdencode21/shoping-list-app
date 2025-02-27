import { delay } from "@/lib/utils";
import { Item } from "@/types/item";
import { BaseStoreState } from "@/types/store";
import { create } from "zustand";

interface ItemStore extends BaseStoreState {
  items: Item[];

  createItem: (payload: Item) => void;
  editItemById: (itemId: string, payload: Partial<Item>) => void;
  removeItemById: (itemId: string) => void;
}

export const useItemStore = create<ItemStore>()((set, get) => ({
  items: [],
  isLoading: false,

  async triggerLoading() {
    set({ isLoading: true });
    await delay();
    set({ isLoading: false });
  },

  createItem(payload) {
    try {
      get().triggerLoading();

      const items = [...get().items, payload];
      set({ items });
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  editItemById(itemId, payload) {
    try {
      get().triggerLoading();

      const items = get().items.map((item) => (item.id === itemId ? { ...item, ...payload } : item));
      set({ items });
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
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
}));
