import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useActivePage, useSearchedValue } from '@/hooks/useContexts';
import type { ApiResponse } from '@/utils/queries';
import { getRepos, getUsers } from '@/utils/queries';

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
  const router = useRouter();
  const { searchedValue } = useSearchedValue();
  const { activePage } = useActivePage();

  useEffect(() => {
    if (searchedValue.trim() !== '') {
      router.replace(`/?q=${searchedValue}&page=${activePage}`, undefined, {
        shallow: true,
      });
    }

    if (searchedValue.trim() === '') {
      router.replace(`/?page=${activePage}`, undefined, {
        shallow: true,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
