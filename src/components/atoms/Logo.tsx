import { StaticImageData } from 'next/image';

type Placeholders = 'blur' | 'empty';
type Sizes = 16 | 32 | 48 | 64 | 128 | 256;

type LogoProps = {
  src: StaticImageData;
  alt: string;
  placeholder: Placeholders;
  size: Sizes;
};

import Link from 'next/link';

import { NextImage } from '@/components/atoms/NextImage';

export const Logo = ({ src, alt, placeholder, size }: LogoProps) => {
  return (
    <h1>
      <Link href='/'>
        <a className='flex items-center gap-5'>
          <NextImage
            src={src}
            width={size}
            height={size}
            alt={alt}
            placeholder={placeholder}
            className='lg:w-initial w-11'
            priority={true}
          />
          <span className='hidden text-white lg:inline'>Github Searcher</span>
        </a>
      </Link>
    </h1>
  );
};
