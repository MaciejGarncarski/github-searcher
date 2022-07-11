import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { Layout } from '@/components/Layout';
import { UserProfile } from '@/components/organisms/UserProfile';
import { Seo } from '@/components/Seo';

import { UserTypes } from '@/types/responseTypes';

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;

  const fetchHeaders = {
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}` },
  };

  const { data, isLoading, isFetching, isError } = useQuery(
    ['users', { username: name }],
    async (): Promise<UserTypes> => {
      const resp = await fetch(
        `https://api.github.com/users/${name ?? 'MaciejGarncarski'}`,
        fetchHeaders
      );
      if (resp.ok) {
        return resp.json();
      }
      throw new Error("Could'nt fetch user profile");
    },
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Layout inputDisabled>
      <Seo templateTitle={name ? `${name}` : 'Loading Profile'} />
      <UserProfile
        data={data}
        isError={isError}
        isLoading={isLoading || isFetching}
      />
    </Layout>
  );
};

export default ProfilePage;
