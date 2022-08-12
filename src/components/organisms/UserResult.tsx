import { clsxm } from '@/lib/clsxm';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { BORDER_COLORS } from '@/utils/colorsData';

import { NextImage } from '@/components/atoms/NextImage';
import { ResultListItem } from '@/components/atoms/RepositoryListItem';
import { ResultContainer } from '@/components/atoms/ResultContainer';
import { ResultDescription } from '@/components/atoms/ResultDescription';
import { ResultHeading } from '@/components/atoms/ResultHeading';
import { Shield } from '@/components/atoms/Shield';
import { ShieldsContainer } from '@/components/atoms/ShieldsContainer';
import { Text } from '@/components/atoms/Text';

import { User } from '@/types/resultTypes';

type UserResultProps = {
  resultData: User;
};

export const UserResult = ({ resultData }: UserResultProps) => {
  const { accentColor } = useSSRAccentColor();
  const { bio, login, avatar_url, name, location } = resultData;
  const userDescription = bio?.substring(0, 200) + '\u2026';

  return (
    <ResultListItem>
      <ResultContainer>
        <NextImage
          src={avatar_url}
          width={36}
          height={36}
          alt={`${login}'s avatar`}
          className='w-9 '
          imgClassName={clsxm(BORDER_COLORS[accentColor], 'rounded-3xl border bg-slate-500')}
          priority={true}
        />
        <div className='col-start-2 row-span-full '>
          <ResultHeading href={`/user/${login}`} className='flex items-center gap-3 underline'>
            {name ? name : `@${login}`}
          </ResultHeading>
          {name && (
            <Text type='p' className='text-2xl dark:text-white'>
              @{login}
            </Text>
          )}
        </div>
        {bio && <ResultDescription>{bio.length > 120 ? userDescription : bio}</ResultDescription>}
        <ShieldsContainer>{location && <Shield>🏠 {location}</Shield>}</ShieldsContainer>
      </ResultContainer>
    </ResultListItem>
  );
};
