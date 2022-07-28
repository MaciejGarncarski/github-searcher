import { Pagination } from '@/components/molecules/Pagination';
import { ResultsList } from '@/components/organisms/ResultsList';

export const SearchResults = () => {
  return (
    <>
      <ResultsList />
      <Pagination />
    </>
  );
};
