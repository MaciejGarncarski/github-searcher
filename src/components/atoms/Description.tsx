import { ReactNode } from 'react';

type DescriptionProps = {
  italic?: boolean;
  children: ReactNode;
};

export const Description = ({ italic, children }: DescriptionProps) => {
  return (
    <p className={`col-start-2 self-center text-lg ${italic && 'italic'} `}>
      {children}
    </p>
  );
};
