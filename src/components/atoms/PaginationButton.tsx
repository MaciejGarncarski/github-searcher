import { MouseEventHandler, ReactNode } from 'react';

interface PaginationButtonProps {
  disabled?: boolean;
  handleClick: MouseEventHandler;
  children: ReactNode;
}

export const PaginationButton = ({
  disabled,
  handleClick,
  children,
}: PaginationButtonProps) => {
  return (
    <button
      type='button'
      className='transition-all justify-self-center enabled:text-blue-600 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 flex items-center'
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
