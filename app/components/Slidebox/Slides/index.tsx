import React from "react";
import Image from "next/image";

interface slidesProps {
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
  techstacks?: String[];
  image: string;
  featureImage?: string;
}

const Slides = ({
  title,
  description,
  link,
  githubLink,
  techstacks,
  image,
  featureImage,
}: slidesProps) => {
  return (
    <div className="mx-auto h-full max-w-7xl rounded-lg border border-gray-300">
      <div></div>
      <Image
        width={1000}
        height={1000}
        src={image}
        alt="title"
        className="h-full w-full rounded-lg"
      />
    </div>
  );
};

export default Slides;
