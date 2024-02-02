import React from "react";
import CustomContainer from "@/app/molecules/CustomContainer";
import CustomText from "@/app/molecules/CustomText";
import Carousel from "@/app/components/Carousel";
import Bar from "@/app/molecules/Bar";
import Button from "@/app/molecules/Button";

const index = () => {
  return (
    <CustomContainer className="grid grid-cols-2 gap-20 py-20">
      <div className="">
        <Carousel />
      </div>
      <div>
        <div className="w-fit">
          <CustomText type="heading">My Story</CustomText>
          <Bar />
        </div>
        <CustomText type="description">
          I got into web development back in college and scored myself a
          Bachelor&apos;s in it. Funny thing is, I didn&apos;t know squat about
          coding at first, but I stuck with it. Turns out, not only did I pick
          up the language, but I also fell head over heels for it. <br />
          <br /> While I was hitting the books, I lucked out with some projects
          from friends and contacts. That hands-on stuff? Best teacher ever.
          Outside of classes, you&apos;ll catch me either gaming or tinkering
          with my own projects – gotta keep those skills sharp, you know? <br />
          <br /> Now, I&apos;m doing the Web Wizard thing at Fullstack HQ.
          It&apos;s a mix of projects with all sorts of tech. Every job throws
          different tools and tricks my way, and I&apos;m soaking it all in.
          That&apos;s how I&apos;ve been growing as a web developer.
        </CustomText>
        <Button className="mt-6">Download Resume</Button>
      </div>
    </CustomContainer>
  );
};

export default index;
