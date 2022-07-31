import { ReactNode } from 'react';

import { useMainColor } from '@/hooks/useContexts';
import { textColors } from '@/utils/colors';

import { Text } from '@/components/atoms/Text';

type ResultsHeadingProps = {
  children: ReactNode;
  className?: string;
};

export const ResultHeading = ({
  children,
  className = '',
}: ResultsHeadingProps) => {
  const { mainColor } = useMainColor();

  return (
    <Text
      type='h2'
      className={`break-all text-3xl transition-colors ${textColors[mainColor]} ${className}`}
    >
      {children}
    </Text>
  );
};
