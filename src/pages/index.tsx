import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSidePropsContext, NextPage } from 'next';

import { getRepos, getUsers } from '@/lib/queries';
import { stringGuard } from '@/utils/stringGuard';

import { Layout } from '@/components/Layout';
import { Pagination } from '@/components/molecules/Pagination';
import { ResultsList } from '@/components/organisms/ResultsList';
import { Seo } from '@/components/Seo';

import type { ApiResponse, Repo, User } from '@/types/resultTypes';

export const initialQueryString = 'typescript';

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo />
      <ResultsList />
      <Pagination />
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
  await queryClient.prefetchQuery<ApiResponse<Repo>>([`repos`, queryValues], () =>
    getRepos(...fetchArguments, 4)
  );
  await queryClient.prefetchQuery<ApiResponse<User>>([`users`, queryValues], () =>
    getUsers(...fetchArguments, 4)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
