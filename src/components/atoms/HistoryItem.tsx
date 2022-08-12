import { RiHistoryFill } from 'react-icons/ri';

import { useChangeParams } from '@/hooks/useChangeParams';
import { useSearchedValue } from '@/hooks/useContexts';

import { CrossButton } from '@/components/atoms/buttons/CrossButton';

type HistoryItemProps = {
  text: string;
  setInputValue: (value: string) => void;
  historyData: string[];
  setHistory: (value: string[]) => void;
};

export const HistoryItem = ({ text, setInputValue, historyData, setHistory }: HistoryItemProps) => {
  const { searchedValue, setSearchedValue } = useSearchedValue();

  const { changeParams } = useChangeParams();

  const handleClick = () => {
    if (searchedValue === text) {
      return null;
    }

    setInputValue(text);
    setSearchedValue(text);

    changeParams(text, 1);
  };

  const handleDelete = () => {
    const newHistory = historyData.filter((entry) => entry !== text);
    setHistory(newHistory);
  };

  return (
    <li data-focus className='flex w-full items-center justify-between md:text-2xl'>
      <button
        type='button'
        data-focus
        disabled={text === searchedValue}
        className='flex w-3/4 items-center gap-3 rounded py-2 pl-2 text-left text-slate-200 transition enabled:cursor-pointer enabled:hover:bg-slate-500 enabled:focus:bg-slate-500 disabled:opacity-60 md:w-4/5 md:pl-4 '
        onClick={handleClick}
      >
        <span className='flex-shrink-0 md:mt-0.5' data-focus>
          <RiHistoryFill />
        </span>
        <span className='w-full overflow-hidden text-ellipsis' data-focus>
          {text}
        </span>
      </button>
      <CrossButton onClick={handleDelete} data-focus />
    </li>
  );
};
