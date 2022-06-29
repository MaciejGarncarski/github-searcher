import { StaticImageData } from 'next/image';
import Link from 'next/link';

type placeholders = 'blur' | 'empty';
type sizes = 16 | 32 | 48 | 64 | 128 | 256;

type LogoProps = {
  src: StaticImageData;
  alt: string;
  placeholder: placeholders;
  size: sizes;
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
          />
        </a>
      </Link>
    </h1>
  );
};
