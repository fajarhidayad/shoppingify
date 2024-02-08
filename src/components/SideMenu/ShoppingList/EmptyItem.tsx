import ShoppingCartImg from '@/assets/undraw_shopping_app_flsj 1.svg';

export default function EmptyItem() {
  return (
    <div className="relative flex-1 flex items-center justify-center">
      <p className="font-bold text-[20px] -translate-y-20">No item</p>
      <img
        src={ShoppingCartImg}
        alt="shopping-cart-img"
        className="absolute bottom-0 z-50 translate-y-3"
      />
    </div>
  );
}
