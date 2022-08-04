import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { IoMdSettings } from 'react-icons/io';

type SettingsToggleButtonProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const buttonVariants: Variants = {
  open: {
    rotate: 90,
  },
  closed: {
    rotate: 0,
  },
};

export const SettingsToggleButton = ({ isOpen, setIsOpen }: SettingsToggleButtonProps) => {
  const handleToggle = () => {
    setIsOpen((prevState: boolean) => !prevState);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title='settings'
      className='overflow-hidden rounded-full p-1 text-5xl text-white transition-colors hover:bg-slate-500 focus:bg-slate-500 focus:outline-offset-4'
      type='button'
      onClick={handleToggle}
    >
      <motion.span
        className='flex items-center'
        initial='closed'
        variants={buttonVariants}
        animate={isOpen ? 'open' : 'closed'}
      >
        <IoMdSettings />
      </motion.span>
    </motion.button>
  );
};
