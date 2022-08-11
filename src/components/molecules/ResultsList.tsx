import { useColor } from '@/hooks/useColor';

import { RepositoryResult } from '@/components/organisms/RepositoryResult';
import { UserResult } from '@/components/organisms/UserResult';

import { Repo, User } from '@/types/resultTypes';

type ResultsListProps = {
  sortedResults: (User | Repo)[];
};

export const ResultsList = ({ sortedResults }: ResultsListProps) => {
  const { data: colorData } = useColor();

  return (
    <ul className='min-h-state-messsage'>
      {sortedResults.map((result) => {
        if ('avatar_url' in result) {
          return <UserResult key={result.id} resultData={result} />;
        }
        if ('updated_at' in result) {
          return <RepositoryResult key={result.id} resultData={result} colorData={colorData} />;
        }
        return null;
      })}
    </ul>
  );
};
