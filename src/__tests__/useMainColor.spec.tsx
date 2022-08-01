import { render, screen } from '@testing-library/react';

import { ResultHeading } from '@/components/atoms/ResultHeading';

import { MainColorContext } from '@/contexts/mainColorContext';

describe('useMainColor', () => {
  test('color should match context color', () => {
    render(
      <MainColorContext.Provider
        value={{ mainColor: 'red', setMainColor: jest.fn() }}
      >
        <ResultHeading>typescript</ResultHeading>
      </MainColorContext.Provider>
    );

    expect(screen.getByText('typescript')).toHaveClass('text-red-500');
  });
  test('color should not match context color', () => {
    render(
      <MainColorContext.Provider
        value={{ mainColor: 'blue', setMainColor: jest.fn() }}
      >
        <ResultHeading>typescript</ResultHeading>
      </MainColorContext.Provider>
    );

    expect(screen.getByText('typescript')).not.toHaveClass('text-red-500');
  });
});
