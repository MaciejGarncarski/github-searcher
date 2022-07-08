import { render, screen } from '@testing-library/react';

import { Pagination } from '../components/molecules/Pagination';

describe('<Pagination />', () => {
  test('cannot click previous page', () => {
    render(<Pagination totalPages={6} />);

    const prevBtn = screen.getByText('Prev');
    const nextBtn = screen.getByText('Next');

    expect(prevBtn).toHaveAttribute('disabled');
    expect(nextBtn).not.toHaveAttribute('disabled');
  });
  test('page numbers show correctly', () => {
    render(<Pagination totalPages={6} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('…')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
  });
});
