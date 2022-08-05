import type { ReactNode } from 'react';

import { clsxm } from '@/lib/clsxm';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { TEXT_COLORS } from '@/utils/colorsData';

import { Text } from '@/components/atoms/Text';

type ResultsHeadingProps = {
  children: ReactNode;
  className?: string;
};

export const ResultHeading = ({ children, className = '' }: ResultsHeadingProps) => {
  const { accentColor } = useSSRAccentColor();

  return (
    <Text type='h2' className={clsxm('break-all text-3xl', TEXT_COLORS[accentColor], className)}>
      {children}
    </Text>
  );
};
