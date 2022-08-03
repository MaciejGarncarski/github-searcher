import { motion } from 'framer-motion';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import {
  useActivePage,
  useSearchedValue,
  useSettings,
} from '@/hooks/useContexts';
import { useReplace } from '@/hooks/useReplace';
import { useResults } from '@/hooks/useResults';
import { textColors } from '@/utils/colorsConfig';
type PaginationButtonType = 'prev' | 'next';

type PaginationButtonProps = {
  totalPages: number;
  type: PaginationButtonType;
};

export const PaginationButton = ({
  type,
  totalPages,
}: PaginationButtonProps) => {
  const { accentColor } = useSettings();
  const { searchedValue } = useSearchedValue();
  const { activePage, setActivePage } = useActivePage();

  const { fetchedRepos, fetchedUsers } = useResults(searchedValue, activePage);

  const replaceParams = useReplace();

  const refetchData = () => {
    fetchedUsers.refetch();
    fetchedRepos.refetch();
  };

  const handlePrevPage = () => {
    if (1 < activePage) {
      setActivePage(activePage - 1);
      refetchData();
      replaceParams(searchedValue, activePage - 1);
    }
  };

  const handleNextPage = () => {
    if (activePage <= totalPages - 1) {
      setActivePage(activePage + 1);
      refetchData();
      replaceParams(searchedValue, activePage + 1);
    }
  };

  const commonProps = {
    className: `flex items-center gap-2 justify-self-center transition-colors 
    hover:cursor-pointer
    ${textColors[accentColor]}
    disabled:cursor-not-allowed
    disabled:opacity-50`,
    whileTap: { scale: 0.9 },
    whileFocus: { scale: 1.08 },
  };

  if (type === 'prev') {
    return (
      <motion.button
        type='button'
        disabled={activePage === 1}
        onClick={handlePrevPage}
        {...commonProps}
      >
        <HiOutlineChevronLeft className='mt-1' size={24} />
        Prev
      </motion.button>
    );
  }

  return (
    <motion.button
      type='button'
      disabled={activePage > totalPages - 1}
      onClick={handleNextPage}
      {...commonProps}
    >
      Next
      <HiOutlineChevronRight className='mt-1' size={24} />
    </motion.button>
  );
};
