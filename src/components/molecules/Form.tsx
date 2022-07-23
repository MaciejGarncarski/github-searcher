import { useSearchValue } from '@/hooks/useContexts';

import { Input } from '@/components/atoms/Input';

export const Form = () => {
  const { setSearchedValue } = useSearchValue();

  const handleReset = () => {
    setSearchedValue('');
  };

  return (
    <form
      className='flex justify-end rounded border-2 border-gray-200'
      onReset={handleReset}
    >
      <Input type='search' placeholder='Search' />
      <Input type='reset' />
    </form>
  );
};
