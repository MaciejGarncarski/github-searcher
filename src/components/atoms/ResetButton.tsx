import { IoMdClose } from 'react-icons/io';

import { clsxm } from '@/lib/clsxm';

type ResetButtonProps = {
  inputValue: string;
};

export const ResetButton = ({ inputValue }: ResetButtonProps) => {
  return (
    <button
      type='reset'
      data-testid='reset-btn'
      disabled={inputValue === '' ? true : false}
      className={clsxm(
        'rounded-sm  border-0 px-3 text-white enabled:bg-slate-500 enabled:transition enabled:hover:rounded-full enabled:focus:rounded-full enabled:focus:bg-slate-200  disabled:text-slate-300'
      )}
    >
      <IoMdClose size={28} />
    </button>
  );
};
