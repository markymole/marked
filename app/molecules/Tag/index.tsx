import React from "react";
import { twMerge } from "tailwind-merge";

interface tagProps {
  tag: string;
  className?: string;
}

const Tag = ({ tag, className }: tagProps) => {
  return (
    <div
      className={twMerge(
        className,
        "w-fit rounded-full border border-gray-300 bg-gray-100 px-4 py-1 font-outfit text-gray-800 dark:border-gray-300 dark:bg-black/80 dark:text-white dark:backdrop-blur-md",
      )}
    >
      {tag}
    </div>
  );
};

export default Tag;
