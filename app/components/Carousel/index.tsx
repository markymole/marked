"use client";

import Image from "next/image";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";

const Carousel = () => {
  const splideOptions = {
    pagination: false,
    isNavigation: false,
    arrows: false,
  };
  return (
    <div>
      <Splide options={splideOptions}>
        <SplideSlide>
          <Image
            src="/images/cks-ojt.jpg"
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full rounded-xl"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carousel;
