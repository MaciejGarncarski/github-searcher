import { MouseEventHandler } from 'react';

interface PaginationItemProps<T> {
  activePage: T;
  isPrev?: boolean;
  handleClick: MouseEventHandler;
}

export const PaginationItem = ({
  activePage,
  isPrev,
  handleClick,
}: PaginationItemProps<number>) => {
  return (
    <button
      type="button"
      className="text-3xl transition-colors hover:text-blue-500 hover:cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed disabled:text-black"
      disabled={isPrev && activePage <= 1}
      onClick={handleClick}
    >
      {isPrev ? '< Previous' : 'Next >'}
    </button>
  );
};
