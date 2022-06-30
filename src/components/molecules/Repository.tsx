import { formatDistanceToNowStrict, toDate } from 'date-fns';
import { GoRepo } from 'react-icons/go';
import { RiStarFill } from 'react-icons/ri';

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

  return (
    <ResultContainer>
      <GoRepo size={25} className='mt-1' />
      <ResultHeading>{fullName}</ResultHeading>

      {description && <Description>{description}</Description>}
      <div className='col-start-2 items-center flex gap-4 flex-wrap'>
        <div className='flex items-center gap-1'>
          <RiStarFill />
          {stars}
        </div>
        {language && <span>{language}</span>}
        {license && <span>{license.name}</span>}
        <span>{timeSinceUpdate}</span>
      </div>
    </ResultContainer>
  );
};
