import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem } from './MenuItem';
import { type MenuItem as MenuItemType } from '../types';

type MenuListProps = {
  items: MenuItemType[];
  onItemClick: (item: MenuItemType) => void;
  direction: 'forward' | 'backward';
};

const variants = {
  enter: (direction: 'forward' | 'backward') => ({
    x: direction === 'forward' ? '100%' : '-50%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: 'forward' | 'backward') => ({
    x: direction === 'forward' ? '-50%' : '100%',
    opacity: 0,
  }),
};

export const MenuList = ({ items, onItemClick, direction }: MenuListProps) => {
  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.ul
        key={items[0]?.id || 'root'}
        custom={direction}
        variants={variants}
        initial='enter'
        animate='center'
        exit='exit'
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          duration: 0.2,
        }}
        className='absolute top-0 left-0 w-full'
      >
        {items.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onClick={() => onItemClick(item)}
          />
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};
