import { HiExternalLink } from 'react-icons/hi';

export const Footer = () => {
  return (
    <footer className='mx-4 mt-20 mb-4 rounded-md bg-slate-600 py-3 text-center dark:bg-slate-700 md:mx-0 md:mb-0 md:mt-28 md:rounded-none md:py-4'>
      <a
        href='https://github.com/MaciejGarncarski/github-searcher'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center gap-2 text-2xl text-slate-200 underline'
      >
        Github repo
        <HiExternalLink />
      </a>
    </footer>
  );
};
