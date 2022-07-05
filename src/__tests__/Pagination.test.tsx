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
});
