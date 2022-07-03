import { formatDistanceToNowStrict, toDate } from 'date-fns';
import { GoRepo } from 'react-icons/go';
import { RiStarFill } from 'react-icons/ri';
import { useQuery } from 'react-query';

import { Description } from '@/components/atoms/Description';
import { ResultContainer } from '@/components/atoms/ResultContainer';
import { ResultHeading } from '@/components/atoms/ResultHeading';

type RepositoryProps = {
  fullName: string;
  description?: string;
  stars: number;
  language?: string;
  license?: {
    name: string;
  };
  updatedAt: Date;
};

export const Repository = ({
  fullName,
  description,
  stars,
  language,
  license,
  updatedAt,
}: RepositoryProps) => {
  const dateObject = new Date(updatedAt);
  const date = toDate(dateObject);
  const timeSinceUpdate = formatDistanceToNowStrict(date, { addSuffix: true });

  const color = useQuery(
    'github language color',
    async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
      );
      return response.json();
    },
    { refetchOnWindowFocus: false }
  );

  if (color.isFetching) {
    return <p>loading colors...</p>;
  }

  return (
    <ResultContainer>
      <GoRepo size={25} className='mt-1' />
      <ResultHeading>{fullName}</ResultHeading>

      {description && <Description italic>{description}</Description>}
      <ul className='col-start-2 items-center flex gap-x-4 flex-wrap'>
        <li className='flex items-center gap-1'>
          <RiStarFill />
          {stars}
        </li>
        {color.data && (
          <li className='flex items-center gap-1'>
            <span
              style={{
                backgroundColor:
                  color.data[language ?? '']?.color ?? 'transparent',
              }}
              className='w-3 h-3 rounded-xl'
            ></span>
            {language}
          </li>
        )}
        {license && <li>{license.name}</li>}
        <li>Updated {timeSinceUpdate}</li>
      </ul>
    </ResultContainer>
  );
};
