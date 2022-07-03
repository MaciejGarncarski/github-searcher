import { MouseEventHandler, ReactNode } from 'react';

type PaginationProgressProps = {
  children: ReactNode;
  pageNum: string;
  activePage: number;
  onClick: MouseEventHandler;
};

export const PaginationProgress = ({
  children,
  pageNum,
  activePage,
  onClick,
}: PaginationProgressProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`
    px-4 py-1.5 rounded-md
    
    ${
      activePage === +pageNum
        ? 'bg-blue-600 text-white cursor-default'
        : 'cursor-pointer'
    }`}
    >
      {children}
    </button>
  );
};
