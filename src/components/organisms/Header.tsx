import { Logo } from '@/components/atoms/Logo';
import { Form } from '@/components/molecules/Form';
import { ThemeSwitch } from '@/components/molecules/ThemeSwitch';

import logoImg from '@/images/GitHub-Mark-Light-64px.png';

export const Header = () => {
  return (
    <header className='sticky top-0 z-20 grid grid-cols-2 gap-y-6 bg-slate-700 px-5 pt-2 pb-4 shadow-xl lg:flex lg:px-10 lg:py-3'>
      <Logo src={logoImg} alt='github mark' size={48} placeholder='empty' />
      <ThemeSwitch />
      <Form />
    </header>
  );
};
