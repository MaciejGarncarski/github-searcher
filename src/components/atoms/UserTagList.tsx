import { useEffect, useState } from 'react';

import { clsxm } from '@/lib/clsxm';
import { useSettings } from '@/hooks/useContexts';
import { tagColors } from '@/utils/colorsConfig';

import type { TagData } from '@/components/organisms/UserProfile';

type UserTagListProps = {
  data: TagData[];
};

export const UserTagList = ({ data }: UserTagListProps) => {
  const { accentColor } = useSettings();

  const [color, setColor] = useState('blue');

  useEffect(() => {
    setColor(accentColor);
  }, [accentColor]);

  return (
    <ul className='flex flex-wrap justify-center gap-4 text-xl font-semibold md:col-span-2 md:mx-auto md:max-w-prose md:justify-self-center md:text-xl'>
      {data.map(({ Icon, value, title }) => {
        if (value === 'null' || value === '') {
          return null;
        }
        return (
          <li
            key={title}
            className={clsxm(
              tagColors[color],
              'flex items-center justify-center gap-2 rounded-md py-2 px-4 text-slate-800 shadow-md shadow-slate-600/40'
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
