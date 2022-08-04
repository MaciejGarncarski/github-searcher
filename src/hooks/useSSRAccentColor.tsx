import { useEffect, useState } from 'react';

import { useSettings } from '@/hooks/useContexts';

import type { Color } from '@/types/types';

export const useSSRAccentColor = () => {
  const { accentColor: contextAccentColor } = useSettings();

  const [accentColor, setAccentColor] = useState<Color>('blue');

  useEffect(() => {
    setAccentColor(contextAccentColor);
  }, [contextAccentColor]);

  return { accentColor };
};
