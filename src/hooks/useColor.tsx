import { useQuery } from '@tanstack/react-query';

import { getColors } from '@/utils/queries';

export const useColor = () => {
  const color = useQuery(['github language color'], getColors);
  return color;
};
