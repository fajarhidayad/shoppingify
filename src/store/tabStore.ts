import { Tabs } from '@/types';
import { create } from 'zustand';

interface TabState {
  activeTab: Tabs;
  setTab: (tab: Tabs) => void;
}

export const useTabStore = create<TabState>()((set) => ({
  activeTab: Tabs.ITEMS,
  setTab: (tab) => set(() => ({ activeTab: tab })),
}));
