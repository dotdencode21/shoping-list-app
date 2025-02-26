import { Item } from "./item";

export interface Category {
  id: string;
  name: string;
  emoji?: string;
  items?: Item[];
}
