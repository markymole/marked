import React from "react";

import Bar from "@/app/molecules/Bar";
import CustomContainer from "@/app/molecules/CustomContainer";
import CustomText from "@/app/molecules/CustomText";
import Timeline from "@/app/components/Timeline";

const Experience = () => {
  return (
    <CustomContainer id="experience">
      <div className="grid h-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0">
        <div className="h-fit space-y-6 lg:sticky lg:top-28 lg:col-span-1 lg:pr-20">
          <CustomText
            type="custom"
            className="font-outfit text-4xl font-semibold text-asphalt dark:text-white lg:text-5xl xl:text-6xl"
          >
            Work Experience: Nurturing Skills and{" "}
            <span className="text-amber-500 underline">
              Pursuing Excellence.
            </span>
          </CustomText>
          <CustomText type="description">
            My work experience encompasses both freelance web development,
            volunteer work, and my current corporate role. In each endeavor,
            I&apos;ve been driven by a relentless pursuit of excellence.
            Alongside honing my technical skills in web development, I&apos;ve
            devoted myself to preserving Kapampangan culture and heritage. This
            dual commitment underscores my ongoing pursuit of mastery and my
            aspiration to make a meaningful impact.
          </CustomText>
        </div>
        <div className="px-1 lg:col-span-1">
          <Timeline></Timeline>
        </div>
      </div>
    </CustomContainer>
  );
};

export default Experience;
