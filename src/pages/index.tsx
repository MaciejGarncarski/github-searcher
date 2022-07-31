import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSidePropsContext, NextPage } from 'next';

import type { ApiResponse } from '@/utils/queries';
import { getColors, getRepos, getUsers } from '@/utils/queries';

import { Layout } from '@/components/Layout';
import { SearchResults } from '@/components/molecules/SearchResults';
import { Seo } from '@/components/Seo';

import type { RepoTypes, UserTypes } from '@/types/responseTypes';

type HomeProps = {
  initialReposData: ApiResponse<RepoTypes[]>;
  initialUsersData: ApiResponse<UserTypes[]>;
};

const initialQueryString = `Typescript`;

const Home: NextPage<HomeProps> = () => {
  return (
    <Layout>
      <Seo />
      <SearchResults />
    </Layout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { q, page } = context.query;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<ApiResponse<RepoTypes> | null>(
    [`repos`, { page: page ?? 1, search: q ?? initialQueryString }],
    () => getRepos(initialQueryString, 1)
  );
  await queryClient.prefetchQuery(['github language color'], getColors);
  await queryClient.prefetchQuery<ApiResponse<UserTypes> | null>(
    [`users`, { page: page ?? 1, search: q ?? initialQueryString }],
    () => getUsers(initialQueryString, 1)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
