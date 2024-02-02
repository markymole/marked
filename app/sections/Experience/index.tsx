import React from "react";

import Bar from "@/app/molecules/Bar";
import CustomContainer from "@/app/molecules/CustomContainer";
import CustomText from "@/app/molecules/CustomText";
import Timeline from "@/app/components/Timeline";

const Experience = () => {
  return (
    <CustomContainer className="">
      <div className="ms-0 w-fit">
        <CustomText type="heading">Work Experience</CustomText>
        <Bar />
      </div>
      <div>
        <Timeline />
      </div>
    </CustomContainer>
  );
};

export default Experience;
