import { render } from '@testing-library/react';

import { Header } from '@/components/organisms/Header';

describe('<Header />', () => {
  test('should display a header', () => {
    render(<Header inputDisabled={false} setSearchedValue={jest.fn()} />);
  });
});

export {};
