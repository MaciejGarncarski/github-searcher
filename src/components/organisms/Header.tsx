import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { Logo } from '@/components/atoms/Logo';
import { SearchForm } from '@/components/molecules/SearchForm';
import { Settings } from '@/components/organisms/Settings';

import logoImg from '@/images/GitHub-Mark-Light-64px.png';

export const Header = () => {
  const [posY, setPosY] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      setPosY(window.scrollY);
      if (window.scrollY > posY && window.scrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [posY]);

  const headerVariants: Variants = {
    visible: {
      position: 'sticky',
      opacity: 1,
      y: 0,
      transition: {
        type: 'linear',
      },
    },
    hidden: {
      opacity: 0.7,
      y: -60,
      transition: {
        type: 'linear',
      },
      transitionEnd: {
        position: 'static',
      },
    },
  };

  return (
    <motion.header
      variants={headerVariants}
      animate={isVisible ? 'visible' : 'hidden'}
      initial='visible'
      className='top-0 z-20 flex items-center justify-between gap-x-4 bg-slate-600 px-4 py-3 shadow shadow-slate-600/40 dark:bg-slate-700 sm:px-10 sm:py-3 lg:gap-x-16'
    >
      <Logo src={logoImg} alt='github mark' size={48} placeholder='empty' />
      <SearchForm />
      <Settings />
    </motion.header>
  );
};
