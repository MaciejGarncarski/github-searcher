import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useActivePage, useSearchedValue } from '@/hooks/useContexts';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearch } from '@/hooks/useSearch';

import { Text } from '@/components/atoms/Text';
import { ErrorMessage } from '@/components/molecules/ErrorMessage';
import { ResultPlaceholder } from '@/components/molecules/ResultPlaceholder';
import { placeholderVariants } from '@/components/molecules/UserProfilePlaceholder';
import { RepositoryResult } from '@/components/organisms/RepositoryResult';
import { UserResult } from '@/components/organisms/UserResult';

export const ResultsList = () => {
  const { push, isReady } = useRouter();
  const { activePage } = useActivePage();
  const { searchedValue } = useSearchedValue();

  const debouncedSearch = useDebounce(
    searchedValue === `` ? 'Typescript' : searchedValue,
    1200
  );

  const { totalCount, apiResponseData, fetchRepos, fetchUsers } = useSearch(
    activePage,
    debouncedSearch
  );

  useEffect(() => {
    if (!isReady) {
      return;
    }

    if (searchedValue.trim() !== '') {
      push(`?q=${searchedValue}&page=${activePage}`, undefined, {
        shallow: true,
      });
    }

    if (searchedValue.trim() === '') {
      push(`?page=${activePage}`, undefined, {
        shallow: true,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage, isReady, searchedValue]);

  if (fetchUsers.isFetching || fetchRepos.isFetching) {
    return <ResultPlaceholder placeholderAmount={5} />;
  }

  if (fetchUsers.isError || fetchRepos.isError) {
    return <ErrorMessage error="Couldn't load data" emoji='😭' />;
  }

  if (totalCount === 0) {
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
        {apiResponseData.map((apiResponse) => {
          if ('avatar_url' in apiResponse) {
            return (
              <UserResult
                key={apiResponse.id}
                login={apiResponse.login}
                fullName={apiResponse.name}
                avatar={apiResponse.avatar_url}
                bio={apiResponse.bio}
                location={apiResponse.location}
              />
            );
          }
          if ('updated_at' in apiResponse) {
            return (
              <RepositoryResult
                key={apiResponse.id}
                fullName={apiResponse.full_name}
                description={apiResponse.description}
                stars={apiResponse.stargazers_count}
                language={apiResponse.language}
                license={apiResponse.license}
                updatedAt={apiResponse.updated_at}
              />
            );
          }
          return null;
        })}
      </motion.ul>
    </section>
  );
};
