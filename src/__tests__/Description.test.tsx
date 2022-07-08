import { render, screen } from '@testing-library/react';

import { ResultDescription } from '@/components/atoms/ResultDescription';

describe('<ResultDescription />', () => {
  test('should render ResultDescription with text', () => {
    render(<ResultDescription>DEESCC</ResultDescription>);
    expect(screen.getByText('DEESCC')).toBeInTheDocument();
  });
});
