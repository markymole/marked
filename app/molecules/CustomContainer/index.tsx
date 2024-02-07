import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface containerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const CustomContainer = ({ children, className, id }: containerProps) => {
  return (
    <div
      className={twMerge(
        "mx-auto max-w-8xl px-4 py-14 md:px-14 lg:px-20 lg:py-24",
        className,
      )}
      id={id ? id : ""}
    >
      {children}
    </div>
  );
};

export default CustomContainer;
