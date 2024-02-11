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
          I started my journey as a web developer when I entered college. The
          funny thing is that I don&apos;t have any idea or background in web
          development or even IT-related stuff. From the start, I really
          struggled to find my way in. Nevertheless, after a few failures and
          setbacks, I managed my way through it by doing advanced studies at
          home and watching countless video tutorials.
          <br />
          <br />
          In my third year of college, I was fortunate to be given projects by
          friends and other contacts. These projects helped me to grow as a web
          developer, gaining real-world experience in the field.
          <br />
          <br />
          Currently, I am working as a web developer at Fullstack HQ. I&apos;m
          fully immersed in diverse projects and client interactions. This role
          provides me with the opportunity to explore a wide array of tools and
          technologies, continuously propelling my growth and innovation within
          the field.
          {/* <br />
          <br />
          During my free time, I indulge in gaming, savor the freedom of biking,
          and engage in personal and volunteer projects. These activities offer
          me moments of relaxation, creativity, and exploration beyond the
          confines of my professional endeavors. */}
        </CustomText>
        <Button hierarchy="primary" className="mt-8">
          Download Resume
        </Button>
      </div>
    </CustomContainer>
  );
};

export default index;
