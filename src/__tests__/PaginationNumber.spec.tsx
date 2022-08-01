import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';

import { PaginationNumber } from '@/components/atoms/PaginationNumber';

import { ActivePageContext } from '@/contexts/activePageContext';

describe('<PaginationNumber />', () => {
  test('should be disabled', () => {
    render(
      <ActivePageContext.Provider
        value={{ activePage: 69, setActivePage: jest.fn() }}
      >
        <PaginationNumber pageNum='69' onClick={jest.fn()}>
          pagination number
        </PaginationNumber>
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
        <PaginationNumber pageNum='2137' onClick={jest.fn()}>
          pagination number
        </PaginationNumber>
      </ActivePageContext.Provider>
    );
    expect(screen.getByText('pagination number')).toHaveClass('cursor-pointer');
  });
});
