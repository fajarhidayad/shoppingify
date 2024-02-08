import type { Category } from '@/types';
import { create } from 'zustand';

interface Item {
  id: number;
  name: string;
  note?: string;
  imageUrl?: string;
  category: Category;
}

interface ItemState {
  items: Item[];
  addNewItem: (newItem: Item) => void;
  deleteItem: (id: number) => void;
}

export const useItemStore = create<ItemState>()((set) => ({
  items: [
    {
      id: 1,
      name: 'Avocado',
      category: 'Fruit and vegetables',
    },
    {
      id: 2,
      name: 'Banana',
      category: 'Fruit and vegetables',
    },
    {
      id: 3,
      name: 'Chicken fillet',
      category: 'Meat and fish',
    },
    {
      id: 4,
      name: 'Salmon',
      category: 'Meat and fish',
    },
    {
      id: 5,
      name: 'Green Tea',
      category: 'Beverages',
    },
  ],
  addNewItem: (newItem) =>
    set((state) => ({ items: [...state.items, newItem] })),
  deleteItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}));
