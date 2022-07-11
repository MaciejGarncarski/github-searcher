import { ReactNode } from 'react';

import { Text } from '@/components/atoms/Text';

type ResultsHeadingProps = {
  children: ReactNode;
  className?: string;
};

export const ResultHeading = ({ children, className }: ResultsHeadingProps) => {
  return (
    <Text type='h2' className={`text-blue-600 break-all ${className}`}>
      {children}
    </Text>
  );
};
