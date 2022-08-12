import { ChangeEvent } from 'react';

import { clsxm } from '@/lib/clsxm';
import { useResultsSettings } from '@/hooks/useContexts';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { BORDER_COLORS } from '@/utils/colorsData';

import { PER_PAGE, PerPageNumbers } from '@/constants/ResultsPerPage';

export const ResultsPerPage = () => {
  const { accentColor } = useSSRAccentColor();
  const { perPage, setPerPage } = useResultsSettings();

  const handleChange = (selectEv: ChangeEvent<HTMLSelectElement>) => {
    const valueToNumber = parseInt(selectEv.target.value, 10) as PerPageNumbers;

    if (PER_PAGE.includes(valueToNumber)) {
      setPerPage(valueToNumber);
    }
  };

  return (
    <label className='flex items-center gap-2 text-2xl'>
      Results per page:
      <select
        onChange={handleChange}
        value={perPage}
        className={clsxm(
          BORDER_COLORS[accentColor],
          'rounded border-2 bg-slate-600 py-1 px-10 text-2xl text-slate-200 focus:border-slate-200 dark:bg-slate-700'
        )}
      >
        {PER_PAGE.map((number) => {
          return <option key={number}>{number}</option>;
        })}
      </select>
    </label>
  );
};
