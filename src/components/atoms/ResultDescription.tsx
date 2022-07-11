import { ReactNode } from 'react';

type ResultDescriptionProps = {
  italic?: boolean;
  children: ReactNode;
  className?: string;
};

export const ResultDescription = ({
  italic,
  children,
  className,
}: ResultDescriptionProps) => {
  return (
    <p
      className={` col-start-2 self-center text-lg ${
        italic && 'italic'
      } break-all ${className}`}
    >
      {children}
    </p>
  );
};
