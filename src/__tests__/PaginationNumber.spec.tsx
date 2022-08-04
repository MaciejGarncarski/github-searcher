import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import { mockRouter } from '@/lib/mockRouter';

import { PaginationNumber } from '@/components/atoms/buttons/PaginationNumber';

import { ActivePageContext } from '@/contexts/activePageContext';

describe('<PaginationNumber />', () => {
  const queryClient = new QueryClient();
  test('should be disabled', async () => {
    render(
      <RouterContext.Provider value={mockRouter({ query: { q: '' } })}>
        <ActivePageContext.Provider value={{ activePage: 69, setActivePage: jest.fn() }}>
          <QueryClientProvider client={queryClient}>
            <PaginationNumber pageNumber={69}>pagination number</PaginationNumber>
          </QueryClientProvider>
        </ActivePageContext.Provider>
      </RouterContext.Provider>
    );
    expect(await screen.findByText('pagination number')).toHaveClass('cursor-not-allowed');
  });

  test('should be active', async () => {
    render(
      <RouterContext.Provider value={mockRouter({ query: { q: 'hejaheja' } })}>
        <ActivePageContext.Provider value={{ activePage: 69, setActivePage: jest.fn() }}>
          <QueryClientProvider client={queryClient}>
            <PaginationNumber pageNumber={2137}>pagination number</PaginationNumber>
          </QueryClientProvider>
        </ActivePageContext.Provider>
      </RouterContext.Provider>
    );
    expect(await screen.findByText('pagination number')).toHaveClass('cursor-pointer');
  });
});
