import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { useDebounce } from '@/hooks/useDebounce';

import { StateInformation } from '@/components/atoms/StateInformation';
import { ListResults } from '@/components/molecules/ListResults';
import { Pagination } from '@/components/molecules/Pagination';

import { getRepos, getUsers } from '@/pages/api/queries';

import type {
  ApiResponseType,
  RepoTypes,
  UserTypes,
} from '@/types/responseTypes';

type SearchResultsProps = {
  inputValue: string;
  initialQueryString: string;
};

const defaultQueryOptions = {
  refetchOnWindowFocus: false,
  keepPreviousData: true,
};

export const SearchResults = ({
  inputValue,
  initialQueryString,
}: SearchResultsProps) => {
  const [dataTest, setDataTest] = useState<UserTypes[] | RepoTypes[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(1);

  const debouncedSearch = useDebounce(
    inputValue === `` ? initialQueryString : inputValue,
    1000
  );

  const fetchRepos = useQuery<ApiResponseType<RepoTypes> | null, Error>(
    [`repos`, debouncedSearch, { activePage: activePage }],
    () => getRepos(debouncedSearch, activePage),
    {
      ...defaultQueryOptions,
    }
  );

  const fetchUsers = useQuery<ApiResponseType<UserTypes> | null, Error>(
    [`users`, debouncedSearch, { activePage: activePage }],
    () => getUsers(debouncedSearch, activePage),
    {
      ...defaultQueryOptions,
    }
  );

  useEffect(() => {
    if (fetchRepos.data && fetchUsers.data) {
      const totalCount =
        fetchUsers.data?.totalCount + fetchRepos.data.totalCount;
      setTotalCount(totalCount);
      if (fetchUsers.data.translatedData && fetchRepos.data.translatedData) {
        const mergedData = [
          ...fetchUsers.data.translatedData,
          ...fetchRepos.data.translatedData,
        ] as UserTypes[] | RepoTypes[];
        const sortedData = mergedData.sort((a, b) => a.id - b.id);
        setDataTest(sortedData);
      }
    }
  }, [fetchRepos.data, fetchUsers.data]);

  const isDataFetching = fetchRepos.isFetching || fetchUsers.isFetching;
  const isDataError = fetchRepos.isError || fetchUsers.isError;

  if (isDataFetching) {
    return <StateInformation>Loading data...</StateInformation>;
  }
  if (isDataError) {
    return (
      <StateInformation>Error occured while loading data</StateInformation>
    );
  }

  return (
    <>
      <ListResults
        totalCount={totalCount.toLocaleString(`en-US`)}
        data={dataTest}
      />
      <Pagination
        totalCount={totalCount}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </>
  );
};
