import { QueryClient } from '@tanstack/react-query';
import { dehydrate } from '@tanstack/react-query';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import { getSingleUser } from '@/utils/queries';
import { StringGuard } from '@/utils/StringGuard';

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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const userName = StringGuard(query.name);

  if (!userName) {
    return {
      redirect: '/',
      props: {},
    };
  }

  const queryClient = new QueryClient();
  const fetchHeaders = {
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}` },
  };

  await queryClient.prefetchQuery(['users', { username: userName }], () =>
    getSingleUser(userName, fetchHeaders)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
