import BottleImg from '@/assets/source.svg';
import { useSideMenuStore } from '@/store/sideMenuStore';

export default function ShoppingListHeader() {
  const { setActiveMenu } = useSideMenuStore();

  return (
    <div className="bg-[#80485B] rounded-3xl flex items-center gap-x-7 mb-11 mx-12">
      <img src={BottleImg} alt="Bottle Icon" className="-translate-y-5" />
      <div className="py-[18px]">
        <h3 className="text-white mb-3">Didn't find what you need?</h3>
        <button
          onClick={() => setActiveMenu('ItemForm')}
          className="bg-white rounded-xl py-3 px-7 font-bold text-sm"
        >
          Add item
        </button>
      </div>
    </div>
  );
}
