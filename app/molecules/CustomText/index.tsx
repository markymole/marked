import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface textProps {
  type: "superheading" | "heading" | "subheading" | "description" | "custom";
  children: ReactNode;
  className?: string;
}

const CustomText = ({ type, children, className }: textProps) => {
  switch (type) {
    case "superheading":
      return (
        <h1
          className={twMerge(
            "py-5 font-oswald text-6xl font-medium uppercase leading-tight text-asphalt dark:text-white",
            className,
          )}
        >
          {children}
        </h1>
      );
    case "heading":
      return (
        <h1
          className={twMerge(
            "py-5 font-oswald text-4xl font-medium uppercase leading-tight text-asphalt dark:text-white md:text-5xl",
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
            "py-5 font-oswald text-3xl font-medium uppercase leading-tight text-asphalt dark:text-white",
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
            "font-outfit text-base font-light text-gray-900 dark:text-gray-300 md:text-lg",
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
            "font-outfit text-lg font-light text-gray-700 dark:text-gray-300",
            className,
          )}
        >
          {children}
        </p>
      );
  }
};

export default CustomText;
