import SideMenu from './components/SideMenu';
import SideNav from './components/SideNav';
import { useTabStore } from './store/tabStore';
import HistoryTab from './tabs/HistoryTab';
import ItemsTab from './tabs/ItemsTab';
import StatisticsTab from './tabs/StatisticsTab';
import { Tabs } from './types';

function App() {
  const activeTab = useTabStore((state) => state.activeTab);

  return (
    <main className="bg-[#FAFAFE] flex min-h-screen">
      <SideNav />
      <section className="flex-1 py-9 px-20">
        {activeTab === Tabs.ITEMS && <ItemsTab />}
        {activeTab === Tabs.HISTORY && <HistoryTab />}
        {activeTab === Tabs.STATISTICS && <StatisticsTab />}
      </section>
      <SideMenu />
    </main>
  );
}

export default App;
