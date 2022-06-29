import Image from 'next/image';
import repoImg from '../../images/repo.png';
import starImg from '../../images/star.jpg';
import { formatDistanceToNowStrict, toDate } from 'date-fns';

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
    <div className="grid w-full min-h-user py-4 grid-cols-user grid-rows-3 gap-x-3 gap-y-2 border-t-2 border-slate-300 ">
      <Image width={30} height={30} src={repoImg} alt="repository" />
      <h2 className="text-blue-600">{fullName}</h2>
      <p className="col-start-2 text-slate-500">{description || ``}</p>
      <div className="col-start-2 items-center flex gap-4 flex-wrap">
        <div className="flex items-center gap-1">
          <Image width={18} height={18} src={starImg} alt="star" />
          {stars}
        </div>
        {language && <span>{language}</span>}
        {license && <span>{license.name}</span>}
        <span>{timeSinceUpdate}</span>
      </div>
    </div>
  );
};
