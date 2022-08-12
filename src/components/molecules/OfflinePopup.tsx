import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

import { clsxm } from '@/lib/clsxm';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { BORDER_COLORS } from '@/utils/colorsData';

import { Text } from '@/components/atoms/Text';

const notificationVariants: Variants = {
  online: {
    bottom: -200,
    transitionEnd: {
      display: 'none',
    },
  },
  offline: {
    display: 'flex',
    bottom: 60,
  },
};

export const OfflinePopup = () => {
  const { accentColor } = useSSRAccentColor();

  const [isOffline, setIsOffline] = useState<boolean>(false);

  useEffect(() => {
    const setOnline = () => setIsOffline(false);
    const setOffline = () => setIsOffline(true);

    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);

    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.section
        variants={notificationVariants}
        animate={isOffline ? 'offline' : 'online'}
        initial='online'
        exit='offline'
        transition={{ type: 'spring', duration: 0.5, damping: 20, bounce: 0.15 }}
        className={clsxm(
          BORDER_COLORS[accentColor],
          'fixed bottom-20 left-1/2 mx-auto flex -translate-x-1/2 flex-row items-center justify-center gap-3 rounded-lg border-2 bg-slate-600 py-6 px-6 text-center dark:bg-slate-700 md:py-10'
        )}
      >
        <Text type='h3' className='pl-14 pr-2 text-4xl text-slate-200 md:text-6xl'>
          You&apos;re offline!
        </Text>
        <span className='text-7xl'>🗿</span>
      </motion.section>
    </AnimatePresence>
  );
};
