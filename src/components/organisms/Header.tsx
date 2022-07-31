import { Logo } from '@/components/atoms/Logo';
import { SearchForm } from '@/components/molecules/SearchForm';
import { Settings } from '@/components/molecules/Settings';

import logoImg from '@/images/GitHub-Mark-Light-64px.png';

export const Header = () => {
  return (
    <header className='sticky top-0 z-20 flex items-center justify-between gap-x-6 bg-slate-700 px-4 py-3 shadow-xl sm:gap-x-20 sm:px-10 sm:py-3'>
      <Logo src={logoImg} alt='github mark' size={48} placeholder='empty' />
      <SearchForm />
      <Settings />
    </header>
  );
};
