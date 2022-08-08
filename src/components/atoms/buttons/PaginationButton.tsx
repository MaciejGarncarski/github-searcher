import { motion, Variant } from 'framer-motion';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import { useChangeParams } from '@/hooks/useChangeParams';
import { useActivePage, useSearchedValue, useSettings } from '@/hooks/useContexts';
import { TEXT_COLORS } from '@/utils/colorsData';

type PaginationButtonType = 'prev' | 'next';
type PaginationButtonProps = {
  totalPages: number;
  type: PaginationButtonType;
};

export const PaginationButton = ({ type, totalPages }: PaginationButtonProps) => {
  const { accentColor } = useSettings();
  const { searchedValue } = useSearchedValue();
  const { activePage, setActivePage } = useActivePage();

  const { changeParams } = useChangeParams();

  const handlePrevPage = () => {
    if (1 < activePage) {
      changeParams(searchedValue, activePage - 1);
      setActivePage(activePage - 1);
    }
  };

  const handleNextPage = () => {
    if (activePage <= totalPages - 1) {
      changeParams(searchedValue, activePage + 1);
      setActivePage(activePage + 1);
    }
  };

  const commonProps = {
    className: `flex items-center gap-2 justify-self-center 
    hover:cursor-pointer
    ${TEXT_COLORS[accentColor]}
    disabled:cursor-not-allowed
    disabled:opacity-50`,
    whileTap: { scale: 0.9 },
  };

  const animation: Variant = {
    scale: 1.05,
    y: -4,
  };

  const prevDisabled = activePage === 1;
  const nextDisabled = activePage > totalPages - 1;

  if (type === 'prev') {
    return (
      <motion.button
        type='button'
        whileHover={prevDisabled ? {} : animation}
        whileFocus={animation}
        disabled={prevDisabled}
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
      whileHover={nextDisabled ? {} : animation}
      whileFocus={animation}
      disabled={nextDisabled}
      onClick={handleNextPage}
      {...commonProps}
    >
      Next
      <HiOutlineChevronRight className='mt-1' size={24} />
    </motion.button>
  );
};
