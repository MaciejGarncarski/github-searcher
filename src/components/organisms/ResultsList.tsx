import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useSearchedValue } from '@/hooks/useContexts';
import { useActivePage } from '@/hooks/useContexts';
import { useResults } from '@/hooks/useResults';
import { useResultsData } from '@/hooks/useResultsData';

import { Text } from '@/components/atoms/Text';
import { ErrorMessage } from '@/components/molecules/ErrorMessage';
import { ResultPlaceholder } from '@/components/molecules/ResultPlaceholder';
import { placeholderVariants } from '@/components/molecules/UserProfilePlaceholder';
import { RepositoryResult } from '@/components/organisms/RepositoryResult';
import { UserResult } from '@/components/organisms/UserResult';

export const ResultsList = () => {
  useEffect(() => {
    if (page) {
      return;
    }

    if (searchedValue.trim() !== '') {
      router.push(`/?q=${searchedValue}&page=${activePage}`, undefined, { shallow: true });
    }
    if (searchedValue.trim() === '') {
      router.push(`/?page=${activePage}`, undefined, { shallow: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { searchedValue } = useSearchedValue();
  const { activePage } = useActivePage();
  const router = useRouter();
  const { page } = router.query;

  const { fetchedRepos, fetchedUsers, isError, isFetching } = useResults(
    searchedValue,
    activePage,
    true
  );

  const { totalCount, sortedResults } = useResultsData(fetchedRepos.data, fetchedUsers.data);

  if (isFetching) {
    return <ResultPlaceholder placeholderAmount={5} />;
  }

  if (isError || (totalCount === 0 && fetchedUsers.status === 'loading')) {
    return <ErrorMessage error="Couldn't load data" emoji='😭' />;
  }
  if (totalCount === 0 || sortedResults.length === 0) {
    return <ErrorMessage error='No results found' emoji='🤐' />;
  }

  return (
    <section className=' flex min-h-screen flex-col justify-start px-5 py-7  xl:px-24'>
      <Text type='h2' className='break-words py-4 text-4xl dark:text-white'>
        {totalCount.toLocaleString('en-GB')} {totalCount > 1 ? ' results' : ' result'}
      </Text>
      <motion.ul variants={placeholderVariants} initial='initial' animate='animate'>
        {sortedResults.map((result) => {
          if ('avatar_url' in result) {
            return <UserResult key={result.id} resultData={result} />;
          }
          if ('updated_at' in result) {
            return <RepositoryResult key={result.id} resultData={result} />;
          }
          return null;
        })}
      </motion.ul>
    </section>
  );
};
