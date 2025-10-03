import { ChevronRight } from 'lucide-react';
import { type MenuItem as MenuItemType } from '../types';

type MenuItemProps = {
  item: MenuItemType;
  onClick: () => void;
};

export const MenuItem = ({ item, onClick }: MenuItemProps) => {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li>
      <button
        onClick={onClick}
        className='w-full flex items-start  p-4 text-left hover:bg-gray-100 transition-colors duration-200'
      >
        {item.icon && <div className='mr-2  mt-1'>{item.icon}</div>}
        <div className='flex-grow'>
          <p className='font-semibold text-gray-800'>{item.title}</p>
          {item.description && (
            <p className='text-sm text-gray-500'>{item.description}</p>
          )}
        </div>
        {hasChildren && <ChevronRight className='w-5 h-5 text-gray-400' />}
      </button>
    </li>
  );
};
