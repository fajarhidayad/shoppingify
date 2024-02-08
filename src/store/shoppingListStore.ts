import { ShopItem } from '@/types';
import { create } from 'zustand';

interface ShoppingListState {
  itemList: ShopItem[];
  addItem: (item: ShopItem) => void;
  addQuantity: (id: number) => void;
  reduceQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  toggleItem: (id: number) => void;
}

export const useShoppingListStore = create<ShoppingListState>()((set) => ({
  itemList: [
    {
      id: 1,
      name: 'Avocado',
      isActive: false,
      quantity: 2,
      category: 'Fruit and vegetables',
    },
  ],
  addQuantity: (id) =>
    set((state) => ({
      itemList: state.itemList.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity++ } : item
      ),
    })),
  reduceQuantity: (id) =>
    set((state) => ({
      itemList: state.itemList.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity-- } : item
      ),
    })),
  addItem: (newItem) =>
    set((state) => ({ itemList: [...state.itemList, newItem] })),
  removeItem: (id) =>
    set((state) => ({
      itemList: state.itemList.filter((item) => item.id !== id),
    })),
  toggleItem: (id) =>
    set((state) => ({
      itemList: state.itemList.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      ),
    })),
}));
