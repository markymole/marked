"use client";

import CustomContainer from "@/app/molecules/CustomContainer";
import Logo from "@/app/molecules/Logo";
import Menu from "@/app/molecules/Menu";
import NavLink from "@/app/molecules/NavLink";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Switcher from "../Switcher";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="darkmode relative z-50 border-b bg-white dark:border-gray-300 dark:bg-asphalt">
        <CustomContainer className="flex items-center justify-between py-4 lg:py-6">
          <Logo />
          <div className="flex items-center gap-4">
            <Switcher />
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </CustomContainer>
      </div>
      <div
        className={twMerge(
          "relative z-40 w-full bg-gradient-to-r from-white/80 to-white transition-all duration-300 ease-in-out dark:from-asphalt/80 dark:to-asphalt lg:fixed lg:left-0 lg:top-0 lg:block lg:h-full",
          isOpen
            ? "h-fit opacity-100 backdrop-blur-sm"
            : "pointer-events-none h-0 opacity-0",
        )}
      >
        <div className="relative w-full transform px-4 pb-8 shadow-md md:px-14 md:pb-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:shadow-none">
          <ul
            className={twMerge(
              "mx-auto flex max-w-8xl flex-col items-end py-4 text-end transition-all duration-500 ease-in-out lg:p-20",
              isOpen
                ? "opacity-100 delay-0 lg:delay-200"
                : "translate-x-40 opacity-0",
            )}
          >
            <NavLink text="Home" onClick={() => setIsOpen(!isOpen)} />
            <NavLink
              text="About"
              href="#about"
              onClick={() => setIsOpen(!isOpen)}
            />
            <NavLink
              text="Projects"
              href="#projects"
              onClick={() => setIsOpen(!isOpen)}
            />
            <NavLink
              text="Contact"
              href="#contact"
              onClick={() => setIsOpen(!isOpen)}
            />
            <li className="mt-4 font-karla font-light text-asphalt dark:text-white">
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
