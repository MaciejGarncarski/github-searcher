import { render, screen } from '@testing-library/react';

import { Header } from '@/components/organisms/Header';

describe('<Header />', () => {
  test('should display a header with input', () => {
    render(<Header inputDisabled={false} />);
    const input = screen.getByPlaceholderText('Search');
    expect(input).toBeInTheDocument();
  });
});

export {};
