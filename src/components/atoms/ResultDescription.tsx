import { ReactNode } from 'react';

type ResultDescriptionProps = {
  italic?: boolean;
  children: ReactNode;
};

export const ResultDescription = ({
  italic,
  children,
}: ResultDescriptionProps) => {
  return (
    <p className={`col-start-2 self-center text-lg ${italic && 'italic'} `}>
      {children}
    </p>
  );
};
