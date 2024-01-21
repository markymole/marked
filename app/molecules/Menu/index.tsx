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
        <div className="space-y-1.5">
          <span
            className={twMerge(
              "block h-0.5 w-7 bg-amber-500 transition-all duration-300 ease-in-out",
              isOpen ? "translate-y-2 rotate-45" : "",
            )}
          ></span>
          <span
            className={twMerge(
              "bg-asphalt block h-0.5 w-7 transition-all duration-300 ease-in-out",
              isOpen ? "opacity-0" : "opacity-100",
            )}
          ></span>
          <span
            className={twMerge(
              "bg-asphalt block h-0.5 w-5 transition-all duration-300 ease-in-out",
              isOpen ? "w-7 -translate-y-2 -rotate-45" : "",
            )}
          ></span>
        </div>
      </button>
    </div>
  );
};

export default Menu;
