import { Input } from '@/components/atoms/Input';
import { Logo } from '@/components/molecules/Logo';

import logoImg from '@/images/GitHub-Mark-Light-64px.png';

type HeaderProps = {
  inputDisabled: boolean;
};

export const Header = ({ inputDisabled = false }: HeaderProps) => {
  return (
    <header className='flex items-center justify-between bg-gray-800 py-2 px-4 lg:px-10 lg:py-3'>
      <Logo src={logoImg} alt='github mark' size={48} placeholder='blur'></Logo>
      {!inputDisabled && <Input />}
    </header>
  );
};
