import { RepoTypes, UserTypes } from '../../types/responseTypes';
import { User } from '../molecules/User';

type DataListProps = {
  totalCount: string;
  data: RepoTypes[] | UserTypes[];
};

export const DataList = ({ totalCount, data }: DataListProps) => {
  return (
    <div className="mx-20 my-7 flex flex-col justify-start align-center">
      <p className="my-4 font-bold text-2xl">{totalCount} results</p>
      {data.map((elem: UserTypes | RepoTypes) => {
        if ('message' && 'login' && 'name' && 'avatar_url' && 'bio' && 'location' in elem) {
          if (elem.message) {
            return <p>API error</p>;
          }
          if (elem.login) {
            return (
              <User key={elem.id} login={elem.login} fullName={elem.name} avatar={elem.avatar_url} bio={elem.bio || ''} location={elem.location} />
            );
          }
        }
      })}
    </div>
  );
};
