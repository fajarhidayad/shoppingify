import { useShoppingListStore } from '@/store/shoppingListStore';
import { PencilIcon } from 'lucide-react';
import ShoppingListHeader from './ShoppingListHeader';
import ShoppingItem from './ShoppingItem';
import EmptyItem from './EmptyItem';
import ShoppingListNameInput from './ShoppingListNameInput';

export default function ShoppingList() {
  const { itemList } = useShoppingListStore();

  return (
    <aside className="bg-[#FFF0DE] w-[389px] pt-11 hidden md:flex flex-col">
      <ShoppingListHeader />

      <div className="px-12 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold">Shopping list</h2>
          <button>
            <PencilIcon size={24} />
          </button>
        </div>

        {itemList.length > 0 ? (
          <div className="mb-12">
            <h4 className="text-sm text-gray-600 mb-5">Fruit and vegetables</h4>
            <ul className="flex flex-col gap-y-6">
              {itemList.map((item) => (
                <ShoppingItem key={item.id} item={item} />
              ))}
            </ul>
          </div>
        ) : (
          <EmptyItem />
        )}
      </div>

      <ShoppingListNameInput />
    </aside>
  );
}
