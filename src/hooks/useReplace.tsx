import { useRouter } from 'next/router';

export const useReplace = () => {
  const router = useRouter();

  const replaceParams = (searchedValue: string, activePage: number) => {
    if (searchedValue.trim() !== '') {
      router.replace(`/?q=${searchedValue}&page=${activePage}`, undefined, {
        shallow: true,
      });
    }

    if (searchedValue.trim() === '') {
      router.replace(`/?page=${activePage}`, undefined, {
        shallow: true,
      });
    }
  };
  return replaceParams;
};
