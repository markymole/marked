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
          Embarking on a journey of skill refinement and innovation. I&apos;ve
          focused on making my development process efficient and effective,
          honing essential skills across pivotal areas like front-end and
          back-end development, API integration, and responsive design. Using
          what I&apos;ve learned, I&apos;ve worked hard to make a real impact
          online, creating websites and apps that leave a mark.
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
