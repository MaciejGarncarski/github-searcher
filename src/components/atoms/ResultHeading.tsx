import { ReactNode, useEffect, useState } from 'react';

import { clsxm } from '@/lib/clsxm';
import { useSettings } from '@/hooks/useContexts';
import { textColors } from '@/utils/colorsData';

import { Text } from '@/components/atoms/Text';
import { Color } from '@/components/molecules/ColorSwitch';

type ResultsHeadingProps = {
  children: ReactNode;
  className?: string;
};

export const ResultHeading = ({ children, className = '' }: ResultsHeadingProps) => {
  const { accentColor } = useSettings();

  const [color, setColor] = useState<Color>('blue');

  useEffect(() => {
    setColor(accentColor);
  }, [accentColor]);

  return (
    <Text type='h2' className={clsxm('break-all text-3xl', textColors[color], className)}>
      {children}
    </Text>
  );
};
