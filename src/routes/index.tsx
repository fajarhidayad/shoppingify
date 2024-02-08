import { useShoppingListStore } from '@/store/shoppingListStore';
import { useSideMenuStore } from '@/store/sideMenuStore';
import { createFileRoute } from '@tanstack/react-router';
import { PlusIcon, SearchIcon } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <header className="hidden md:flex items-start justify-between gap-x-14 mb-9">
        <h1 className="text-[26px]">
          <span className="text-primary font-bold">Shoppingify</span> allows you
          take your shopping list wherever you go
        </h1>
        <SearchInput />
      </header>

      <CategorySection title="Fruit and vegetables">
        <ShoppingItem name="Avocado" />
        <ShoppingItem name="Banana" />
        <ShoppingItem name="Bunch of carrots" />
        <ShoppingItem name="Chicken 1kg" />
        <ShoppingItem name="Pre-cooked corn 450g" />
      </CategorySection>
    </>
  );
}

const CategorySection = (props: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-7 md:mb-11 last:mb-0">
      <h3 className="text-lg mb-[18px]">{props.title}</h3>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-5 gap-y-6 md:gap-y-7">
        {props.children}
      </ul>
    </div>
  );
};

const ShoppingItem = (props: { name: string }) => {
  const setActiveMenu = useSideMenuStore((state) => state.setActiveMenu);
  const { addItem } = useShoppingListStore();

  const handleItemClick = () => {
    setActiveMenu('ItemDetails');
  };

  const handleAddItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    addItem({
      id: 1,
      name: props.name,
      category: 'Fruit and vegetables',
      isActive: false,
      quantity: 1,
    });
  };

  return (
    <li
      onClick={handleItemClick}
      className="bg-white rounded-xl flex items-start justify-between px-4 py-3 shadow self-start gap-x-1 cursor-pointer"
    >
      <span className="text-sm lg:text-base">{props.name}</span>
      <button onClick={handleAddItem}>
        <PlusIcon color="#C1C1C4" />
      </button>
    </li>
  );
};

function SearchInput() {
  return (
    <div className="flex rounded-xl shadow-md w-[275px] bg-white p-4 gap-x-5 focus-within:ring focus-within:ring-primary transition-all duration-200">
      <label htmlFor="search">
        <SearchIcon size={26} />
      </label>
      <input
        type="text"
        id="search"
        className="focus:outline-none flex-1"
        placeholder="search item"
      />
    </div>
  );
}
