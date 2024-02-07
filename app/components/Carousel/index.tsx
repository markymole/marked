"use client";

import images from "./image-data";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import CustomImage from "@/app/molecules/CustomImage";
import CarouselButton from "@/app/molecules/Button/CarouselButton.tsx";

const Carousel = () => {
  const splideOptions = {
    type: "fade",
    rewind: true,
    arrows: false,
    pagination: false,
    height: "35rem",
    breakpoints: {
      600: { height: "auto" },
    },
    autoplay: true,
    interval: 5000,
  };

  return (
    <div>
      <Splide options={splideOptions} aria-label="My Favorite Images">
        {images?.map((image: string, index: number) => (
          <SplideSlide key={`Image-${1 + index.toString()}`}>
            <CustomImage width={500} height={500} src={image} alt="Image 1" />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
