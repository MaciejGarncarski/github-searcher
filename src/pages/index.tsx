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

export const initialQueryString = 'typescript';

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

  const routerQ = stringGuard(q).trim() === '' ? initialQueryString : stringGuard(q);
  const routerPage = typeof page === 'string' ? parseInt(page, 10) : 1;

  const queryValues = {
    page: routerPage ?? 1,
    searchedValue: routerQ,
  };

  const fetchArguments = [routerQ, routerPage ?? 1] as const;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<ApiResponse<Repo> | null>([`repos`, queryValues], () =>
    getRepos(...fetchArguments)
  );
  await queryClient.prefetchQuery<ApiResponse<User> | null>([`users`, queryValues], () =>
    getUsers(...fetchArguments)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
