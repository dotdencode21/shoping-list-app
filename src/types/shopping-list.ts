export interface ShoppingListItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  isPurchased: boolean;
  emoji?: string;
}
