import { ReactNode } from 'react';

import { Text } from '@/components/atoms/Text';

type ResultsHeadingProps = {
  children: ReactNode;
  className?: string;
};

export const ResultHeading = ({
  children,
  className = '',
}: ResultsHeadingProps) => {
  return (
    <Text
      type='h2'
      className={`break-all text-3xl text-blue-600 dark:text-blue-400 ${className}`}
    >
      {children}
    </Text>
  );
};
