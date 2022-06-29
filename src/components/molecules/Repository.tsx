import { formatDistanceToNowStrict, toDate } from 'date-fns';
import { RiStarFill } from 'react-icons/ri';

import { Description } from '@/components/atoms/Description';
import { ResultContainer } from '@/components/atoms/ResultContainer';
import { ResultHeading } from '@/components/atoms/ResultHeading';
import { ResultImg } from '@/components/atoms/ResultImage';

import repoImg from '@/images/repo.png';

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
      <ResultImg src={repoImg} alt='Repository' />
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
