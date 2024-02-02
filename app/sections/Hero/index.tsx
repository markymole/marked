import Button from "@/app/molecules/Button";
import CustomContainer from "@/app/molecules/CustomContainer";
import CustomText from "@/app/molecules/CustomText";
import Socials from "@/app/components/Socials";

import React from "react";

const index = () => {
  return (
    <CustomContainer className="mt-16 grid min-h-screen grid-cols-1 items-center gap-10 md:mt-0 lg:grid-cols-2">
      <div className="text-asphalt">
        <CustomText type="custom" className="text-5xl">
          👋
        </CustomText>
        <CustomText type="heading">
          Hey there, I&apos;m Mark—Your friendly{" "}
          <span className="text-amber-500 underline">web developer</span>
        </CustomText>
        <CustomText type="description">
          I specialize in bringing your ideas to life, crafting bespoke websites
          that not only captivate but convert. Whether you&apos;re a startup
          ready to make your mark or an established business seeking a digital
          facelift, Let&apos;s build something extraordinary together.
        </CustomText>
        <Button className="mt-4" text="Let's talk" />
        <Socials className="absolute bottom-20" />
      </div>
      <div></div>
    </CustomContainer>
  );
};

export default index;
