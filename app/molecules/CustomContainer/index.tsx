import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface containerProps {
  children: ReactNode;
  className?: string;
}

const CustomContainer = ({ children, className }: containerProps) => {
  return (
    <div
      className={twMerge(
        "mx-auto max-w-8xl px-4 py-10 md:px-14 lg:px-20 lg:py-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CustomContainer;
