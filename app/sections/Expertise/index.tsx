import LogoSlider from "@/app/components/LogoSlider";
import Bar from "@/app/molecules/Bar";
import CustomContainer from "@/app/molecules/CustomContainer";
import CustomText from "@/app/molecules/CustomText";
import React from "react";

import { firstSet, secondSet } from "./techstacks.data";

const Expertise = () => {
  return (
    <CustomContainer className="">
      <div className="">
        <CustomText
          type="heading"
          className="mx-auto w-full text-center lg:w-2/3"
        >
          &quot;
          <span className="text-amber-500 underline">Follow excellence</span>
          <br />
          and success will chase you down&quot;
        </CustomText>
        <CustomText
          type="description"
          className="mx-auto w-full text-center lg:w-10/12"
        >
          Throughout my career, I consistently apply the wisdom of this quote to
          my journey as a developer. Through continuous engagement with diverse
          tools and technologies, I aim to equip myself with expertise in both
          front and back-end development. This commitment fuels my ability to
          deliver excellent service and make a lasting impact in every project I
          undertake
        </CustomText>
      </div>
      <div id="techstacks">
        <LogoSlider logos={firstSet} direction="ltr" />
        <LogoSlider logos={secondSet} direction="rtl" />
      </div>
    </CustomContainer>
  );
};

export default Expertise;
