import { Logo } from '@/components/atoms/Logo';
import { Form } from '@/components/molecules/Form';

import logoImg from '@/images/GitHub-Mark-Light-64px.png';

export const Header = () => {
  return (
    <header className='sticky top-0 z-20 flex h-20 items-center justify-between bg-slate-700 py-2 px-5 shadow-xl dark:bg-slate-600 lg:px-10 lg:py-3'>
      <Logo src={logoImg} alt='github mark' size={48} placeholder='empty' />
      <Form />
    </header>
  );
};
