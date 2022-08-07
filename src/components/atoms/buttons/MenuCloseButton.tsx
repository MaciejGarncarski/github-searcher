import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

type MenuCloseButtonProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export const MenuCloseButton = ({ setIsOpen }: MenuCloseButtonProps) => {
  return (
    <motion.button
      type='button'
      onClick={() => setIsOpen(false)}
      className='absolute right-2 top-2 rounded-full p-1 text-4xl text-slate-200 hover:bg-slate-500 focus:bg-slate-500'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <IoMdClose />
    </motion.button>
  );
};
