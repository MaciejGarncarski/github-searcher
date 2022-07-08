import { NextImage } from '@/components/atoms/NextImage';
import { ResultContainer } from '@/components/atoms/ResultContainer';
import { ResultDescription } from '@/components/atoms/ResultDescription';
import { ResultHeading } from '@/components/atoms/ResultHeading';
import { Text } from '@/components/atoms/Text';

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
        <Text type='p' className='text-xl'>
          {login}
        </Text>
      </div>
      {bio && <ResultDescription italic>{bio}</ResultDescription>}
      {location && <div className='col-start-2'>{location}</div>}
    </ResultContainer>
  );
};
