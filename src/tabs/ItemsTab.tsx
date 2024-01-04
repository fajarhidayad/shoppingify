import React from 'react';
import { SearchIcon, PlusIcon } from 'lucide-react';
import { useSideMenuStore } from '@/store/sideMenuStore';

export default function ItemsTab() {
  return (
    <>
      <div className="flex items-start justify-between gap-x-14 mb-9">
        <h1 className="text-[26px]">
          <span className="text-primary font-bold">Shoppingify</span> allows you
          take your shopping list wherever you go
        </h1>
        <div className="flex rounded-xl shadow-md w-[275px] bg-white p-4 gap-x-5">
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
      </div>

      <CategorySection title="Fruit and vegetables">
        <ShoppingItem name="Avocado" />
        <ShoppingItem name="Banana" />
        <ShoppingItem name="Bunch of carrots 5pcs" />
        <ShoppingItem name="Chicken 1kg" />
        <ShoppingItem name="Pre-cooked corn 450g" />
      </CategorySection>
      <CategorySection title="Meat and Fish">
        <ShoppingItem name="Chicken leg box" />
        <ShoppingItem name="Salmon 1kg" />
        <ShoppingItem name="Steak 2kg" />
        <ShoppingItem name="Rib eye 1kg" />
      </CategorySection>
      <CategorySection title="Beverages">
        <ShoppingItem name="Chicken leg box" />
        <ShoppingItem name="Salmon 1kg" />
        <ShoppingItem name="Steak 2kg" />
        <ShoppingItem name="Rib eye 1kg" />
      </CategorySection>
      <CategorySection title="Pets">
        <ShoppingItem name="Chicken leg box" />
        <ShoppingItem name="Salmon 1kg" />
        <ShoppingItem name="Steak 2kg" />
        <ShoppingItem name="Rib eye 1kg" />
      </CategorySection>
    </>
  );
}

const CategorySection = (props: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-11 last:mb-0">
      <h3 className="text-lg mb-[18px]">{props.title}</h3>
      <ul className="grid grid-cols-4 gap-x-5 gap-y-7">{props.children}</ul>
    </div>
  );
};

const ShoppingItem = (props: { name: string }) => {
  const setActiveMenu = useSideMenuStore((state) => state.setActiveMenu);

  const handleItemClick = () => {
    setActiveMenu('ItemDetails');
  };

  const handleAddItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    console.log('button');
  };

  return (
    <li
      onClick={handleItemClick}
      className="bg-white rounded-xl flex items-start justify-between px-4 py-3 shadow self-start gap-x-1 cursor-pointer"
    >
      <span>{props.name}</span>
      <button onClick={handleAddItem} className="">
        <PlusIcon color="#C1C1C4" />
      </button>
    </li>
  );
};
