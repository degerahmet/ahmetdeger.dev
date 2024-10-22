import Image, { StaticImageData } from "next/image";

type LogoProps = {
    src: StaticImageData,
    alt: string,
    width?: number,
    height?: number,
};

export default function Logo(
    { src, alt, width, height }: LogoProps,
){
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    )
}