import Link from 'next/link';

import { NextImage } from '@/components/atoms/NextImage';
import { ResultContainer } from '@/components/atoms/ResultContainer';
import { ResultDescription } from '@/components/atoms/ResultDescription';
import { ResultHeading } from '@/components/atoms/ResultHeading';
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
  return (
    <li>
      <Link href={`/user/${login}`} passHref>
        <a>
          <ResultContainer>
            <NextImage
              src={avatar}
              width={30}
              height={30}
              layout='responsive'
              alt={`${login}'s avatar`}
              className='w-8 rounded-full lg:w-8'
              imgClassName='rounded-3xl'
              useSkeleton
            />
            <div className='col-start-2 '>
              <ResultHeading className='text-2xl'>{fullName}</ResultHeading>
              <Text type='p' className='text-xl'>
                {login}
              </Text>
            </div>
            {bio && <ResultDescription italic>{bio}</ResultDescription>}
            {location && <div className='col-start-2'>{location}</div>}
          </ResultContainer>
        </a>
      </Link>
    </li>
  );
};
