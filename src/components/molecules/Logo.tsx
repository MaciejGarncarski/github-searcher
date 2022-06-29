import Image, { StaticImageData } from 'next/image';

type placeholders = 'blur' | 'empty';
type sizes = 16 | 32 | 48 | 64 | 128 | 256;

type LogoProps = {
  src: StaticImageData;
  alt: string;
  placeholder: placeholders;
  size: sizes;
};

export const Logo = ({ src, alt, placeholder, size }: LogoProps) => {
  return (
    <h1>
      <Image
        src={src}
        width={size}
        height={size}
        alt={alt}
        placeholder={placeholder}
      ></Image>
    </h1>
  );
};
