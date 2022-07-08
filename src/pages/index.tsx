import type { NextPage } from 'next';
import { useState } from 'react';
import { dehydrate, QueryClient } from 'react-query';

import { Seo } from '@/components/atoms/Seo';
import { Layout } from '@/components/organisms/Layout';
import { SearchResults } from '@/components/organisms/SearchResults';

import { getRepos, getUsers } from '@/pages/api/queries';

import type {
  ApiResponseType,
  RepoTypes,
  UserTypes,
} from '@/types/responseTypes';

interface HomeProps {
  initialReposData: ApiResponseType<RepoTypes[]>;
  initialUsersData: ApiResponseType<UserTypes[]>;
}

const initialQueryString = `JavaScript`;

const Home: NextPage<HomeProps> = () => {
  const [searchedValue, setSearchedValue] = useState<string>('');
  return (
    <Layout setSearchedValue={setSearchedValue}>
      <Seo />

      <SearchResults
        searchedValue={searchedValue}
        initialQueryString={initialQueryString}
      />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<ApiResponseType<RepoTypes> | null>(
    [`repos`, { page: 1, search: initialQueryString }],
    () => getRepos(initialQueryString, 1)
  );
  await queryClient.prefetchQuery<ApiResponseType<UserTypes> | null>(
    [`users`, { page: 1, search: initialQueryString }],
    () => getUsers(initialQueryString, 1)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
