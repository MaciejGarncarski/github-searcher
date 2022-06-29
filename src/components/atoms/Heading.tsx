import { ReactNode } from 'react';

type HeadingProps = {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
  children: ReactNode;
};

export const Heading = ({ type, children, className }: HeadingProps) => {
  const TagName = type ?? 'p';
  return (
    <TagName
      className={`break-all ${type !== 'p' && 'font-bold'} ${className ?? ''}`}
    >
      {children}
    </TagName>
  );
};
