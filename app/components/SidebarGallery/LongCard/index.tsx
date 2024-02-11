"use client";

import CustomImage from "@/app/molecules/CustomImage";
import CustomText from "@/app/molecules/CustomText";
import Tag from "@/app/molecules/Tag";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface projectProps {
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
  techstacks?: string[];
  featuredImage: string;
  onClick?: () => void;
}

const LongCard = ({
  title,
  description,
  link,
  githubLink,
  techstacks,
  featuredImage,
  onClick,
}: projectProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <motion.div
        layout
        className="group relative h-60 cursor-pointer md:h-[17rem] lg:h-full"
        onClick={onClick}
        role="button"
      >
        <CustomImage
          src={featuredImage}
          alt={featuredImage}
          width={1000}
          height={1000}
          className="darkmode border shadow-lg dark:border-asphalt"
        ></CustomImage>
        <div className="absolute bottom-0 flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-t from-asphalt via-asphalt/80 to-transparent opacity-0 transition-all duration-300 ease-out group-hover:opacity-100">
          <div className="flex translate-y-6 flex-col p-4 transition-all duration-300 ease-out group-hover:translate-y-0 lg:gap-2 xl:p-8">
            <CustomText
              type="custom"
              className="p-0 font-outfit text-lg font-semibold capitalize text-white xl:text-2xl"
            >
              {title}
            </CustomText>
            <CustomText
              type="custom"
              className="line-clamp-3 font-outfit text-xs font-light text-white lg:leading-5 xl:text-base"
            >
              {description}
            </CustomText>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {techstacks?.map((item) => (
                <Tag
                  key={`tech-${item}`}
                  tag={item}
                  className="text-xs xl:text-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LongCard;
