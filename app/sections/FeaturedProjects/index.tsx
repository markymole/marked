"use client";

import CustomContainer from "@/app/molecules/CustomContainer";
import CustomText from "@/app/molecules/CustomText";
import React from "react";

import projects from "./FeaturedProjects.data";
import ProjectCards from "@/app/components/ProjectCards";
import Bar from "@/app/molecules/Bar";

const FeaturedProjects = () => {
  return (
    <CustomContainer id="projects">
      <div className="mx-auto w-fit text-center">
        <CustomText type="heading">Projects</CustomText>
        <Bar></Bar>
      </div>
      <div className="mt-10 lg:mt-16">
        <ProjectCards type="default" data={projects}></ProjectCards>
      </div>
    </CustomContainer>
  );
};

export default FeaturedProjects;
