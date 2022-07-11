import type { TagDataType } from '@/components/organisms/UserProfile';

type UserTagListProps = {
  data: TagDataType[];
};

export const UserTagList = ({ data }: UserTagListProps) => {
  return (
    <ul className='flex justify-center gap-4 flex-wrap text-xl lg:text-2xl'>
      {data.map(({ Icon, value, key, title }) => {
        return (
          <li
            key={key}
            className='flex gap-2 justify-center items-center shadow-md bg-gray-700 py-2 px-4 rounded-md text-white'
            title={title}
          >
            <Icon />
            {value}
          </li>
        );
      })}
    </ul>
  );
};
