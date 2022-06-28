import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Header } from '../components/organisms/Header';
import { DataList } from '../components/organisms/DataList';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { useDebounce } from '../hooks/useDebounce';
import type { RepoTypes, UserTypes, apiResponseType } from '../types/responseTypes';
import { getRepos, getUsers, returnDataType } from './api/queries';
import { PaginationList } from '../components/molecules/PaginationList';

interface HomeProps {
  initialReposData: apiResponseType<RepoTypes[]>;
  initialUsersData: apiResponseType<UserTypes[]>;
}

const initialQueryString = 'Jay';

const Home: NextPage<HomeProps> = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [activePage, setActivePage] = useState<number>(1);
  const [dataTest, setDataTest] = useState<UserTypes[] | RepoTypes[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const debouncedSearch = useDebounce(inputValue === '' ? initialQueryString : inputValue, 2000);

  const defaultQueryOptions = {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  };

  const fetchRepos = useQuery<returnDataType<RepoTypes> | null, Error>(
    ['repos', debouncedSearch, { activePage: activePage }],
    () => getRepos(debouncedSearch, activePage),
    {
      ...defaultQueryOptions,
    }
  );

  const fetchUsers = useQuery<returnDataType<UserTypes> | null, Error>(
    ['users', debouncedSearch, { activePage: activePage }],
    () => getUsers(debouncedSearch, activePage),
    {
      ...defaultQueryOptions,
    }
  );

  useEffect(() => {
    if (fetchRepos.data && fetchUsers.data) {
      const totalCount = fetchUsers.data?.totalCount + fetchRepos.data.totalCount;
      setTotalCount(totalCount);
      if (fetchUsers.data.translatedData && fetchRepos.data.translatedData) {
        const mergedData = [...fetchUsers.data.translatedData, ...fetchRepos.data.translatedData] as UserTypes[] | RepoTypes[];
        const sortedData = mergedData.sort((a, b) => a.id - b.id);
        setDataTest(sortedData);
        console.log(fetchUsers.data);
      }
    }
  }, [fetchRepos.data, fetchUsers.data]);

  return (
    <div>
      <Head>
        <title>Github Api</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header inputValue={inputValue} setInputValue={setInputValue} />
      <DataList totalCount={totalCount.toLocaleString('en-US')} data={dataTest} />
      <PaginationList activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<returnDataType<RepoTypes> | null>(['repos', initialQueryString, { activePage: 1 }], () =>
    getRepos(initialQueryString, 1)
  );
  await queryClient.prefetchQuery<returnDataType<UserTypes> | null>(['users', initialQueryString, { activePage: 1 }], () =>
    getUsers(initialQueryString, 1)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
