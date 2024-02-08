export type SideMenu = 'ShopList' | 'ItemForm' | 'ItemDetails';

export type Category = 'Fruit and vegetables' | 'Meat and fish' | 'Beverages';

export interface ShopItem {
  id: number;
  name: string;
  quantity: number;
  category: Category;
  isActive: boolean;
}
