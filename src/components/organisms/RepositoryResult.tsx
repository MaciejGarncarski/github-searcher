import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { GoRepo } from 'react-icons/go';
import { HiExternalLink } from 'react-icons/hi';

import { ResultListItem } from '@/components/atoms/RepositoryListItem';
import { ResultContainer } from '@/components/atoms/ResultContainer';
import { ResultDescription } from '@/components/atoms/ResultDescription';
import { ResultHeading } from '@/components/atoms/ResultHeading';
import { Shield } from '@/components/atoms/Shield';
import { ShieldsContainer } from '@/components/atoms/ShieldsContainer';

import { Repo } from '@/types/resultTypes';

type ColorResponse = {
  color: string;
  url: string;
};

type Color = Record<string, ColorResponse>;

type RepositoryResultProps = {
  resultData: Repo;
  colorData: Color | undefined;
};

export const RepositoryResult = ({ resultData, colorData }: RepositoryResultProps) => {
  const { updated_at, language, name, stargazers_count, description, license, owner } = resultData;

  const dateObject = new Date(updated_at);
  dayjs.extend(relativeTime);
  const dateFromNow = dayjs(dateObject).fromNow();

  const RepositoryLangugage = () => {
    if (language) {
      return (
        <Shield className='gap-x-2'>
          {colorData && (
            <span
              style={{
                backgroundColor: colorData[language]?.color,
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
        <a
          href={`https://github.com/${owner.login}/${name}`}
          target='_blank'
          rel='noreferrer noopener'
        >
          <ResultHeading className='flex items-center gap-2 underline'>
            {name}
            <HiExternalLink className='text-slate-700 transition-colors dark:text-slate-200' />
          </ResultHeading>
        </a>

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
