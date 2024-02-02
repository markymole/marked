import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import React from "react";
import { twMerge } from "tailwind-merge";

interface buttonProps {
  arrow: "left" | "right";
  onClick?: () => void;
  className?: string;
}

const CarouselButton = ({
  onClick,
  className,
  arrow = "right",
}: buttonProps) => {
  return (
    <button
      className={twMerge("group relative mt-1", className)}
      onClick={onClick}
    >
      <div
        className={twMerge(
          "relative z-20 -translate-y-1 rounded-full border border-amber-500 bg-white group-active:-translate-y-0",
        )}
      >
        {arrow === "right" ? (
          <FaArrowAltCircleRight
            size={30}
            className="fill-amber-500 stroke-white"
          />
        ) : (
          <FaArrowAltCircleLeft
            size={30}
            className="fill-amber-500 stroke-white"
            stroke="white"
          />
        )}
      </div>

      <span className="absolute bottom-0 left-0 z-0 block h-full w-full rounded-full bg-amber-600"></span>
    </button>
  );
};

export default CarouselButton;
