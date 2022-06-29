import { PaginationItem } from '../atoms/PaginationItem';
import { Dispatch, SetStateAction } from 'react';

interface PaginationListProps<T> {
  activePage: T;
  setActivePage: Dispatch<SetStateAction<T>>;
}

export const PaginationList = ({
  activePage,
  setActivePage,
}: PaginationListProps<number>) => {
  const handlePrevPage = () => setActivePage((prevPage) => prevPage - 1);
  const handleNextPage = () => setActivePage((prevPage) => prevPage + 1);
  return (
    <div className="w-full grid grid-cols-pagination gap-10">
      <PaginationItem isPrev activePage={activePage} handleClick={handlePrevPage} />
      <p className="text-2xl ">{activePage}</p>
      <PaginationItem activePage={activePage} handleClick={handleNextPage} />
    </div>
  );
};
