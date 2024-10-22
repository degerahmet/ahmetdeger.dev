import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type LogoProps = {
    src: StaticImageData,
    alt: string,
    width?: number,
    height?: number,
};

export default function Logo(
    { src, alt, width, height }: LogoProps,
) {
    return (
        <Link href='/'>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </Link>
    )
}