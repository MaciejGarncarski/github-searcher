import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';

import { PaginationNumber } from '@/components/atoms/PaginationNumber';

import { ActivePageContext } from '@/contexts/activePageContext';

describe('<PaginationNumber />', () => {
  const queryClient = new QueryClient();
  test('should be disabled', () => {
    render(
      <ActivePageContext.Provider
        value={{ activePage: 69, setActivePage: jest.fn() }}
      >
        <QueryClientProvider client={queryClient}>
          <PaginationNumber pageNumber={69}>pagination number</PaginationNumber>
        </QueryClientProvider>
      </ActivePageContext.Provider>
    );
    expect(screen.getByText('pagination number')).toHaveClass(
      'cursor-not-allowed'
    );
  });

  test('should be active', () => {
    render(
      <ActivePageContext.Provider
        value={{ activePage: 69, setActivePage: jest.fn() }}
      >
        <QueryClientProvider client={queryClient}>
          <PaginationNumber pageNumber={2137}>
            pagination number
          </PaginationNumber>
        </QueryClientProvider>
      </ActivePageContext.Provider>
    );
    expect(screen.getByText('pagination number')).toHaveClass('cursor-pointer');
  });
});
