import { ChangeEvent } from 'react';

import { clsxm } from '@/lib/clsxm';
import { useResultsSettings } from '@/hooks/useContexts';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { BORDER_COLORS } from '@/utils/colorsData';

import { SelectContainer } from '@/components/atoms/SelectContainer';

const perPageData = [2, 4, 6, 8];

export const ResultsPerPage = () => {
  const { accentColor } = useSSRAccentColor();
  const { perPage, setPerPage } = useResultsSettings();
  const handleChange = (selectEv: ChangeEvent<HTMLSelectElement>) => {
    setPerPage(parseInt(selectEv.target.value, 10));
  };

  return (
    <SelectContainer>
      Per page:
      <select
        onChange={handleChange}
        className={clsxm(
          BORDER_COLORS[accentColor],
          'rounded border-2 bg-slate-600 py-1 text-2xl text-slate-200 dark:bg-slate-700'
        )}
      >
        {perPageData.map((number) => {
          return (
            <option key={number} defaultValue={number} selected={perPage === number}>
              {number}
            </option>
          );
        })}
      </select>
    </SelectContainer>
  );
};
