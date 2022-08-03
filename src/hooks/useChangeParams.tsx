import { useRouter } from 'next/router';

export const useChangeParams = () => {
  const router = useRouter();

  const changeParams = (searchedValue: string, activePage: number) => {
    if (searchedValue.trim() !== '') {
      router.push(`/?q=${searchedValue}&page=${activePage}`, undefined, {
        shallow: true,
      });
    }

    if (searchedValue.trim() === '') {
      router.push(`/?page=${activePage}`, undefined, {
        shallow: true,
      });
    }
  };
  return { changeParams };
};
