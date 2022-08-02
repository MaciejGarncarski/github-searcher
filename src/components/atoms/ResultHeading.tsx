import { ReactNode, useEffect, useState } from 'react';

import { clsxm } from '@/lib/clsxm';
import { useSettings } from '@/hooks/useContexts';
import { textColors } from '@/utils/colorsConfig';

import { Text } from '@/components/atoms/Text';

type ResultsHeadingProps = {
  children: ReactNode;
  className?: string;
};

export const ResultHeading = ({
  children,
  className = '',
}: ResultsHeadingProps) => {
  const { accentColor } = useSettings();

  const [color, setColor] = useState('blue');

  useEffect(() => {
    setColor(accentColor);
  }, [accentColor]);

  return (
    <Text
      type='h2'
      className={clsxm(textColors[color], className, 'break-all text-3xl')}
    >
      {children}
    </Text>
  );
};
