import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { GoRepo } from 'react-icons/go';

import { ResultContainer } from '@/components/atoms/ResultContainer';
import { ResultDescription } from '@/components/atoms/ResultDescription';
import { ResultHeading } from '@/components/atoms/ResultHeading';
import { Shield } from '@/components/atoms/Shield';
import { ShieldsContainer } from '@/components/atoms/ShieldsContainer';

type RepositoryResultProps = {
  fullName: string;
  description?: string;
  stars: number;
  language?: string;
  license?: {
    name: string;
  };
  updatedAt: Date;
};

export const RepositoryResult = ({
  fullName,
  description,
  stars,
  language,
  license,
  updatedAt,
}: RepositoryResultProps) => {
  const dateObject = new Date(updatedAt);
  dayjs.extend(relativeTime);
  const dateFromNow = dayjs(dateObject).fromNow();

  const color = useQuery(
    ['github language color'],
    async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
      );
      return response.json();
    },
    { refetchOnWindowFocus: false, keepPreviousData: true }
  );

  const RepositoryLangugage = () => {
    if (language) {
      return (
        <Shield className='gap-x-2'>
          {color.data && (
            <span
              style={{
                backgroundColor: color.data[language ?? '']?.color,
              }}
              className='h-3.5 w-3.5 rounded-xl border dark:border-white lg:h-4 lg:w-4 '
            ></span>
          )}
          {language}
        </Shield>
      );
    }
    return null;
  };

  return (
    <ResultContainer>
      <GoRepo size={25} className='mt-1' />
      <ResultHeading className='text-2xl'>{fullName}</ResultHeading>

      {description && (
        <ResultDescription italic className='w-full'>
          {description}
        </ResultDescription>
      )}
      <ShieldsContainer>
        <Shield className='gap-x-1'>⭐ {stars}</Shield>
        <RepositoryLangugage />
        {license && <Shield>📜 {license.name}</Shield>}
        <Shield>⏰ Updated {dateFromNow}</Shield>
      </ShieldsContainer>
    </ResultContainer>
  );
};
