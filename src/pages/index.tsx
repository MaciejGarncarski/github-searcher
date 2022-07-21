import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { NextPage } from 'next';

import { Layout } from '@/components/Layout';
import { SearchResults } from '@/components/molecules/SearchResults';
import { Seo } from '@/components/Seo';

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

export const initialQueryString = `Typescript`;

const Home: NextPage<HomeProps> = () => {
  return (
    <Layout>
      <Seo />
      <SearchResults initialQueryString={initialQueryString} />
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
  await queryClient.prefetchQuery(['github language color'], async () => {
    const response = await fetch(
      'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
    );
    return await response.json();
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
