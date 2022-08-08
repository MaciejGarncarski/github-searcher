import type { Variants } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { clsxm } from '@/lib/clsxm';
import { useSSRAccentColor } from '@/hooks/useSSRAccentColor';
import { BORDER_COLORS } from '@/utils/colorsData';

import { HistoryItem } from '@/components/atoms/HistoryItem';

type SearchHistoryProps = {
  historyData: string[];
  setHistory: (value: string[]) => void;
  setInputValue: (value: string) => void;
  inputFocus: boolean;
};

const historyVariants: Variants = {
  open: {
    y: [-5, 5, 0],
    opacity: 1,
  },
  closed: {
    y: -5,
    opacity: 0,
  },
};

export const SearchHistory = ({
  historyData,
  setInputValue,
  setHistory,
  inputFocus,
}: SearchHistoryProps) => {
  const [ssrHistoryData, setSSRHistoryData] = useState<string[]>([]);

  useEffect(() => {
    setSSRHistoryData(historyData);
  }, [historyData]);

  const { accentColor } = useSSRAccentColor();

  if (ssrHistoryData.length < 1) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.ul
        data-focus='true'
        variants={historyVariants}
        initial={inputFocus ? 'open' : 'closed'}
        exit='closed'
        animate={inputFocus ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
          type: 'spring',
        }}
        className={clsxm(
          BORDER_COLORS[accentColor],
          'absolute left-0 top-14 w-full flex-col gap-1 rounded-md border-2 bg-slate-600 px-1 py-1 text-xl md:py-2 md:px-2'
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
      </motion.ul>
    </AnimatePresence>
  );
};
