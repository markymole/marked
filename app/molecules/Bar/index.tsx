import React from "react";
import { twMerge } from "tailwind-merge";

interface BarProps {
  width?: string;
}

const Bar = ({ width }: BarProps) => {
  return (
    <div
      className={twMerge(width ? width : "w-full", "mb-4 h-1.5 bg-amber-500")}
    ></div>
  );
};

export default Bar;
