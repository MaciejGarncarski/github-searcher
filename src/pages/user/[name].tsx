import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { BackLink } from '@/components/atoms/BackLink';
import { Layout } from '@/components/Layout';
import { ErrorMessage } from '@/components/molecules/ErrorMessage';
import { UserProfilePlaceholder } from '@/components/molecules/UserProfilePlaceholder';
import { UserProfile } from '@/components/organisms/UserProfile';
import { Seo } from '@/components/Seo';

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;

  const ErrorUI = () => {
    return (
      <main className='text-3xl lg:text-4xl'>
        <BackLink />
        <ErrorMessage error="Couldn't load this profile" emoji='😣' />;
      </main>
    );
  };

  return (
    <Layout inputDisabled>
      <Seo templateTitle={name ? `${name}` : 'Loading Profile'} />
      <ErrorBoundary fallback={<ErrorUI />}>
        <Suspense fallback={<UserProfilePlaceholder />}>
          <UserProfile />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
};

export default ProfilePage;
