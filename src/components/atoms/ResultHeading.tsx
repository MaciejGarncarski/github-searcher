import { ReactNode } from 'react';

import { clsxm } from '@/lib/clsxm';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { textColors } from '@/utils/colorsData';

import { Text } from '@/components/atoms/Text';

type ResultsHeadingProps = {
  children: ReactNode;
  className?: string;
};

export const ResultHeading = ({ children, className = '' }: ResultsHeadingProps) => {
  const { accentColor } = useSSRAccentColor();

  return (
    <Text type='h2' className={clsxm('break-all text-3xl', textColors[accentColor], className)}>
      {children}
    </Text>
  );
};
