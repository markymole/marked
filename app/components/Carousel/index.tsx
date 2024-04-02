"use client";

import images from "./image-data";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import CustomImage from "@/app/molecules/CustomImage";

const Carousel = () => {
  const splideOptions = {
    type: "fade",
    rewind: true,
    arrows: false,
    pagination: false,
    height: "35rem",
    breakpoints: {
      600: { height: "20rem" },
    },
    autoplay: true,
    interval: 5000,
  };

  return (
    <div>
      <Splide options={splideOptions} aria-label="My Favorite Images">
        {images?.map((image: string, index: number) => (
          <SplideSlide key={`Image-${1 + index.toString()}`}>
            <CustomImage width={1000} height={1000} src={image} alt="Image 1" />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
