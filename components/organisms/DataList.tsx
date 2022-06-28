import { RepoTypes, UserTypes } from '../../types/responseTypes';
import { StateMessage } from '../atoms/StateMessage';
import { User } from '../molecules/User';

type DataListProps = {
  totalCount: string;
  data: RepoTypes[] | UserTypes[];
  fetchError: boolean;
  fetchLoading: boolean;
};

export const DataList = ({ totalCount, data, fetchError, fetchLoading }: DataListProps) => {
  if (fetchLoading) {
    return <StateMessage message="Loading" />;
  }
  if (fetchError) {
    return <StateMessage message="Error" />;
  }
  return (
    <div className="mx-8 lg:mx-20 my-7 flex flex-col justify-start align-center">
      <p className="my-4 font-bold text-2xl">{totalCount} results</p>
      {data.map((elem) => {
        if ('message' && 'login' && 'name' && 'avatar_url' && 'bio' && 'location' in elem) {
          if (elem.login) {
            return (
              <User
                key={elem.id}
                login={elem.login}
                fullName={elem.name}
                avatar={elem.avatar_url}
                bio={elem.bio || ''}
                location={elem.location}
              />
            );
          }
        }
      })}
    </div>
  );
};
