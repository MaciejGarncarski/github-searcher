import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import type { IconType } from 'react-icons';
import { HiExternalLink } from 'react-icons/hi';

import { clsxm } from '@/lib/clsxm';
import { useSingleUser } from '@/hooks/useSingleUser';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { BORDER_COLORS } from '@/utils/colorsData';
import { stringGuard } from '@/utils/stringGuard';
import { getTagsData } from '@/utils/tagsData';

import { BackButton } from '@/components/atoms/buttons/BackButton';
import { NextImage } from '@/components/atoms/NextImage';
import { ResultDescription } from '@/components/atoms/ResultDescription';
import { ResultHeading } from '@/components/atoms/ResultHeading';
import { Text } from '@/components/atoms/Text';
import { UserTagList } from '@/components/atoms/UserTagList';
import { ErrorMessage } from '@/components/molecules/ErrorMessage';
import {
  placeholderVariants,
  UserProfilePlaceholder,
} from '@/components/molecules/UserProfilePlaceholder';

export type TagData = {
  Icon: IconType | string;
  value: string;
  title: string;
};

export const UserProfile = () => {
  const router = useRouter();
  const { name } = router.query;

  const userName = router.isReady ? stringGuard(name) : 'typescript';
  const { accentColor } = useSSRAccentColor();

  const { data, isError, isFetching, isLoading } = useSingleUser(userName);

  const tagsData = getTagsData(data);

  if (isLoading || isFetching || !data) {
    return <UserProfilePlaceholder />;
  }

  if (isError) {
    return (
      <main className='text-3xl md:text-4xl'>
        <BackButton />
        <ErrorMessage error="Couldn't load this profile" emoji='😣' />;
      </main>
    );
  }

  return (
    <motion.main
      variants={placeholderVariants}
      initial='initial'
      animate='animate'
      className='mt-8 flex min-h-profile flex-col items-center justify-center sm:mx-8 md:items-start  lg:mx-24 lg:px-8 xl:mx-32'
    >
      <BackButton />
      <section className='mx-6 my-6  flex flex-col justify-center gap-14 rounded-xl md:mx-auto md:my-14 md:max-w-screen-xl md:bg-slate-600 md:py-20 md:px-4 md:shadow-xl md:shadow-slate-600/40 md:dark:bg-slate-700 '>
        <div className='flex flex-col items-center justify-center gap-10 md:flex-row'>
          <NextImage
            src={data.avatar_url}
            alt={`${data.login}'s avatar`}
            width={200}
            height={200}
            className='flex items-center justify-center  md:justify-end '
            imgClassName={clsxm(
              'h-44 w-44 rounded-full border-4 bg-slate-200',
              BORDER_COLORS[accentColor]
            )}
            priority
          />
          <div className='flex flex-col items-center justify-center gap-2 justify-self-start md:items-start '>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={data.html_url}
              target='_blank'
              rel='noreferrer noopener'
            >
              <ResultHeading className='flex items-center gap-2 break-normal break-words text-center text-4xl underline md:text-left md:text-5xl'>
                {data.name}
                <span className='mt-2 text-slate-600 dark:text-slate-200 md:text-slate-200'>
                  <HiExternalLink />
                </span>
              </ResultHeading>
            </motion.a>
            <Text className='text-3xl font-semibold md:text-white'>@{data.login}</Text>
          </div>
        </div>

        {data.bio && (
          <ResultDescription className='justify-self-center text-center text-3xl md:col-start-1 md:col-end-3 md:mx-28 md:max-w-prose md:break-normal md:text-white'>
            {data.bio}
          </ResultDescription>
        )}
        <UserTagList data={tagsData} />
      </section>
    </motion.main>
  );
};
