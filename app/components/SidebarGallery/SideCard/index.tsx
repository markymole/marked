import Button from "@/app/molecules/Button";
import CustomImage from "@/app/molecules/CustomImage";
import CustomText from "@/app/molecules/CustomText";
import Tag from "@/app/molecules/Tag";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AnimatePresence, motion, useSpring } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import ImageModal from "../ImageModal";

interface sideCardProps {
  onClick?: () => void;
  title: string;
  description: string;
  link?: string;
  images?: string[];
  githubLink?: string;
  techstacks?: string[];
  archived?: boolean;
  featuredImage: string;
}

const SideCard = ({
  title,
  description,
  link,
  images,
  githubLink,
  techstacks,
  archived,
  onClick,
}: sideCardProps) => {
  const splideOption = {
    type: "slide",
    rewind: true,
    fixedHeight: "15rem",
    autoplay: true,
    arrows: false,
    perMove: 1,
    snap: true,
  };

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sliderRef.current &&
        !sliderRef.current.contains(event.target as Node) &&
        !document.querySelector(".image-modal")?.contains(event.target as Node)
      ) {
        if (onClick) {
          onClick();
        }
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [onClick]);

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
      className="fixed right-0 top-0 z-50 flex h-full w-full justify-end bg-gradient-to-l from-white to-white/50 dark:from-asphalt dark:to-asphalt/50"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.4 }}
        ref={sliderRef}
        className=" flex h-full w-full flex-col gap-8 overflow-y-auto bg-white p-4 dark:border-gray-300/50 dark:bg-asphalt md:max-w-xl md:border-l xl:p-8"
      >
        <div
          className="flex cursor-pointer items-center gap-2 border-b border-gray-300 py-2 text-asphalt dark:border-gray-300/50 dark:text-white"
          onClick={onClick}
        >
          <IoArrowBackCircleSharp size={30} />
          <CustomText type="custom" className="font-outfit text-base">
            Return
          </CustomText>
        </div>

        {title && (
          <div className="flex flex-col">
            <CustomText
              type="custom"
              className="p-0 font-outfit text-2xl font-semibold capitalize text-asphalt dark:text-white"
            >
              {title}
            </CustomText>
            <CustomText
              type="custom"
              className="dark:text-text-red-600 font-outfit text-base font-light text-red-600 lg:leading-5"
            >
              {archived && "(ARCHIVED)"}
            </CustomText>
          </div>
        )}
        {images && (
          <Splide options={splideOption}>
            {images?.map((image, index) => (
              <SplideSlide key={`Image-${image}`}>
                <CustomImage
                  width={1000}
                  height={1000}
                  src={image}
                  alt={image}
                  className="h-full cursor-zoom-in border object-contain dark:border-asphalt"
                  onClick={() => handleImageClick(image)}
                />
              </SplideSlide>
            ))}
          </Splide>
        )}

        {description && (
          <div className="flex flex-col gap-2">
            <CustomText
              type="custom"
              className="font-outfit text-lg font-semibold text-asphalt dark:text-white lg:leading-5"
            >
              About
            </CustomText>
            <CustomText
              type="custom"
              className="font-outfit text-base font-light text-asphalt dark:text-white lg:leading-5"
            >
              {description}
            </CustomText>
          </div>
        )}
        {techstacks && (
          <div className="flex flex-col gap-3">
            <CustomText
              type="custom"
              className="font-outfit text-lg font-semibold text-asphalt dark:text-white lg:leading-5"
            >
              Technologies
            </CustomText>
            <div className="flex flex-wrap items-center gap-2">
              {techstacks?.map((item) => (
                <Tag key={`Tag-${item}`} tag={item} />
              ))}
            </div>
          </div>
        )}
        {link && !archived && (
          <div className="flex flex-col gap-2">
            <CustomText
              type="custom"
              className="flex items-center gap-2 font-outfit text-lg font-semibold text-asphalt dark:text-white lg:leading-5"
            >
              <BsGlobeAsiaAustralia size={20} />
              Website
            </CustomText>
            <Link
              href={link ? link : ""}
              target="__blank"
              className="font-outfit text-asphalt dark:text-white"
            >
              {link}
            </Link>
          </div>
        )}
        {githubLink && (
          <div className="flex flex-col gap-2">
            <CustomText
              type="custom"
              className="flex items-center gap-2 font-outfit text-lg font-semibold text-asphalt dark:text-white lg:leading-5"
            >
              <FaGithub size={22} />
              Github
            </CustomText>
            <Link
              href={githubLink ? githubLink : ""}
              target="__blank"
              className="font-outfit text-asphalt dark:text-white"
            >
              {githubLink}
            </Link>
          </div>
        )}
        {link && !archived && (
          <Button href={link} hierarchy="primary" target="__blank">
            View live site
          </Button>
        )}
      </motion.div>
      {showModal && selectedImage && (
        <AnimatePresence>
          <ImageModal
            src={selectedImage}
            onClose={() => setShowModal(false)}
          ></ImageModal>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default SideCard;
