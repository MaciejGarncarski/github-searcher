import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { GoRepo } from 'react-icons/go';

import { useColor } from '@/hooks/useColor';

import { ResultListItem } from '@/components/atoms/RepositoryListItem';
import { ResultContainer } from '@/components/atoms/ResultContainer';
import { ResultDescription } from '@/components/atoms/ResultDescription';
import { ResultHeading } from '@/components/atoms/ResultHeading';
import { Shield } from '@/components/atoms/Shield';
import { ShieldsContainer } from '@/components/atoms/ShieldsContainer';

import { Repo } from '@/types/resultTypes';

type RepositoryResultProps = {
  resultData: Repo;
};

export const RepositoryResult = ({ resultData }: RepositoryResultProps) => {
  const { updated_at, language, name, stargazers_count, description, license } = resultData;

  const dateObject = new Date(updated_at);
  dayjs.extend(relativeTime);
  const dateFromNow = dayjs(dateObject).fromNow();

  const color = useColor();

  const RepositoryLangugage = () => {
    if (language) {
      return (
        <Shield className='gap-x-2'>
          {color.data && (
            <span
              style={{
                backgroundColor: color.data[language ?? '']?.color,
              }}
              className='h-5 w-5 rounded-xl border dark:border-white'
            ></span>
          )}
          {language}
        </Shield>
      );
    }
    return null;
  };

  return (
    <ResultListItem>
      <ResultContainer>
        <GoRepo size={32} className='mt-1' />
        <ResultHeading>{name}</ResultHeading>

        {description && <ResultDescription className='w-full'>{description}</ResultDescription>}
        <ShieldsContainer>
          <Shield className='gap-x-1'>⭐ {stargazers_count}</Shield>
          <RepositoryLangugage />
          {license && <Shield>📜 {license.name}</Shield>}
          <Shield>⏰ Updated {dateFromNow}</Shield>
        </ShieldsContainer>
      </ResultContainer>
    </ResultListItem>
  );
};
