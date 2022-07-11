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
  Icon: IconType;
  value: string;
  title: string;
  key: number;
};

export const UserProfile = ({ isLoading, isError, data }: UserProfileProps) => {
  const tagsData: TagDataType[] = [
    {
      Icon: GoRepo,
      value: `${data?.public_repos}`,
      title: 'Number of repos',
      key: 1,
    },
    {
      Icon: GoOrganization,
      value: `${data?.following} following`,
      title: 'Following',
      key: 2,
    },
    {
      Icon: GoOrganization,
      value: `${data?.followers} followers`,
      title: 'Followers',
      key: 3,
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
    <main className='flex my-10 min-h-page text-3xl lg:text-4xl flex-col gap-6 lg:gap-8 items-center justify-center'>
      <BackLink />
      <div className='flex flex-col items-center gap-2'>
        <ResultHeading className='text-4xl lg:text-5xl'>
          {data.name}
        </ResultHeading>
        <Text>{data.login}</Text>
      </div>
      <NextImage
        src={data.avatar_url}
        alt={`${data.login}'s avatar`}
        width={200}
        height={200}
        className='w-44 h-44 lg:w-56 lg:h-56 drop-shadow-xl'
        imgClassName='rounded-full'
      />
      <ResultDescription
        italic
        className='w-72 lg:w-2/5 text-center text-2xl break-words'
      >
        {data.bio}
      </ResultDescription>
      <UserTagList data={tagsData} />
    </main>
  );
};
