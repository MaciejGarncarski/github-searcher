import { Description } from '@/components/atoms/Description';
import { Heading } from '@/components/atoms/Heading';
import { NextImage } from '@/components/atoms/NextImage';
import { ResultContainer } from '@/components/atoms/ResultContainer';
import { ResultHeading } from '@/components/atoms/ResultHeading';

type UserProps = {
  login: string;
  fullName: string;
  avatar: string;
  bio?: string;
  location: string;
};

export const User = ({ login, fullName, avatar, bio, location }: UserProps) => {
  return (
    <ResultContainer>
      <NextImage
        src={avatar}
        width={30}
        height={30}
        layout='responsive'
        alt={`${login}'s avatar`}
        className='w-8 lg:w-8 rounded-full'
        imgClassName='rounded-3xl'
        useSkeleton
      />
      <div className='col-start-2 '>
        <ResultHeading>{fullName}</ResultHeading>
        <Heading type='p' className='text-xl'>
          {login}
        </Heading>
      </div>
      {bio && <Description italic>{bio}</Description>}
      {location && <div className='col-start-2'>{location}</div>}
    </ResultContainer>
  );
};
