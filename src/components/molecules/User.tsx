import Link from 'next/link';

import { Description } from '@/components/atoms/Description';
import { Heading } from '@/components/atoms/Heading';
import { ResultContainer } from '@/components/atoms/ResultContainer';
import { ResultHeading } from '@/components/atoms/ResultHeading';
import { ResultImg } from '@/components/atoms/ResultImage';

type UserProps = {
  login: string;
  fullName: string;
  avatar: string;
  bio?: string;
  location: string;
};

export const User = ({ login, fullName, avatar, bio, location }: UserProps) => {
  return (
    <Link href={`/user/${login}`}>
      <a className='cursor-pointer'>
        <ResultContainer>
          <ResultImg src={avatar} alt={`${login} avatar`} isUser />
          <div className='col-start-2 '>
            <ResultHeading>{fullName}</ResultHeading>
            <Heading type='p' className='text-xl'>
              {login}
            </Heading>
          </div>
          {bio && <Description italic>{bio}</Description>}
          {location && <div className='col-start-2'>{location}</div>}
        </ResultContainer>
      </a>
    </Link>
  );
};
