import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSidePropsContext, NextPage } from 'next';

import { getRepos, getUsers } from '@/lib/queries';
import { stringGuard } from '@/utils/stringGuard';

import { Layout } from '@/components/Layout';
import { ResultsPage } from '@/components/molecules/ResultsPage';
import { Seo } from '@/components/Seo';

import type { ApiResponse, Repo, User } from '@/types/resultTypes';

type HomeProps = {
  initialReposData: ApiResponse<Repo[]>;
  initialUsersData: ApiResponse<User[]>;
};

const Home: NextPage<HomeProps> = () => {
  return (
    <Layout>
      <Seo />
      <ResultsPage />
    </Layout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { q, page } = context.query;

  const pageNumber = typeof page === 'number' ? page : 1;
  const searchedValue = stringGuard(q);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<ApiResponse<Repo> | null>(
    ['repos', { page: pageNumber, searchedValue: searchedValue }],
    () => getRepos('searchedValue', 1)
  );
  await queryClient.prefetchQuery<ApiResponse<User> | null>(
    ['users', { page: pageNumber, searchedValue: searchedValue }],
    () => getUsers(searchedValue, 1)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
