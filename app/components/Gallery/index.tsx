"use client";

import Button from "@/app/molecules/Button";
import CustomImage from "@/app/molecules/CustomImage";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface galleryProps {
  images: string[];
  max?: number;
}

const Gallery = ({ images, max = 6 }: galleryProps) => {
  const [maxCards, setMaxCards] = useState(max);
  const handleViewMore = () => {
    setMaxCards(maxCards + 3);
  };

  const handleViewLess = () => {
    setMaxCards(6);
  };

  const splideOption = {
    type: "loop",
    rewind: true,
    arrows: false,
    pagination: false,
    autoplay: true,
    drag: true,
    padding: "2rem",
    gap: "1rem",
    focus: "center",
  };

  return (
    <>
      <div className="hidden flex-col items-center gap-6 lg:flex">
        <motion.div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {images?.slice(0, maxCards).map((image, index) => (
            <AnimatePresence key={`Image-${image}-${1 + index.toString()}`}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="shadow-lg"
              >
                <CustomImage
                  width={1000}
                  height={1000}
                  src={image}
                  alt={image}
                />
              </motion.div>
            </AnimatePresence>
          ))}
        </motion.div>
        {maxCards < images.length ? (
          <Button hierarchy="primary" onClick={handleViewMore}>
            View More
          </Button>
        ) : (
          <Button hierarchy="primary" onClick={handleViewLess}>
            View Less
          </Button>
        )}
      </div>
      <div className="flex lg:hidden">
        <Splide options={splideOption}>
          {images?.map((image, index) => (
            <SplideSlide key={`Image-${image}-${1 + index.toString()}`}>
              <CustomImage
                width={1000}
                height={1000}
                src={image}
                alt={image}
                className="shadow-lg"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default Gallery;
