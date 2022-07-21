import type { TagDataType } from '@/components/organisms/UserProfile';

type UserTagListProps = {
  data: TagDataType[];
};

export const UserTagList = ({ data }: UserTagListProps) => {
  return (
    <ul className='flex flex-wrap justify-center gap-4 text-xl lg:text-2xl'>
      {data.map(({ Icon, value, title }) => {
        if (value === 'null') {
          return null;
        }
        return (
          <li
            key={title}
            className='flex items-center justify-center gap-2 rounded-md bg-gray-700 py-2 px-4 text-white shadow-md dark:bg-slate-600'
            title={title}
          >
            {typeof Icon === 'string' ? Icon : <Icon />}
            {value}
          </li>
        );
      })}
    </ul>
  );
};
