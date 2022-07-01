import { render, screen } from '@testing-library/react';

import { Description } from '@/components/atoms/Description';

describe('<Description />', () => {
  test('should render description with text', () => {
    render(<Description>DEESCC</Description>);
    expect(screen.getByText('DEESCC')).toBeInTheDocument();
  });
});
