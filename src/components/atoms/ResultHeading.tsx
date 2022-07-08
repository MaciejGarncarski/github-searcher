import { ReactNode } from 'react';

import { Text } from '@/components/atoms/Text';

export const ResultHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Text type='h2' className='text-blue-600 text-2xl'>
      {children}
    </Text>
  );
};
