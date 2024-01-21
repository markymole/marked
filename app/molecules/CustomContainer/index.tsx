import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface containerProps {
  children: ReactNode;
  className?: string;
}

const CustomContainer = ({ children, className }: containerProps) => {
  return (
    <div className={twMerge("mx-auto max-w-8xl", className)}>{children}</div>
  );
};

export default CustomContainer;
