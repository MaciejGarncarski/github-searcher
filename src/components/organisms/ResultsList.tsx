import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CountUp from 'react-countup';

import { useChangeParams } from '@/hooks/useChangeParams';
import { useColor } from '@/hooks/useColor';
import { useSearchedValue } from '@/hooks/useContexts';
import { useActivePage } from '@/hooks/useContexts';
import { useResults } from '@/hooks/useResults';
import { useResultsData } from '@/hooks/useResultsData';

import { Text } from '@/components/atoms/Text';
import { ErrorMessage } from '@/components/molecules/ErrorMessage';
import { ResultPlaceholder } from '@/components/molecules/ResultPlaceholder';
import { RepositoryResult } from '@/components/organisms/RepositoryResult';
import { UserResult } from '@/components/organisms/UserResult';

export const ResultsList = () => {
  const { searchedValue } = useSearchedValue();
  const { activePage } = useActivePage();

  const router = useRouter();
  const { page } = router.query;
  const { changeParams } = useChangeParams();

  useEffect(() => {
    if (page) {
      return;
    }
    changeParams(searchedValue, activePage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data: colorData } = useColor();

  const { reposData, usersData, isError, isLoading } = useResults(searchedValue, activePage);
  const { totalCount, sortedResults } = useResultsData(reposData, usersData);

  if (isLoading) {
    return <ResultPlaceholder placeholderAmount={5} />;
  }

  if (isError) {
    return <ErrorMessage error="Couldn't load data" emoji='😭' />;
  }

  if (totalCount === 0 || sortedResults.length === 0) {
    return <ErrorMessage error='No results found' emoji='🤐' />;
  }

  return (
    <section className=' flex min-h-screen flex-col justify-start px-5 py-7  xl:px-24'>
      <Text type='h2' className='break-words py-4 text-4xl dark:text-slate-200'>
        <CountUp start={0} end={totalCount} duration={0.5} separator=',' />
        {totalCount > 1 ? ' results' : ' result'}
      </Text>
      <ul>
        {sortedResults.map((result) => {
          if ('avatar_url' in result) {
            return <UserResult key={result.id} resultData={result} />;
          }
          if ('updated_at' in result) {
            return <RepositoryResult key={result.id} resultData={result} colorData={colorData} />;
          }
          return null;
        })}
      </ul>
    </section>
  );
};
