import { useSideMenuStore } from '@/store/sideMenuStore';
import CreateItemForm from './CreateItemForm';
import ItemDetails from './ItemDetails';
import ShoppingList from './ShoppingList';

export default function SideMenu() {
  const { activeMenu, setActiveMenu } = useSideMenuStore();

  if (activeMenu === 'ItemForm')
    return <CreateItemForm setFormInactive={() => setActiveMenu('ShopList')} />;
  else if (activeMenu === 'ItemDetails') return <ItemDetails />;
  return <ShoppingList />;
}
