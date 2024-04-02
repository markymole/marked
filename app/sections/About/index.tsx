import React from "react";
import CustomContainer from "@/app/molecules/CustomContainer";
import CustomText from "@/app/molecules/CustomText";
import Carousel from "@/app/components/Carousel";
import Button from "@/app/molecules/Button";

const index = () => {
  return (
    <CustomContainer
      className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10 lg:py-20 xl:gap-14"
      id="about"
    >
      <div className="">
        <Carousel />
      </div>
      <div>
        <div className="w-fit">
          <CustomText type="heading">About Me</CustomText>
        </div>
        <CustomText type="description">
          My journey as a web developer started during my college days.
          Surprisingly, I didn&apos;t know much about web development or
          anything related to IT back then. It was tough at first, trying to
          figure things out on my own. But I didn&apos;t give up. I spent a lot
          of time studying at home and watching online tutorials to learn the
          ropes.
          <br />
          <br />
          By my third year in college, I got lucky and landed some projects from
          friends and contacts. Those projects really helped me grow as a web
          developer and gave me some hands-on experience.
          <br />
          <br />
          Nowadays, I work as a web developer at Fullstack HQ. I get to work on
          a wide range of projects, where I contribute to diverse teams and
          explore innovative solutions. This hands-on experience allows me to
          continuously grow and stay updated with the latest trends in the
          field.
        </CustomText>
        <Button hierarchy="primary" className="mt-8">
          Download Resume
        </Button>
      </div>
    </CustomContainer>
  );
};

export default index;
