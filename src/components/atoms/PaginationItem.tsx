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
      className="text-3xl bg-gray-300 justify-self-center py-2 px-4 rounded-md transition-all hover:text-blue-500 hover:scale-105 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:text-black"
      disabled={isPrev && activePage <= 1}
      onClick={handleClick}
    >
      {isPrev ? `< Previous` : `Next >`}
    </button>
  );
};
