import type { NextPage } from 'next';
import { useState } from 'react';
import { dehydrate, QueryClient } from 'react-query';

import { Seo } from '@/components/atoms/Seo';
import { Layout } from '@/components/Layout';
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

const initialQueryString = `Maciej Garncarski`;

const Home: NextPage<HomeProps> = () => {
  const [inputValue, setInputValue] = useState<string>(``);

  return (
    <Layout inputValue={inputValue} setInputValue={setInputValue}>
      <Seo />

      <SearchResults
        inputValue={inputValue}
        initialQueryString={initialQueryString}
      />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<ApiResponseType<RepoTypes> | null>(
    [`repos`, initialQueryString, { activePage: 1 }],
    () => getRepos(initialQueryString, 1)
  );
  await queryClient.prefetchQuery<ApiResponseType<UserTypes> | null>(
    [`users`, initialQueryString, { activePage: 1 }],
    () => getUsers(initialQueryString, 1)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
