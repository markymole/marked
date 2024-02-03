"use client";

import CustomContainer from "@/app/molecules/CustomContainer";
import CustomText from "@/app/molecules/CustomText";
import React from "react";

import projects from "./projects.data";
import ProjectCards from "@/app/components/ProjectCards";

const Projects = () => {
  return (
    <CustomContainer>
      <div className="mx-auto w-fit">
        <CustomText type="heading">Projects</CustomText>
        <CustomText type="description">
          Over the past 2 years, I have had the privilege of working on a range
          of diverse projects with a strong emphasis on ReactJS, I have been
          fortunate to deliver solutions that aim to make a positive impact and
          meet clients&apos; needs effectively.
        </CustomText>
      </div>
      <div className="mt-10 lg:mt-16">
        <ProjectCards type="default" data={projects}></ProjectCards>
      </div>
    </CustomContainer>
  );
};

export default Projects;
