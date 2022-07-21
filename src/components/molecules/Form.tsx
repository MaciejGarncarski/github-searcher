import { useSearchValue } from '@/hooks/useSearchValue';

import { Input } from '@/components/atoms/Input';

export const Form = () => {
  const { setSearchedValue } = useSearchValue();

  const handleReset = () => {
    setSearchedValue('');
  };

  return (
    <form
      className='flex rounded border-2 border-gray-200'
      onReset={handleReset}
    >
      <Input
        type='search'
        placeholder='Search'
        className='bg-transparent text-white'
      />
      <Input type='reset' />
    </form>
  );
};
