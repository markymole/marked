"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import React from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

interface sliderProps {
  direction: "ltr" | "rtl";
  logos: string[];
}

const LogoSlider = ({ direction, logos }: sliderProps) => {
  const splideOptions = {
    type: "loop",
    gap: "2rem",
    direction: direction,
    autoWidth: true,
    pagination: false,
    arrows: false,
    drag: false,
    autoScroll: {
      speed: 0.3,
      pauseOnHover: false,
      pauseOnDrag: false,
    },
  };
  return (
    <div className="relative mt-10 overflow-hidden" id="logoslider">
      <Splide options={splideOptions} extensions={{ AutoScroll }}>
        {logos?.map((logo, index) => (
          <SplideSlide key={`Logo-${logo}`}>
            <div className="flex h-32 w-fit items-center justify-center rounded-lg border border-gray-300 px-5 shadow-lg dark:bg-white lg:h-36">
              <Image
                width={1000}
                height={1000}
                src={logo}
                alt={logo}
                className="h-fit w-44 object-contain"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <div className="darkmode absolute bottom-0 left-0 hidden h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-asphalt dark:to-transparent lg:block"></div>
      <div className="darkmode absolute bottom-0 right-0 hidden h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-asphalt dark:to-transparent lg:block"></div>
    </div>
  );
};

export default LogoSlider;
