import { render, screen } from '@testing-library/react';

import { Pagination } from '../components/molecules/Pagination';

describe('<Pagination />', () => {
  test('cannot click previous page', () => {
    render(
      <Pagination totalPages={6} activePage={1} setActivePage={jest.fn()} />
    );

    const prevBtn = screen.getByText('Prev');
    const nextBtn = screen.getByText('Next');

    expect(prevBtn).toHaveAttribute('disabled');
    expect(nextBtn).not.toHaveAttribute('disabled');
  });
  test('cannot click next page', () => {
    render(
      <Pagination totalPages={6} activePage={6} setActivePage={jest.fn()} />
    );

    const prevBtn = screen.getByText('Prev');
    const nextBtn = screen.getByText('Next');

    expect(prevBtn).toHaveAttribute('disabled', '');
    expect(nextBtn).toHaveAttribute('disabled');
  });
  test('can click both pages', () => {
    render(
      <Pagination totalPages={6} activePage={3} setActivePage={jest.fn()} />
    );

    const prevBtn = screen.getByText('Prev');
    const nextBtn = screen.getByText('Next');

    expect(prevBtn).toHaveAttribute('disabled', '');
    expect(nextBtn).not.toHaveAttribute('disabled');
  });
});
