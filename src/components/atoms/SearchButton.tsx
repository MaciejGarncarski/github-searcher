import { AiOutlineSearch } from 'react-icons/ai';

type SearchButtonProps = {
  onClick: () => void;
};

export const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='px-2 text-white transition-colors hover:bg-slate-600'
    >
      <AiOutlineSearch size={32} />
    </button>
  );
};
