import { SideMenu } from '@/types';
import { create } from 'zustand';

interface SideMenuState {
  activeMenu: SideMenu;
  setActiveMenu: (menu: SideMenu) => void;
}

export const useSideMenuStore = create<SideMenuState>()((set) => ({
  activeMenu: 'ShopList',
  setActiveMenu: (menu) => set(() => ({ activeMenu: menu })),
}));
