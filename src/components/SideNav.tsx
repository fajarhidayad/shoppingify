import Logo from '@/assets/logo.svg';
import { Tabs } from '@/types';
import {
  ListIcon,
  ShoppingCartIcon,
  HistoryIcon,
  BarChart2Icon,
} from 'lucide-react';
import React from 'react';
import clsx from 'clsx';
import { useTabStore } from '@/store/tabStore';

export default function SideNav() {
  return (
    <nav className="py-[34px] bg-white flex flex-col justify-between items-center">
      <img src={Logo} alt="Shoppingify Logo" />

      <div className="flex flex-col gap-12">
        <NavButton tab={Tabs.ITEMS}>
          <ListIcon />
        </NavButton>
        <NavButton tab={Tabs.HISTORY}>
          <HistoryIcon />
        </NavButton>
        <NavButton tab={Tabs.STATISTICS}>
          <BarChart2Icon />
        </NavButton>
      </div>

      <button className="relative w-[42px] h-[42px] rounded-full bg-primary text-white flex items-center justify-center">
        <ShoppingCartIcon />
        <span className="absolute w-5 h-5 text-xs rounded bg-[#EB5757] flex items-center justify-center -right-1 -top-1">
          3
        </span>
      </button>
    </nav>
  );
}

const NavButton = (props: { children: React.ReactNode; tab: Tabs }) => {
  const { activeTab, setTab } = useTabStore();

  return (
    <button
      onClick={() => setTab(props.tab)}
      className="group relative px-6 h-11 flex items-center justify-center hover:ch"
    >
      <span
        className={clsx({
          'absolute left-0 top-auto bottom-auto h-11 w-[6px] rounded-r-full group-hover:bg-primary transition-all duration-150':
            true,
          'bg-transparent': activeTab !== props.tab,
          'bg-primary': activeTab === props.tab,
        })}
      ></span>
      {props.children}
    </button>
  );
};
