import { ReactNode } from 'react';

type TagItemProps = {
  children: ReactNode;
  className?: string;
};

export const TagItem = ({ children, className }: TagItemProps) => {
  return (
    <li
      className={`flex items-center rounded-md bg-gray-700 py-1 px-4 text-white shadow-md ${className}`}
    >
      {children}
    </li>
  );
};
