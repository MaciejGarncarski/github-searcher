import { AiOutlineSearch } from 'react-icons/ai';

export const SearchButton = () => {
  return (
    <button
      type='submit'
      className=' bg-slate-600 px-2 text-white transition-colors hover:border-slate-700 hover:bg-slate-200 hover:text-slate-600 focus:border-slate-700 focus:bg-slate-200 focus:text-slate-600'
    >
      <AiOutlineSearch size={32} />
    </button>
  );
};
