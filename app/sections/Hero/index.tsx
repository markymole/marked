import Button from "@/app/molecules/Button";
import CustomContainer from "@/app/molecules/CustomContainer";
import CustomText from "@/app/molecules/CustomText";
import Socials from "@/app/components/Socials";

import React from "react";

const index = () => {
  return (
    <CustomContainer className="mt-16 grid min-h-screen grid-cols-1 items-center gap-10 md:mt-0 xl:grid-cols-2">
      <div className="">
        <CustomText type="custom" className="text-5xl">
          👋
        </CustomText>
        <CustomText type="heading" className="ms-0 lg:w-2/3 xl:w-full">
          Hey there, I&apos;m Mark—Your friendly{" "}
          <span className="text-amber-500 underline">web developer</span>
        </CustomText>
        <CustomText type="description">
          I specialize in bringing your ideas to life, crafting bespoke websites
          that not only captivate but convert. Whether you&apos;re a startup
          ready to make your mark or an established business seeking a digital
          facelift, Let&apos;s build something extraordinary together.
        </CustomText>
        <Button
          hierarchy="primary"
          className="mt-4"
          text="Let's talk"
          href="#contact"
        />
        <Socials className="mt-20 lg:absolute lg:bottom-20 lg:mt-0" />
      </div>
      <div className="hidden lg:block"></div>
    </CustomContainer>
  );
};

export default index;
