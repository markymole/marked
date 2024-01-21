import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface menuProps {
  isOpen: boolean;
  onClick?: () => void;
}

const Menu = ({ isOpen, onClick }: menuProps) => {
  return (
    <div className={twMerge("flex items-center gap-20")}>
      <button className="group cursor-pointer self-center " onClick={onClick}>
        <div className="space-y-2">
          <span
            className={twMerge(
              "relative z-10 block h-1 w-8 rounded-md bg-amber-500 transition-all duration-300 ease-in-out",
              isOpen ? "translate-y-3 rotate-45" : "",
            )}
          ></span>
          <span
            className={twMerge(
              "z-0 block h-1 w-8 rounded-md bg-asphalt transition-all duration-300 ease-in-out",
              isOpen ? "opacity-0" : "opacity-100",
            )}
          ></span>
          <span
            className={twMerge(
              "z-0 block h-1 w-5 rounded-md bg-asphalt transition-all duration-300 ease-in-out",
              isOpen ? "w-8 -translate-y-3 -rotate-45" : "",
            )}
          ></span>
        </div>
      </button>
    </div>
  );
};

export default Menu;
