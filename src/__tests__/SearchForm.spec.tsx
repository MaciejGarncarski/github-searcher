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
        <Input type='text' setInputValue={jest.fn()} inputValue='' />
        <ResetButton inputValue='' />
      </SearchContext.Provider>
    );
    expect(screen.getByTestId('reset-btn')).toHaveProperty('disabled', true);
  });

  test('should inherit text from query params', () => {
    render(
      <RouterContext.Provider value={createMockRouter({ query: { q: 'elo' } })}>
        <SearchProvider>
          <Input
            type='text'
            placeholder='myinput'
            setInputValue={jest.fn()}
            inputValue='elo'
          />
        </SearchProvider>
      </RouterContext.Provider>
    );
    expect(screen.getByPlaceholderText('myinput')).toHaveValue('elo');
  });
});
