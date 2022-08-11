import { motion, MotionProps } from 'framer-motion';
import { InputHTMLAttributes } from 'react';

import { clsxm } from '@/lib/clsxm';

type InputProps = {
  type: JSX.IntrinsicElements['input']['type'];
  className?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  MotionProps;

export const Input = ({ type, className, ...otherProps }: InputProps) => {
  return (
    <motion.input
      type={type}
      className={clsxm(
        'peer border-transparent bg-transparent text-xl text-white transition placeholder:text-slate-200 hover:bg-slate-600 focus:border-slate-200 dark:bg-slate-700 md:text-2xl',
        className
      )}
      {...otherProps}
    />
  );
};
