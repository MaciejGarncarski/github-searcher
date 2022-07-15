import { ReactNode } from 'react';

type ShieldProps = {
  children: ReactNode;
  className?: string;
};

export const Shield = ({ children, className }: ShieldProps) => {
  return (
    <li
      className={`flex items-center break-all rounded-md bg-gray-700 py-1 px-4 text-white shadow-md ${
        className ?? ''
      }`}
    >
      {children}
    </li>
  );
};
