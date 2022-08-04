import { Pagination } from '@/components/molecules/Pagination';
import { ResultsList } from '@/components/organisms/ResultsList';

export const ResultsPage = () => {
  return (
    <>
      <ResultsList />
      <Pagination />
    </>
  );
};
