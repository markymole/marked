"use client";

import CustomContainer from "@/app/molecules/CustomContainer";
import CustomText from "@/app/molecules/CustomText";
import React from "react";

import projects from "./projects.data";
import ProjectCards from "@/app/components/ProjectCards";
import Bar from "@/app/molecules/Bar";

const Projects = () => {
  return (
    <CustomContainer>
      <div className="mx-auto w-fit">
        <CustomText type="heading">Projects</CustomText>
        <Bar></Bar>
      </div>
      <div className="mt-10 lg:mt-16">
        <ProjectCards type="default" data={projects}></ProjectCards>
      </div>
    </CustomContainer>
  );
};

export default Projects;
