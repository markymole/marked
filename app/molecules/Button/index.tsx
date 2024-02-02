import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface buttonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

const Button = ({
  text = "Call to action",
  onClick,
  className,
  children,
}: buttonProps) => {
  return (
    <button
      className={twMerge("group relative mt-1", className)}
      onClick={onClick}
    >
      <div
        className={twMerge(
          "relative z-20 -translate-y-1 rounded-lg bg-amber-500 px-4 py-2 font-outfit font-medium text-white group-active:-translate-y-0",
        )}
      >
        {children ? children : text}
      </div>
      <span className="absolute bottom-0 left-0 z-0 block h-full w-full rounded-lg bg-amber-600"></span>
    </button>
  );
};

export default Button;
