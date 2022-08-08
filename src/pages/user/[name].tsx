import { QueryClient } from '@tanstack/react-query';
import { dehydrate } from '@tanstack/react-query';
import { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';

import { getSingleUser } from '@/lib/queries';
import { stringGuard } from '@/utils/stringGuard';

import { Layout } from '@/components/Layout';
import { UserProfile } from '@/components/organisms/UserProfile';
import { Seo } from '@/components/Seo';

const ProfilePage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout>
      <Seo templateTitle={query.name ? `${query.name}` : 'Loading Profile'} />
      <UserProfile />
    </Layout>
  );
};

export default ProfilePage;

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const userName = stringGuard(query.name);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['users', { username: userName }], () => getSingleUser(userName));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
