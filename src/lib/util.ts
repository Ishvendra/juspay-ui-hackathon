import { type MenuItem as MenuItemType } from '../types';

// A helper function to find a menu by its ID in a nested structure
export const findMenuById = (
  menus: MenuItemType[],
  id: string
): MenuItemType[] | null => {
  for (const menu of menus) {
    if (menu.id === id) return menu.children || null;
    if (menu.children) {
      const found = findMenuById(menu.children, id);
      if (found) return found;
    }
  }
  return null;
};
