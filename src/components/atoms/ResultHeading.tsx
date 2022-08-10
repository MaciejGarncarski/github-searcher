import Link from 'next/link';
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

export const ResultHeading = ({
  children,
  className = '',
  external,
  href,
}: ResultsHeadingProps) => {
  const { accentColor } = useSSRAccentColor();

  if (external) {
    return (
      <a href={href} className='max-w-max' target='_blank' rel='noopener noreferrer'>
        <Text
          type='h2'
          className={clsxm(
            'inline-flex items-center gap-2 break-all text-3xl underline',
            TEXT_COLORS[accentColor],
            className
          )}
        >
          {children}
          <HiExternalLink className='text-slate-700 transition-colors dark:text-slate-200' />
        </Text>
      </a>
    );
  }

  return (
    <Link href={href} passHref>
      <a className='max-w-max'>
        <Text
          type='h2'
          className={clsxm(
            'inline-flex items-center gap-2 break-all text-3xl underline',
            TEXT_COLORS[accentColor],
            className
          )}
        >
          {children}
        </Text>
      </a>
    </Link>
  );
};
