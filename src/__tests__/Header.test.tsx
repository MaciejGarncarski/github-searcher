import { render } from '@testing-library/react';

import { Header } from '@/components/molecules/Header';

describe('<Header />', () => {
  test('should display a header', () => {
    render(<Header setSearchedValue={jest.fn()} />);
  });
});

export {};
