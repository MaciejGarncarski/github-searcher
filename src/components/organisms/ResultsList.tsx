import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { useResultsData } from '@/hooks/useResultsData';
import { useSearch } from '@/hooks/useSearch';

import { Text } from '@/components/atoms/Text';
import { ErrorMessage } from '@/components/molecules/ErrorMessage';
import { ResultPlaceholder } from '@/components/molecules/ResultPlaceholder';
import { placeholderVariants } from '@/components/molecules/UserProfilePlaceholder';
import { RepositoryResult } from '@/components/organisms/RepositoryResult';
import { UserResult } from '@/components/organisms/UserResult';

export const ResultsList = () => {
  const { fetchRepos, fetchUsers } = useSearch();

  useEffect(() => {
    fetchRepos.refetch();
    fetchUsers.refetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { totalCount, sortedResults } = useResultsData(
    fetchRepos.data,
    fetchUsers.data
  );

  if (fetchUsers.isFetching || fetchRepos.isFetching) {
    return <ResultPlaceholder placeholderAmount={5} />;
  }

  const isDataError = fetchUsers.isError || fetchRepos.isError;
  if (isDataError || (totalCount === 0 && fetchUsers.status === 'loading')) {
    return <ErrorMessage error="Couldn't load data" emoji='😭' />;
  }
  if (totalCount === 0 && fetchUsers.status !== 'loading') {
    return <ErrorMessage error='No results found' emoji='🤐' />;
  }

  return (
    <section className='align-center flex flex-col justify-start px-5 py-7  xl:px-24'>
      <Text type='h2' className='break-words py-4 text-4xl dark:text-white'>
        {totalCount.toLocaleString('en-GB')}

        {totalCount > 1 ? ' results' : ' result'}
      </Text>
      <motion.ul
        variants={placeholderVariants}
        initial='initial'
        animate='animate'
      >
        {sortedResults.map((result) => {
          if ('avatar_url' in result) {
            return (
              <UserResult
                key={result.id}
                login={result.login}
                fullName={result.name}
                avatar={result.avatar_url}
                bio={result.bio}
                location={result.location}
              />
            );
          }
          if ('updated_at' in result) {
            return (
              <RepositoryResult
                key={result.id}
                fullName={result.full_name}
                description={result.description}
                stars={result.stargazers_count}
                language={result.language}
                license={result.license}
                updatedAt={result.updated_at}
              />
            );
          }
          return null;
        })}
      </motion.ul>
    </section>
  );
};
