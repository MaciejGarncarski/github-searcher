import { StaticImageData } from 'next/image';

import { NextImage } from '@/components/atoms/NextImage';

type ResultImgProps = {
  src: string | StaticImageData;
  alt: string;
  isUser?: boolean;
};

export const ResultImg = ({ src, alt, isUser }: ResultImgProps) => {
  return (
    <NextImage
      src={src}
      width={30}
      height={30}
      layout='responsive'
      alt={alt}
      className='w-9 lg:w-12 rounded-full'
      imgClassName={`${isUser && 'rounded-3xl'}`}
      useSkeleton
    />
  );
};
