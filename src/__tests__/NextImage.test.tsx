import { render } from '@testing-library/react';

import { NextImage } from '@/components/atoms/NextImage';

describe('<NextImage />', () => {
  test('should render image', () => {
    render(<NextImage src='/none' width={0} height={0} alt='' />);
  });
});
