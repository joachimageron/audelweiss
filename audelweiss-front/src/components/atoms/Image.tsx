import NextImage, { ImageProps as NextImageProps } from "next/image";

type Props = Omit<NextImageProps, "src"> & {
  src: string;
};

const Image = ({ src, ...rest }: Props) => {
  return <NextImage src={process.env.NEXT_PUBLIC_API_URL + src} {...rest} />;
};

export default Image;
