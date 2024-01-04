import BottleImg from '@/assets/source.svg';
import { useSideMenuStore } from '@/store/sideMenuStore';
import { XIcon, PencilIcon } from 'lucide-react';
import { useState } from 'react';
import BackButton from './BackButton';

export default function SideMenu() {
  const { activeMenu, setActiveMenu } = useSideMenuStore();

  if (activeMenu === 'ItemForm')
    return <NewItemForm setFormInactive={() => setActiveMenu('ShopList')} />;
  else if (activeMenu === 'ItemDetails') return <ItemDetails />;
  return <ShopList setFormActive={() => setActiveMenu('ItemForm')} />;
}

const ShopList = (props: { setFormActive: () => void }) => {
  return (
    <aside className="bg-[#FFF0DE] w-[389px] pt-11 flex flex-col">
      <div className="bg-[#80485B] rounded-3xl flex items-center gap-x-7 mb-11 mx-12">
        <img src={BottleImg} alt="Bottle Icon" className="-translate-y-5" />
        <div className="py-[18px]">
          <h3 className="text-white mb-3">Didn't find what you need?</h3>
          <button
            onClick={props.setFormActive}
            className="bg-white rounded-xl py-3 px-7 font-bold text-sm"
          >
            Add item
          </button>
        </div>
      </div>

      <div className="px-12">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold">Shopping list</h2>
          <button>
            <PencilIcon size={24} />
          </button>
        </div>

        <div className="mb-12">
          <h4 className="text-sm text-gray-600 mb-5">Fruit and vegetables</h4>
          <ul className="flex flex-col gap-y-6">
            <li className="flex items-center justify-between">
              <span className="text-lg">Avocado</span>
              <button className="border-2 border-primary rounded-full px-5 py-2 text-primary text-xs">
                3 pcs
              </button>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-lg">Pre-cooked corn 450g</span>
              <button className="border-2 border-primary rounded-full px-5 py-2 text-primary text-xs">
                3 pcs
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-auto bg-white px-10 py-8">
        <div className="border-2 border-primary rounded-xl flex">
          <input
            type="text"
            className="focus:outline-none bg-transparent px-4 py-5 text-sm flex-1"
            placeholder="Enter a name"
          />
          <button className="text-white bg-primary rounded-lg px-6">
            Save
          </button>
        </div>
      </div>
    </aside>
  );
};

// type Category = 'fruit and vegetables' | 'meat and fish' | 'beverages';

const NewItemForm = (props: { setFormInactive: () => void }) => {
  const [category, setCategory] = useState('');
  return (
    <aside className="w-[389px] py-8 px-10 flex flex-col">
      <h2 className="text-2xl mb-8">Add a new item</h2>

      <div className="mb-[18px] flex flex-col group">
        <label
          htmlFor="name"
          className="mb-1.5 text-sm group-focus-within:text-primary"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter a name"
          className="border-2 border-gray-300 px-4 py-5 rounded-xl text-sm focus:border-primary focus:outline-none"
        />
      </div>
      <div className="mb-[18px] flex flex-col group">
        <label
          htmlFor="note"
          className="mb-1.5 text-sm group-focus-within:text-primary"
        >
          Note (optional)
        </label>
        <textarea
          id="note"
          placeholder="Enter a note"
          className="border-2 border-gray-300 px-4 py-5 rounded-xl text-sm focus:border-primary focus:outline-none"
        />
      </div>
      <div className="mb-[18px] flex flex-col group">
        <label
          htmlFor="image"
          className="mb-1.5 text-sm group-focus-within:text-primary"
        >
          Image (optional)
        </label>
        <input
          type="text"
          id="image"
          placeholder="Enter a url"
          className="border-2 border-gray-300 px-4 py-5 rounded-xl text-sm focus:border-primary focus:outline-none"
        />
      </div>
      <div className="mb-[18px] flex flex-col group">
        <label
          htmlFor="category"
          className="mb-1.5 text-sm group-focus-within:text-primary"
        >
          Category
        </label>
        <div className="flex justify-between gap-x-1 border-2 border-gray-300 px-4 py-5 rounded-xl text-sm focus-within:border-primary">
          <input
            type="text"
            id="category"
            placeholder="Enter a category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-transparent flex-1 focus:outline-none"
          />
          <button className="text-gray-500" onClick={() => setCategory('')}>
            <XIcon />
          </button>
        </div>
      </div>

      <div className="mt-auto flex justify-center items-center gap-x-10">
        <button className="font-bold" onClick={props.setFormInactive}>
          cancel
        </button>
        <button className="bg-primary rounded-xl text-white px-6 py-5 font-bold">
          Save
        </button>
      </div>
    </aside>
  );
};

const ItemDetails = () => {
  const setActiveMenu = useSideMenuStore((state) => state.setActiveMenu);

  return (
    <aside className="bg-white w-[389px] py-8 px-10 flex flex-col">
      <BackButton onClick={() => setActiveMenu('ShopList')} className="mb-8" />

      <div className="h-56 bg-gray-200 rounded-3xl mb-14"></div>

      <div className="mb-8">
        <p className="mb-3 text-xs text-gray-400">name</p>
        <h3 className="text-2xl">Avocado</h3>
      </div>
      <div className="mb-9">
        <p className="mb-3 text-xs text-gray-400">category</p>
        <h3 className="text-lg">Fruit and vegetables</h3>
      </div>
      <div className="mb-8">
        <p className="mb-3 text-xs text-gray-400">note</p>
        <h3 className="text-lg">
          Nutrient-dense foods are those that provide substantial amounts of
          vitamins, minerals and other nutrients with relatively few calories.
          One-third of a medium avocado (50 g) has 80 calories and contributes
          nearly 20 vitamins and minerals, making it a great nutrient-dense food
          choice.{' '}
        </h3>
      </div>

      <div className="mt-auto flex items-center justify-center gap-x-11 pt-2">
        <button className="font-bold">delete</button>
        <button className="font-bold text-white bg-primary rounded-xl px-6 py-5">
          Add to list
        </button>
      </div>
    </aside>
  );
};
