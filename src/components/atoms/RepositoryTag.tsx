import { ReactNode } from 'react';

type RepositoryTagProps = {
  children: ReactNode;
  className?: string;
};

export const RepositoryTag = ({ children, className }: RepositoryTagProps) => {
  return (
    <li
      className={`flex items-center rounded-md bg-gray-700 py-1 px-4 text-white shadow-md ${className}`}
    >
      {children}
    </li>
  );
};
