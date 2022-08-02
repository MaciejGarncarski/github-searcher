import dayjs from 'dayjs';
import { GoOrganization, GoRepo } from 'react-icons/go';

import { UserTypes } from '@/types/responseTypes';

export const getTagsData = (data: UserTypes | undefined) => {
  const dateObject = new Date(data?.created_at ?? new Date());
  const createdAt = dayjs(dateObject).format('YYYY-MM-DD');

  const repos = data?.public_repos === 1 ? 'repo' : 'repos';

  const tagsData = [
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
      title: 'Joined',
    },
    {
      Icon: '👷‍♂️',
      value: `${data?.hireable ? 'Hireable' : ''}`,
      title: 'Hireable',
    },
  ];

  return tagsData;
};
