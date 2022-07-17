import Image, { ImageProps } from 'next/future/image';

type NextImageProps = {
  imgClassName?: string;
  alt: string;
  width: string | number;
} & { width: string | number; height: string | number } & ImageProps;

export const NextImage = ({
  src,
  width,
  height,
  alt,
  className,
  imgClassName,
  ...rest
}: NextImageProps) => {
  const widthIsSet = className?.includes('w-') ?? false;

  return (
    <figure
      style={!widthIsSet ? { width: `${width}px` } : undefined}
      className={className}
    >
      <Image
        className={imgClassName}
        src={src}
        width={width}
        height={height}
        alt={alt}
        {...rest}
      />
    </figure>
  );
};
