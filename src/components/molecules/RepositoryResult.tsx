import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { GoRepo } from 'react-icons/go';
import { RiStarFill } from 'react-icons/ri';
import { useQuery } from 'react-query';

import { ResultContainer } from '@/components/atoms/ResultContainer';
import { ResultDescription } from '@/components/atoms/ResultDescription';
import { ResultHeading } from '@/components/atoms/ResultHeading';
import { TagItem } from '@/components/atoms/TagItem';
import { TagsContainer } from '@/components/atoms/TagsContainer';

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
    'github language color',
    async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
      );
      return response.json();
    },
    { refetchOnWindowFocus: false, keepPreviousData: true }
  );

  if (color.isFetching) {
    return <p>loading colors...</p>;
  }

  return (
    <ResultContainer>
      <GoRepo size={25} className='mt-1' />
      <ResultHeading className='text-2xl'>{fullName}</ResultHeading>

      {description && (
        <ResultDescription italic className='w-full'>
          {description}
        </ResultDescription>
      )}
      <TagsContainer>
        <TagItem className='gap-x-1'>
          <RiStarFill />
          {stars}
        </TagItem>
        {color.data[language ?? '']?.color && (
          <TagItem className='gap-x-2'>
            <span
              style={{
                backgroundColor: color.data[language ?? '']?.color,
              }}
              className='h-3.5 w-3.5 rounded-xl lg:h-4 lg:w-4'
            ></span>
            {language}
          </TagItem>
        )}
        {license && <TagItem>{license.name}</TagItem>}
        <TagItem>Updated {dateFromNow}</TagItem>
      </TagsContainer>
    </ResultContainer>
  );
};
