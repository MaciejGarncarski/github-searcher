import { ChangeEvent } from 'react';
import logoImg from '../../images/GitHub-Mark-Light-64px.png';
import { Logo } from '../molecules/Logo';

type HeaderProps = {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
};

export const Header = ({ inputValue, setInputValue }: HeaderProps) => {
  const handleChange = (inputEvent: InputEvent | ChangeEvent) => {
    setInputValue((inputEvent.target as HTMLInputElement).value);
  };

  return (
    <header className="bg-slate-900 py-2 px-4 flex justify-between items-center">
      <Logo src={logoImg} alt="github mark" size={48} placeholder="blur"></Logo>
      <input
        type="search"
        placeholder="Search"
        className="px-3 py-2 bg-transparent rounded-md border border-white text-white"
        value={inputValue}
        onChange={handleChange}
      />
    </header>
  );
};
