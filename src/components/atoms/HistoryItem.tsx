import { RiHistoryFill } from 'react-icons/ri';

import { useChangeParams } from '@/hooks/useChangeParams';
import { useActivePage, useSearchedValue } from '@/hooks/useContexts';

import { DeleteHistoryButton } from '@/components/atoms/buttons/DeleteHistoryButton';

type HistoryItemProps = {
  text: string;
  setInputValue: (value: string) => void;
  historyData: string[];
  setHistory: (value: string[]) => void;
};

export const HistoryItem = ({ text, setInputValue, historyData, setHistory }: HistoryItemProps) => {
  const { searchedValue, setSearchedValue } = useSearchedValue();
  const { activePage } = useActivePage();

  const { changeParams } = useChangeParams();

  const handleClick = () => {
    if (searchedValue === text) {
      return null;
    }

    setInputValue(text);
    setSearchedValue(text);
    changeParams(text, activePage);
  };

  const handleDelete = () => {
    const newHistory = historyData.filter((entry) => entry !== text);
    setHistory(newHistory);
  };

  return (
    <li className='flex w-full items-center justify-between md:text-2xl'>
      <button
        type='button'
        className='flex w-3/4 cursor-pointer items-center gap-3 rounded py-2 pl-2 text-left text-slate-200 transition-colors hover:bg-slate-500 focus:bg-slate-500 md:w-4/5 md:pl-4 '
        onClick={handleClick}
      >
        <span className='mt-1 flex-shrink-0'>
          <RiHistoryFill />
        </span>
        <span className='w-full overflow-hidden text-ellipsis'>{text}</span>
      </button>
      <DeleteHistoryButton onClick={handleDelete} />
    </li>
  );
};
