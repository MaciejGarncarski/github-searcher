import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';

import { useUser } from '@/hooks/useUser';
import { getTagsData } from '@/utils/getTagsData';
import { StringGuard } from '@/utils/StringGuard';

import { BackLink } from '@/components/atoms/BackLink';
import { NextImage } from '@/components/atoms/NextImage';
import { ResultDescription } from '@/components/atoms/ResultDescription';
import { ResultHeading } from '@/components/atoms/ResultHeading';
import { Text } from '@/components/atoms/Text';
import { UserTagList } from '@/components/atoms/UserTagList';
import { ErrorMessage } from '@/components/molecules/ErrorMessage';
import {
  placeholderVariants,
  UserProfilePlaceholder,
} from '@/components/molecules/UserProfilePlaceholder';

export type TagData = {
  Icon: IconType | string;
  value: string;
  title: string;
};

export const UserProfile = () => {
  const { query, isReady } = useRouter();
  const userName = isReady ? StringGuard(query.name) : 'typescript';

  const { data, isError, isFetching, isLoading } = useUser(
    userName ?? 'typescript'
  );

  const tagsData = getTagsData(data);

  if (isLoading || isFetching || !isReady) {
    return <UserProfilePlaceholder />;
  }

  if (!data || isError) {
    return (
      <main className='text-3xl md:text-4xl'>
        <BackLink />
        <ErrorMessage error="Couldn't load this profile" emoji='😣' />;
      </main>
    );
  }

  return (
    <motion.main
      variants={placeholderVariants}
      initial='initial'
      animate='animate'
      className='mx-8 mt-8 flex min-h-profile flex-col items-center justify-center md:mx-auto md:max-w-6xl md:items-start md:px-8'
    >
      <BackLink />
      <div className='mx-auto my-6 flex flex-col justify-center gap-y-14 gap-x-6 rounded-xl py-10 md:grid md:max-w-screen-xl md:grid-cols-profile md:place-content-center md:bg-slate-700 md:px-20 md:shadow-xl '>
        <NextImage
          src={data.avatar_url}
          alt={`${data.login}'s avatar`}
          width={200}
          height={200}
          className='flex items-center justify-center drop-shadow-xl md:justify-end '
          imgClassName='h-44 w-44 rounded-full'
          priority
        />
        <div className='flex flex-col items-center justify-center gap-2 justify-self-start md:items-start '>
          <ResultHeading className='text-4xl md:break-normal md:break-words md:text-5xl'>
            {data.name}
          </ResultHeading>
          <Text className='text-3xl font-semibold md:text-white'>
            @{data.login}
          </Text>
        </div>
        {data.bio && (
          <ResultDescription className='justify-self-center text-center text-3xl md:col-start-1 md:col-end-3 md:mx-28 md:max-w-prose md:break-normal md:text-white'>
            {data.bio}
          </ResultDescription>
        )}
        <UserTagList data={tagsData} />
      </div>
    </motion.main>
  );
};
