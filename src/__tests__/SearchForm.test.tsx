import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import { createMockRouter } from '@/utils/createMockRouter';

import { Input } from '@/components/atoms/Input';
import { ResetButton } from '@/components/atoms/ResetButton';

import { SearchContext } from '@/contexts/searchedValueContext';
import { SearchProvider } from '@/contexts/searchedValueContext';

describe('<Input />', () => {
  test('reset should be disabled', () => {
    render(
      <SearchContext.Provider
        value={{
          searchedValue: '',
          setSearchedValue: jest.fn(),
        }}
      >
        <Input type='text' />
        <ResetButton />
      </SearchContext.Provider>
    );
    expect(screen.getByTestId('reset-btn')).toHaveProperty('disabled', true);
  });
  test('reset should be active', () => {
    render(
      <SearchContext.Provider
        value={{
          searchedValue: 'hello',
          setSearchedValue: jest.fn(),
        }}
      >
        <Input type='text' />
        <ResetButton />
      </SearchContext.Provider>
    );
    expect(screen.getByTestId('reset-btn')).toHaveProperty('disabled', false);
  });

  test('should inherit text from query params', () => {
    render(
      <RouterContext.Provider value={createMockRouter({ query: { q: 'elo' } })}>
        <SearchProvider>
          <Input type='text' placeholder='myinput' />
        </SearchProvider>
      </RouterContext.Provider>
    );
    expect(screen.getByPlaceholderText('myinput')).toHaveValue('elo');
  });
});
