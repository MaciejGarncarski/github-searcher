import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSidePropsContext, NextPage } from 'next';

import { getRepos, getUsers } from '@/lib/queries';

import { Layout } from '@/components/Layout';
import { ResultsPage } from '@/components/molecules/ResultsPage';
import { Seo } from '@/components/Seo';

import type { ApiResponse, RepoTypes, UserTypes } from '@/types/resultTypes';

type HomeProps = {
  initialReposData: ApiResponse<RepoTypes[]>;
  initialUsersData: ApiResponse<UserTypes[]>;
};

const initialQueryString = `Typescript`;

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
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<ApiResponse<RepoTypes> | null>(
    [`repos`, { page: page ?? 1, searchedValue: q ?? initialQueryString }],
    () => getRepos(initialQueryString, 1)
  );
  await queryClient.prefetchQuery<ApiResponse<UserTypes> | null>(
    [`users`, { page: page ?? 1, searchedValue: q ?? initialQueryString }],
    () => getUsers(initialQueryString, 1)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
