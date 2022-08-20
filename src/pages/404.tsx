import Link from 'next/link';
import { RiAlarmWarningFill } from 'react-icons/ri';

import { Text } from '@/components/atoms/Text';
import { Seo } from '@/components/Seo';

const NotFoundPage = () => {
  return (
    <>
      <Seo templateTitle='Not Found' />

      <main>
        <section>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill size={60} className=' animate-flicker text-red-500' />
            <Text type='h1' className='mt-8 text-4xl dark:text-slate-200 md:text-6xl'>
              Page Not Found
            </Text>
            <Link href='/'>
              <a className='mt-10 rounded-md bg-blue-500 py-3 px-8 text-4xl text-slate-200 transition hover:scale-110'>
                Back To Homepage
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFoundPage;
