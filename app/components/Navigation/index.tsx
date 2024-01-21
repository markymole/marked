"use client";

import CustomContainer from "@/app/molecules/CustomContainer";
import Logo from "@/app/molecules/Logo";
import Menu from "@/app/molecules/Menu";
import NavLink from "@/app/molecules/NavLink";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full ">
      <div className="relative z-50 border-b bg-white">
        <CustomContainer className="flex items-center justify-between py-4 lg:py-6">
          <Logo />
          <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </CustomContainer>
      </div>
      <div
        className={twMerge(
          "relative z-40 h-fit w-full bg-gradient-to-r from-white/80 to-white transition-all duration-300 ease-in-out lg:fixed lg:left-0 lg:top-0 lg:block lg:h-full",
          isOpen
            ? "opacity-100 backdrop-blur-sm"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="relative w-full transform shadow-md lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:shadow-none">
          <ul
            className={twMerge(
              "mx-auto flex max-w-8xl flex-col items-end py-4 text-end transition-all duration-500 ease-in-out lg:p-20",
              isOpen
                ? "opacity-100 delay-0 lg:delay-200"
                : "translate-x-40 opacity-0",
            )}
          >
            <NavLink text="Home" />
            <NavLink text="About" />
            <NavLink text="Works" />
            <NavLink text="Contact" />
            <li className="mt-4 hidden font-karla font-light text-asphalt lg:block">
              Looking for my previous porfolio? Click{" "}
              <a
                className="text-amber-500 underline"
                href="https://marked-dev.vercel.app"
                target="__blank"
              >
                here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
