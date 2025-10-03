import { useState, useMemo, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { MenuList } from './MenuList';
import { type MenuItem as MenuItemType } from '../types';
import { findMenuById } from '../lib/util';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  data: MenuItemType[];
};

export const Drawer = ({ isOpen, onClose, data }: DrawerProps) => {
  const [history, setHistory] = useState<string[]>(['root']);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const activeMenuId = history[history.length - 1];
  const isRoot = activeMenuId === 'root';

  const activeMenu = useMemo(() => {
    if (isRoot) return { title: 'Menu', items: data };
    const items = findMenuById(data, activeMenuId);

    const findParentTitle = (
      menus: MenuItemType[],
      id: string
    ): string | undefined => {
      for (const menu of menus) {
        if (menu.children?.some((child) => child.id === id)) return menu.title;
        if (menu.children) {
          const found = findParentTitle(menu.children, id);
          if (found) return found;
        }
      }
    };
    return {
      title: findParentTitle(data, activeMenuId) || 'Menu',
      items: items || [],
    };
  }, [activeMenuId, data, isRoot]);

  const navigateTo = useCallback((item: MenuItemType) => {
    if (item.children && item.children.length > 0) {
      setDirection('forward');
      setHistory((prev) => [...prev, item.id]);
    }
  }, []);

  const navigateBack = useCallback(() => {
    setDirection('backward');
    setHistory((prev) => prev.slice(0, -1));
  }, []);
  const contentHeight = activeMenu.items.length * 64 + 80;
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='fixed inset-0 bg-black/50 z-40'
          />
          {/* Drawer Panel */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            drag='y'
            dragConstraints={{ top: 0, bottom: 500 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(event, info) => {
              if (info.offset.y > 150) {
                onClose();
              }
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='fixed bottom-5 top-auto left-0 right-0 bg-white rounded-2xl shadow-2xl z-50 m-5 max-h-[calc(100vh-40px)] max-w-[calc(100vw-40px)] overflow-auto'
          >
            <div className='p-4 flex items-center justify-between'>
              {!isRoot ? (
                <button
                  onClick={navigateBack}
                  className='flex gap-4 p-2 -ml-2 hover:bg-gray-100 rounded-full'
                >
                  <ChevronLeft className='w-6 h-6' />
                  <p>Back</p>
                </button>
              ) : (
                <div></div>
              )}
            </div>
            <motion.div
              className='relative'
              layout
              transition={{
                y: { type: 'spring', stiffness: 300, damping: 30 },
                height: { type: 'spring', stiffness: 400, damping: 40 },
              }}
              animate={{
                y: '0%',
                height: contentHeight,
              }}
            >
              <MenuList
                items={activeMenu.items}
                onItemClick={navigateTo}
                direction={direction}
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
