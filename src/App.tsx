import { Outlet } from '@tanstack/react-router';
import SideMenu from './components/SideMenu/SideMenu';
import SideNav from './components/SideNav';

function App() {
  return (
    <main className="bg-[#FAFAFE] flex min-h-svh max-h-svh">
      <SideNav />
      <section className="flex-1 py-9 px-3 lg:px-20 overflow-y-auto">
        <Outlet />
      </section>
      <SideMenu />
    </main>
  );
}

export default App;
