import { motion } from 'framer-motion';

import { useActivePage, useSearchValue } from '@/hooks/useContexts';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearch } from '@/hooks/useSearch';

import { Text } from '@/components/atoms/Text';
import { ErrorMessage } from '@/components/molecules/ErrorMessage';
import { ResultPlaceholder } from '@/components/molecules/ResultPlaceholder';
import { placeholderVariants } from '@/components/molecules/UserProfilePlaceholder';
import { RepositoryResult } from '@/components/organisms/RepositoryResult';
import { UserResult } from '@/components/organisms/UserResult';

export const ResultsList = () => {
  const { activePage } = useActivePage();

  const { searchedValue } = useSearchValue();

  const debouncedSearch = useDebounce(
    searchedValue === `` ? 'Typescript' : searchedValue,
    1200
  );

  const { totalCount, apiResponseData, fetchRepos, fetchUsers } = useSearch(
    activePage,
    debouncedSearch
  );

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
    <section className='align-center flex flex-col justify-start px-6 py-7  xl:px-24'>
      <Text type='h2' className='break-words py-4  text-3xl dark:text-white'>
        {totalCount.toLocaleString('en-GB')} results
      </Text>
      <motion.ul
        variants={placeholderVariants}
        initial='initial'
        animate='animate'
        exit={{ opacity: 0 }}
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
