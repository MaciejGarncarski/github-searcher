import Link from 'next/link';
import { Suspense } from 'react';

import { NextImage } from '@/components/atoms/NextImage';
import { ResultListItem } from '@/components/atoms/RepositoryListItem';
import { ResultContainer } from '@/components/atoms/ResultContainer';
import { ResultDescription } from '@/components/atoms/ResultDescription';
import { ResultHeading } from '@/components/atoms/ResultHeading';
import { Shield } from '@/components/atoms/Shield';
import { ShieldsContainer } from '@/components/atoms/ShieldsContainer';
import { Text } from '@/components/atoms/Text';

type UserResultProps = {
  login: string;
  fullName: string;
  avatar: string;
  bio?: string;
  location: string;
};

export const UserResult = ({
  login,
  fullName,
  avatar,
  bio,
  location,
}: UserResultProps) => {
  const whileHover = { scale: 1.02 };

  return (
    <ResultListItem whileHover={whileHover}>
      <Link href={`/user/${login}`} passHref>
        <a>
          <ResultContainer>
            <Suspense fallback={<p>loading...</p>}>
              <NextImage
                src={avatar}
                width={176}
                height={176}
                alt={`${login}'s avatar`}
                className='w-8 rounded-full lg:w-8'
                imgClassName='rounded-3xl'
                priority={true}
              />
            </Suspense>
            <div className='col-start-2 '>
              <ResultHeading className='text-2xl'>{fullName}</ResultHeading>
              <Text type='p' className='text-xl dark:text-white'>
                {login}
              </Text>
            </div>
            {bio && <ResultDescription italic>{bio}</ResultDescription>}
            <ShieldsContainer>
              {location && <Shield>🏠 {location}</Shield>}
            </ShieldsContainer>
          </ResultContainer>
        </a>
      </Link>
    </ResultListItem>
  );
};
