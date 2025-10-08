import { useState, useMemo, useCallback, useEffect } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { MenuList } from './MenuList';
import { type MenuItem as MenuItemType } from '../types';
import { useMediaQuery } from '../hooks/useMediaQuery';
import clsx from 'clsx';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  data: MenuItemType[];
};

const ITEM_HEIGHT = 76;
const HEADER_HEIGHT = 72;
const MARGIN = 40;

export const Drawer = ({ isOpen, onClose, data }: DrawerProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [history, setHistory] = useState<string[]>(['root']);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [windowHeight, setWindowHeight] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const desktopOpacity = useTransform(x, [-200, 0], [0, 1]);
  const mobileOpacity = useTransform(y, [0, 300], [1, 0]);

  const opacity = isDesktop ? desktopOpacity : mobileOpacity;
  useEffect(() => {
    const updateHeight = () => setWindowHeight(window.innerHeight);
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    if (isOpen) {
      x.set(0);
      y.set(0);
    }
  }, [isOpen, x, y]);

  const activeMenuId = history[history.length - 1];
  const isRoot = activeMenuId === 'root';

  const menuMap = useMemo(() => {
    const map = new Map();

    function traverse(items: MenuItemType[], parentId: string | null) {
      items.forEach((item) => {
        map.set(item.id, { ...item, parentId });
        if (item.children) {
          if (item.id) {
            traverse(item.children, item.id);
          }
        }
      });
    }

    traverse(data, null);
    return map;
  }, [data]);

  const activeMenu = useMemo(() => {
    if (isRoot) return { title: 'Menu', items: data };

    const currentItem = menuMap.get(activeMenuId);
    const parentItem = currentItem ? menuMap.get(currentItem.parentId) : null;

    return {
      title: parentItem?.title || 'Menu',
      items: currentItem?.children || [],
    };
  }, [activeMenuId, data, isRoot, menuMap]);

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

  const contentHeight =
    activeMenu.items.length * ITEM_HEIGHT + (isRoot ? 0 : HEADER_HEIGHT);
  const availableHeight = windowHeight - MARGIN;

  const drawerVariants = useMemo(
    () =>
      isDesktop
        ? {
            initial: {
              x: '-100%',
              width: 300,

              height: '95%',
            },
            animate: {
              x: 0,
            },

            exit: { x: '-100%' },
          }
        : {
            initial: { y: '100%' },
            animate: {
              y: 0,
              height: contentHeight,
            },
            exit: { y: '100%' },
          },
    [isDesktop, contentHeight]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ opacity }}
            onClick={onClose}
            className='fixed inset-0 bg-black/50 z-40'
          />
          {/* Drawer Panel */}
          <motion.div
            variants={drawerVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            layout
            drag={isDesktop ? 'x' : 'y'}
            dragConstraints={
              isDesktop ? { left: 0, right: 300 } : { top: 0, bottom: 500 }
            }
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(_, info) => {
              if (!isDesktop && info.offset.y > 150) {
                onClose();
              }
              if (isDesktop && info.offset.x < -150) {
                onClose();
              }
            }}
            onUpdate={(latest) => {
              if (!isDesktop && typeof latest.y === 'number') {
                y.set(latest.y);
              } else if (isDesktop && typeof latest.x === 'number') {
                x.set(latest.x);
              }
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            className={clsx(
              'fixed bottom-5 left-5 right-5 bg-white rounded-2xl shadow-2xl z-50 overflow-y-auto'
            )}
            style={{
              height: availableHeight,
            }}
          >
            {!isRoot && (
              <div className='p-4 flex items-center justify-between'>
                <button
                  onClick={navigateBack}
                  className='flex gap-4 p-2 -ml-2 hover:bg-gray-100 rounded-full'
                >
                  <ChevronLeft className='w-6 h-6' />
                  <p>Back</p>
                </button>
              </div>
            )}
            <div className='relative'>
              <MenuList
                items={activeMenu.items}
                onItemClick={navigateTo}
                direction={direction}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
