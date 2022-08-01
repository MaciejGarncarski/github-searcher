import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

import { Logo } from '@/components/atoms/Logo';
import { SearchForm } from '@/components/molecules/SearchForm';
import { Settings } from '@/components/organisms/Settings';

import logoImg from '@/images/GitHub-Mark-Light-64px.png';

export const Header = () => {
  const [posY, setPosY] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setPosY(window.scrollY);
      if (window.scrollY > posY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

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
      y: -200,
      transition: {
        ease: 'easeInOut',
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
      className='top-0 z-20 flex items-center justify-between gap-x-6 bg-slate-700 px-4 py-3 shadow-xl sm:gap-x-20 sm:px-10 sm:py-3'
    >
      <Logo src={logoImg} alt='github mark' size={48} placeholder='empty' />
      <SearchForm />
      <Settings />
    </motion.header>
  );
};
