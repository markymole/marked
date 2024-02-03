import Socials from "@/app/components/Socials";
import CustomContainer from "@/app/molecules/CustomContainer";
import React from "react";

const Footer = () => {
  return (
    <CustomContainer className="mt-20">
      <div className="mb-10 h-[1.5px] w-full bg-gradient-to-r from-white via-gray-300 to-white"></div>
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row md:gap-0">
        <Socials></Socials>
        <p className="hidden font-outfit text-sm text-asphalt md:block">
          Get <span className="font-semibold">Marked</span>, Elevate Your
          Presence | Copyright 2024.
        </p>
        <p className="block text-center font-outfit text-sm text-asphalt md:hidden">
          Get <span className="font-semibold">Marked</span>, Elevate Your
          Presence <br /> Copyright 2024.
        </p>
      </div>
    </CustomContainer>
  );
};

export default Footer;
