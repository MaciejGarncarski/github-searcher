import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { IoMdClose, IoMdSettings } from 'react-icons/io';

import { ColorSwitch } from '@/components/molecules/ColorSwitch';
import { ThemeSwitch } from '@/components/molecules/ThemeSwitch';

const buttonVariants: Variants = {
  open: {
    rotate: 90,
  },
  closed: {
    rotate: 0,
  },
};

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClick = (clickEvent: MouseEvent) => {
      const eventTarget = clickEvent.target as
        | HTMLButtonElement
        | HTMLFormElement;

      if (formRef.current && !formRef.current.contains(eventTarget)) {
        setIsOpen(false);
      }
      if (buttonRef.current && buttonRef.current.contains(eventTarget)) {
        if (isOpen) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [isOpen]);

  return (
    <div
      className='col-span-2 row-start-1 flex items-end justify-self-end md:relative'
      ref={formRef}
    >
      <motion.button
        title='settings'
        className='text-5xl text-white'
        type='button'
        onClick={() => setIsOpen((prevState) => !prevState)}
        initial='closed'
        variants={buttonVariants}
        animate={isOpen ? 'open' : 'closed'}
      >
        <IoMdSettings />
      </motion.button>
      <div
        className={`absolute right-0 min-w-max rounded-lg  bg-slate-700 p-8 shadow-xl transition-all lg:-right-8 ${
          isOpen ? 'top-20 block' : 'hidden'
        }`}
      >
        <ThemeSwitch />
        <ColorSwitch />
        <motion.button
          type='button'
          onClick={() => setIsOpen(false)}
          className='absolute right-2 top-2 text-4xl text-white'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoMdClose />
        </motion.button>
      </div>
    </div>
  );
};
