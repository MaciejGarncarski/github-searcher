import { motion, Variant } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { HiExternalLink } from 'react-icons/hi';

import { clsxm } from '@/lib/clsxm';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { TEXT_COLORS } from '@/utils/colorsData';

import { Text } from '@/components/atoms/Text';

type ResultsHeadingProps = {
  children: ReactNode;
  className?: string;
  external?: boolean;
  href: string;
};

const whileHover: Variant = {
  scale: 1.05,
  transition: {
    type: 'spring',
    stiffness: 200,
  },
};

export const ResultHeading = ({
  children,
  className = '',
  external,
  href,
}: ResultsHeadingProps) => {
  const { accentColor } = useSSRAccentColor();
  const router = useRouter();

  const isProfile =
    router.pathname === '/user/[name]' ? 'text-slate-200' : 'text-slate-700 dark:text-slate-200';

  if (external) {
    return (
      <motion.a
        whileHover={whileHover}
        whileFocus={whileHover}
        href={href}
        className='max-w-max'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Text
          type='h2'
          className={clsxm(
            'inline-flex items-center gap-2 break-all text-3xl underline',
            TEXT_COLORS[accentColor],
            className
          )}
        >
          {children}
          <HiExternalLink className={clsxm(' transition-colors ', isProfile)} />
        </Text>
      </motion.a>
    );
  }

  return (
    <Link href={href} passHref>
      <motion.a whileHover={whileHover} whileFocus={whileHover} className='inline-block'>
        <Text
          type='h2'
          className={clsxm(
            'inline-flex max-w-max items-center gap-2 break-all text-3xl underline',
            TEXT_COLORS[accentColor],
            className
          )}
        >
          {children}
        </Text>
      </motion.a>
    </Link>
  );
};
