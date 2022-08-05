import type { ReactNode } from 'react';

import { clsxm } from '@/lib/clsxm';

type TextProps = {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
  children: ReactNode;
};

export const Text = ({ type = 'p', children, className }: TextProps) => {
  const TagName = type;
  return <TagName className={clsxm(className, type === 'p' && 'font-normal')}>{children}</TagName>;
};
