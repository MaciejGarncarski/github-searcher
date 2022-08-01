import { AnimatePresence, motion, Variants } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

import { ColorSwitch } from '@/components/molecules/ColorSwitch';
import { ThemeSwitch } from '@/components/molecules/ThemeSwitch';

type SettingsMenuProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const menuVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      type: 'spring',
      bounce: 0.6,
    },
  },
  closed: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};

export const SettingsMenu = ({ isOpen, setIsOpen }: SettingsMenuProps) => {
  return (
    <AnimatePresence>
      <motion.aside
        data-testid='settings-menu'
        variants={menuVariants}
        initial='closed'
        exit='closed'
        animate={isOpen ? 'open' : 'closed'}
        className='absolute right-2 top-24 z-20 min-w-max justify-evenly gap-x-6 rounded-md bg-slate-700 p-8 shadow-xl lg:top-20 lg:-right-6 lg:rounded-xl landscape:flex landscape:px-11'
      >
        <ThemeSwitch />
        <ColorSwitch />
        <motion.button
          type='button'
          onClick={() => setIsOpen(false)}
          className='absolute right-2 top-2 rounded-full p-1 text-4xl text-white hover:bg-slate-500 focus:bg-slate-500'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoMdClose />
        </motion.button>
      </motion.aside>
    </AnimatePresence>
  );
};
