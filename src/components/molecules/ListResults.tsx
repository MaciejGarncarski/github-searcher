import { Repository } from '@/components/molecules/Repository';
import { User } from '@/components/molecules/User';

import { RepoTypes, UserTypes } from '@/types/responseTypes';

type ListResultsProps = {
  totalCount: string;
  data: RepoTypes[] | UserTypes[];
};

export const ListResults = ({ totalCount, data }: ListResultsProps) => {
  return (
    <div className='mx-6 xl:mx-20 my-7 flex flex-col justify-start align-center'>
      <p className='my-4 font-bold text-2xl'>{totalCount} results</p>
      {data.map((elem) => {
        const isUserType = `login` && `name` && `avatar_url` in elem;
        const isRepoType = `updated_at` && `license` && `full_name` in elem;
        if (isUserType) {
          return (
            <User
              key={elem.id}
              login={elem.login}
              fullName={elem.name}
              avatar={elem.avatar_url}
              bio={elem.bio || ``}
              location={elem.location}
            />
          );
        } else if (isRepoType) {
          return (
            <Repository
              key={elem.id}
              fullName={elem.full_name}
              description={elem.description}
              stars={elem.stargazers_count}
              language={elem.language}
              license={elem.license}
              updatedAt={elem.updated_at}
            />
          );
        }
      })}
    </div>
  );
};
