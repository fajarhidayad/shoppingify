import Logo from '@/assets/logo.svg';
import { useShoppingListStore } from '@/store/shoppingListStore';
import { Link } from '@tanstack/react-router';
import {
  BarChart2Icon,
  HistoryIcon,
  ListIcon,
  ShoppingCartIcon,
} from 'lucide-react';
import NavButton from './NavButton';
import ActiveBorder from './ActiveBorder';

export default function SideNav() {
  const itemList = useShoppingListStore((state) => state.itemList);

  return (
    <nav className="py-[34px] bg-white flex flex-col justify-between items-center">
      <img src={Logo} alt="Shoppingify Logo" />

      <div className="flex flex-col gap-12">
        <NavButton name="items">
          <Link
            to="/"
            className="group relative px-6 h-11 flex items-center justify-center hover:ch"
          >
            {({ isActive }) => (
              <>
                <ActiveBorder active={isActive} />
                <ListIcon />
              </>
            )}
          </Link>
        </NavButton>
        <NavButton name="history">
          <Link
            to="/history"
            className="group relative px-6 h-11 flex items-center justify-center hover:ch"
          >
            {({ isActive }) => (
              <>
                <ActiveBorder active={isActive} />
                <HistoryIcon />
              </>
            )}
          </Link>
        </NavButton>
        <NavButton name="statistics">
          <Link
            to="/statistics"
            className="group relative px-6 h-11 flex items-center justify-center hover:ch"
          >
            {({ isActive }) => (
              <>
                <ActiveBorder active={isActive} />
                <BarChart2Icon />
              </>
            )}
          </Link>
        </NavButton>
      </div>

      <CartButton label={itemList.length} />
    </nav>
  );
}

function CartButton(props: { label: string | number }) {
  return (
    <button className="relative w-[42px] h-[42px] rounded-full bg-primary text-white flex items-center justify-center">
      <ShoppingCartIcon />
      <span className="absolute w-5 h-5 text-xs rounded bg-[#EB5757] flex items-center justify-center -right-1 -top-1">
        {props.label}
      </span>
    </button>
  );
}
