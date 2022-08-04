import dayjs from 'dayjs';
import { BsTwitter } from 'react-icons/bs';
import { GoOrganization, GoRepo } from 'react-icons/go';

import { User } from '@/types/resultTypes';

export const getTagsData = (data: User | undefined) => {
  const dateObject = new Date(data?.created_at ?? new Date());
  const createdAt = dayjs(dateObject).format('YYYY-MM-DD');

  const repos = data?.public_repos === 1 ? 'repo' : 'repos';

  const TAGS_DATA = [
    {
      Icon: GoRepo,
      value: `${data?.public_repos} ${repos}`,
      title: 'Number of repos',
    },
    {
      Icon: GoOrganization,
      value: `${data?.following} following`,
      title: 'Following',
    },
    {
      Icon: GoOrganization,
      value: `${data?.followers} followers`,
      title: 'Followers',
    },
    {
      Icon: '🏠',
      value: `${data?.location}`,
      title: 'Location',
    },
    {
      Icon: '⏰',
      value: `Joined: ${createdAt}`,
      title: 'Joined at',
    },
    {
      Icon: BsTwitter,
      value: `@${data?.twitter_username}`,
      title: 'Twitter',
    },
    {
      Icon: '👷‍♂️',
      value: `${data?.hireable ? 'Hireable' : ''}`,
      title: 'Hireable',
    },
  ];

  return TAGS_DATA;
};
