import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ImageProps {
  width: number;
  height: number;
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

const CustomImage = ({
  width,
  height,
  src,
  alt,
  className,
  onClick,
}: ImageProps) => {
  return (
    <>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={twMerge(className, "h-full w-full rounded-lg object-cover")}
        onClick={onClick}
      />
    </>
  );
};

export default CustomImage;
