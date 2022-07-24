import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { NextPage } from 'next';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Layout } from '@/components/Layout';
import { ErrorMessage } from '@/components/molecules/ErrorMessage';
import { ResultPlaceholder } from '@/components/molecules/ResultPlaceholder';
import { SearchResults } from '@/components/molecules/SearchResults';
import { Seo } from '@/components/Seo';

import { getColors, getRepos, getUsers } from '@/pages/api/queries';

import type {
  ApiResponseType,
  RepoTypes,
  UserTypes,
} from '@/types/responseTypes';

type HomeProps = {
  initialReposData: ApiResponseType<RepoTypes[]>;
  initialUsersData: ApiResponseType<UserTypes[]>;
};

const initialQueryString = `Typescript`;

const Home: NextPage<HomeProps> = () => {
  return (
    <Layout>
      <Seo />
      <ErrorBoundary
        fallback={<ErrorMessage error="Couldn't load data" emoji='😭' />}
      >
        <Suspense fallback={<ResultPlaceholder placeholderAmount={4} />}>
          <SearchResults />
        </Suspense>
      </ErrorBoundary>
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
  await queryClient.prefetchQuery(['github language color'], getColors);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
