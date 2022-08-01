import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { IoMdSettings } from 'react-icons/io';

import { SettingsMenu } from '@/components/molecules/SettingsMenu';

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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title='settings'
        className='overflow-hidden rounded-full p-1 text-5xl text-white transition-colors hover:bg-slate-500 focus:bg-slate-500'
        type='button'
        onClick={() => setIsOpen((prevState) => !prevState)}
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
      <SettingsMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
