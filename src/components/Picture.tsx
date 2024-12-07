import Image, { StaticImageData } from "next/image";

type PictureProps = {
    src: StaticImageData,
    alt: string,
    width?: number,
    height?: number,
};

export default function Picture(
    { src, alt, width, height }: PictureProps,
) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-full "
        />
    )
}