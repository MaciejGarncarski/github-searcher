import type { IconType } from 'react-icons';

import { clsxm } from '@/lib/clsxm';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { TAG_COLORS } from '@/utils/colorsData';

type TagData = {
  Icon: IconType | string;
  value: string;
  title: string;
};

type UserTagListProps = {
  data: TagData[];
};

export const UserTagList = ({ data }: UserTagListProps) => {
  const { accentColor } = useSSRAccentColor();

  return (
    <ul className='flex flex-wrap justify-center gap-4 text-xl font-semibold md:col-span-2 md:mx-auto md:max-w-prose md:justify-self-center md:px-10 md:text-xl'>
      {data.map(({ Icon, value, title }) => {
        if (value === 'null' || value === '' || value === '@null') {
          return null;
        }
        return (
          <li
            key={title}
            className={clsxm(
              TAG_COLORS[accentColor],
              'flex items-center justify-center gap-2 rounded-md py-2 px-4 text-slate-800'
            )}
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
