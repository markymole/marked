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
          Ever since hearing it in &apos;3 Idiots,&apos; I&apos;ve adopted this
          line as my motto, applying its wisdom to my journey as a developer.
          Through continuous engagement with diverse tools and technologies, I
          aim to equip myself with the necessary skills to deliver quality and
          excellent outputs.
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
