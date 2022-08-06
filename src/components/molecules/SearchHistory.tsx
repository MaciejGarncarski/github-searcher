import { useEffect, useState } from 'react';

import { clsxm } from '@/lib/clsxm';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { BORDER_COLORS } from '@/utils/colorsData';

import { HistoryItem } from '@/components/atoms/HistoryItem';

type SearchHistoryProps = {
  historyData: string[];
  setHistory: (value: string[]) => void;
  setInputValue: (value: string) => void;
};

export const SearchHistory = ({ historyData, setInputValue, setHistory }: SearchHistoryProps) => {
  const [ssrHistoryData, setSSRHistoryData] = useState<string[]>([]);

  useEffect(() => {
    setSSRHistoryData(historyData);
  }, [historyData]);

  const { accentColor } = useSSRAccentColor();

  if (ssrHistoryData.length < 1) {
    return null;
  }

  return (
    <ul
      className={clsxm(
        BORDER_COLORS[accentColor],
        'history-menu',
        'absolute left-0 top-16 hidden w-full flex-col gap-1 rounded-md border-2 bg-slate-600 px-1 py-1 text-xl md:py-2 md:px-2'
      )}
    >
      {ssrHistoryData.map((historyEntry) => {
        return (
          <HistoryItem
            key={historyEntry}
            text={historyEntry}
            setInputValue={setInputValue}
            setHistory={setHistory}
            historyData={historyData}
          />
        );
      })}
    </ul>
  );
};
