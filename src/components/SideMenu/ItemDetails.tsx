import { useSideMenuStore } from '@/store/sideMenuStore';
import BackButton from '../BackButton';

const ItemDetails = () => {
  const setActiveMenu = useSideMenuStore((state) => state.setActiveMenu);

  return (
    <aside className="bg-white w-[389px] py-8 px-10 hidden lg:flex flex-col">
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

export default ItemDetails;
