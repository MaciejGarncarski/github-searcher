import { Input } from '@/components/atoms/Input';
import { Logo } from '@/components/molecules/Logo';

import logoImg from '@/images/GitHub-Mark-Light-64px.png';

type HeaderProps = {
  setSearchedValue?: (value: string) => void;
  inputDisabled: boolean;
};

export const Header = ({
  setSearchedValue,
  inputDisabled = false,
}: HeaderProps) => {
  return (
    <header className='bg-gray-800 py-2 px-4 lg:px-10 lg:py-3 flex justify-between items-center'>
      <Logo src={logoImg} alt='github mark' size={48} placeholder='blur'></Logo>
      {!inputDisabled && setSearchedValue && (
        <Input setSearchedValue={setSearchedValue} />
      )}
    </header>
  );
};
