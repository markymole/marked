import LogoSlider from "@/app/components/LogoSlider";
import Bar from "@/app/molecules/Bar";
import CustomContainer from "@/app/molecules/CustomContainer";
import CustomText from "@/app/molecules/CustomText";
import React from "react";

import { firstSet, secondSet } from "./techstacks.data";

const Expertise = () => {
  return (
    <CustomContainer className="">
      <div className="mx-auto w-2/3 text-center">
        <CustomText type="heading">
          &quot;
          <span className="text-amber-500 underline">Follow excellence</span>
          <br />
          and success will chase you down&quot;
        </CustomText>
        <CustomText type="description">
          Over the past few years, I have dedicated myself to becoming a skilled
          React developer. Alongside my expertise in React.js, I have also
          nurtured my passion for graphic design and illustration, utilizing
          Adobe Illustrator to create visually captivating designs. This
          combination of skills has enriched my proficiency in web development
          and design.
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
