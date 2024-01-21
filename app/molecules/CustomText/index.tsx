import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface textProps {
  type: "heading" | "subheading" | "description" | "custom";
  children: ReactNode;
  className?: string;
}

const CustomText = ({ type, children, className }: textProps) => {
  switch (type) {
    case "heading":
      return (
        <h1
          className={twMerge(
            "py-5 font-oswald text-5xl font-medium uppercase leading-tight text-asphalt",
            className,
          )}
        >
          {children}
        </h1>
      );
    case "subheading":
      return (
        <h3
          className={twMerge(
            "py-5 font-oswald text-3xl font-medium uppercase leading-tight text-asphalt",
            className,
          )}
        >
          {children}
        </h3>
      );
    case "description":
      return (
        <p
          className={twMerge(
            "font-karla text-lg font-light text-gray-700",
            className,
          )}
        >
          {children}
        </p>
      );
    case "custom":
      return <p className={twMerge(className)}>{children}</p>;
    default:
      return (
        <p
          className={twMerge(
            "font-karla text-lg font-light text-gray-700",
            className,
          )}
        >
          {children}
        </p>
      );
  }
};

export default CustomText;
