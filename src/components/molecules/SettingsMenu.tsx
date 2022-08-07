import type { Variants } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';

import { clsxm } from '@/lib/clsxm';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { BORDER_COLORS } from '@/utils/colorsData';

import { MenuCloseButton } from '@/components/atoms/buttons/MenuCloseButton';
import { ColorSwitch } from '@/components/molecules/ColorSwitch';
import { ThemeSwitch } from '@/components/molecules/ThemeSwitch';

type SettingsMenuProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const menuVariants: Variants = {
  open: {
    y: [-20, 5, 0],
    opacity: 1,
  },
  closed: {
    y: -20,
    opacity: 0,
  },
};

export const SettingsMenu = ({ isOpen, setIsOpen }: SettingsMenuProps) => {
  const { accentColor } = useSSRAccentColor();

  return (
    <AnimatePresence>
      <motion.aside
        data-testid='settings-menu'
        variants={window.innerWidth > 768 ? menuVariants : {}}
        initial='closed'
        exit='closed'
        transition={{
          duration: 0.5,
          type: 'spring',
        }}
        animate={isOpen ? 'open' : 'closed'}
        className={clsxm(
          BORDER_COLORS[accentColor],
          'absolute right-2 top-24 z-20 min-w-max justify-evenly gap-x-6 rounded-lg border-2 bg-slate-600 p-8 dark:bg-slate-700  lg:top-20 lg:-right-6 lg:rounded-xl landscape:flex landscape:px-11'
        )}
      >
        <ThemeSwitch />
        <ColorSwitch />
        <MenuCloseButton setIsOpen={setIsOpen} />
      </motion.aside>
    </AnimatePresence>
  );
};
