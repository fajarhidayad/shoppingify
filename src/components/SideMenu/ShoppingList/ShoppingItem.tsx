import { ShopItem } from '@/types';

export default function ShoppingItem({ item }: { item: ShopItem }) {
  return (
    <li key={item.id} className="flex items-center justify-between">
      <span className="text-lg">{item.name}</span>
      <button className="border-2 border-primary rounded-full px-5 py-2 text-primary text-xs">
        {item.quantity} pcs
      </button>
    </li>
  );
}
