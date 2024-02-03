import React from "react";

import Bar from "@/app/molecules/Bar";
import CustomContainer from "@/app/molecules/CustomContainer";
import CustomText from "@/app/molecules/CustomText";
import Timeline from "@/app/components/Timeline";

const Experience = () => {
  return (
    <CustomContainer className="">
      <div className="grid h-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0">
        <div className="h-fit space-y-4 lg:sticky lg:top-28 lg:col-span-1 lg:pr-20">
          <CustomText
            type="custom"
            className="font-outfit text-4xl font-semibold lg:text-5xl xl:text-6xl"
          >
            <span className="text-asphalt">Work Experience: </span>
            Nurturing Skills and{" "}
            <span className="text-amber-500 underline">
              Pursuing Excellence.
            </span>
          </CustomText>
          <CustomText type="description">
            Over the past 2 years, I have had the privilege of working on a
            range of diverse projects with a strong emphasis on ReactJS, I have
            been fortunate to deliver solutions that aim to make a positive
            impact and meet clients&apos; needs effectively.
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
