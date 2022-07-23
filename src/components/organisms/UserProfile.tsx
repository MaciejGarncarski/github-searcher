import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { GoOrganization, GoRepo } from 'react-icons/go';

import { BackLink } from '@/components/atoms/BackLink';
import { NextImage } from '@/components/atoms/NextImage';
import { ResultDescription } from '@/components/atoms/ResultDescription';
import { ResultHeading } from '@/components/atoms/ResultHeading';
import { Text } from '@/components/atoms/Text';
import { UserTagList } from '@/components/atoms/UserTagList';
import { ErrorMessage } from '@/components/molecules/ErrorMessage';
import { UserProfilePlaceholder } from '@/components/molecules/UserProfilePlaceholder';

import { UserTypes } from '@/types/responseTypes';

type UserProfileProps = {
  isLoading: boolean;
  isError: boolean;
  data: UserTypes | undefined;
};

export type TagDataType = {
  Icon: IconType | string;
  value: string;
  title: string;
};
import { placeholderVariants } from '@/components/molecules/UserProfilePlaceholder';

export const UserProfile = ({ isLoading, isError, data }: UserProfileProps) => {
  const tagsData: TagDataType[] = [
    {
      Icon: GoRepo,
      value: `${data?.public_repos}`,
      title: 'Number of repos',
    },
    {
      Icon: GoOrganization,
      value: `${data?.following} following`,
      title: 'Following',
    },
    {
      Icon: GoOrganization,
      value: `${data?.followers} followers`,
      title: 'Followers',
    },
    {
      Icon: '🏠',
      value: `${data?.location}`,
      title: 'Location',
    },
  ];

  if (isLoading) {
    return <UserProfilePlaceholder />;
  }

  if (isError || !data) {
    return (
      <main className='text-3xl lg:text-4xl'>
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
      className='mx-8 mt-12 flex min-h-page flex-col items-center gap-7 text-3xl dark:text-white lg:justify-center lg:gap-10 lg:text-4xl'
    >
      <BackLink />
      <div className='flex flex-col items-center gap-2'>
        <ResultHeading className='text-center text-4xl lg:text-5xl'>
          {data.name}
        </ResultHeading>
        <Text className='dark:text-white'>{data.login}</Text>
      </div>
      <NextImage
        src={data.avatar_url}
        alt={`${data.login}'s avatar`}
        width={200}
        height={200}
        className='h-44 w-44 drop-shadow-xl lg:h-56 lg:w-56'
        imgClassName='rounded-full'
        priority
      />
      {data.bio && (
        <ResultDescription
          italic
          className='w-full break-words px-4 text-center text-2xl lg:w-1/3 lg:break-normal'
        >
          {data.bio}
        </ResultDescription>
      )}
      <UserTagList data={tagsData} />
    </motion.main>
  );
};
