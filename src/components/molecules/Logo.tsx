import { StaticImageData } from 'next/image';
import Link from 'next/link';

type Placeholders = 'blur' | 'empty';
type Sizes = 16 | 32 | 48 | 64 | 128 | 256;

type LogoProps = {
  src: StaticImageData;
  alt: string;
  placeholder: Placeholders;
  size: Sizes;
};

import { NextImage } from '@/components/atoms/NextImage';

export const Logo = ({ src, alt, placeholder, size }: LogoProps) => {
  return (
    <h1>
      <Link href='/'>
        <a>
          <NextImage
            src={src}
            width={size}
            height={size}
            alt={alt}
            placeholder={placeholder}
            className='w-11 lg:w-initial'
          />
        </a>
      </Link>
    </h1>
  );
};
