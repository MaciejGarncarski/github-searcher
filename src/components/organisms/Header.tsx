import { Input } from '@/components/atoms/Input';
import { Logo } from '@/components/molecules/Logo';

import logoImg from '@/images/GitHub-Mark-Light-64px.png';

type HeaderProps = {
  setSearchedValue: (value: string) => void;
};

export const Header = ({ setSearchedValue }: HeaderProps) => {
  return (
    <header className='bg-slate-900 py-2 px-4 lg:px-10 lg:py-3 flex justify-between items-center'>
      <Logo src={logoImg} alt='github mark' size={48} placeholder='blur'></Logo>
      <Input setSearchedValue={setSearchedValue} />
    </header>
  );
};
