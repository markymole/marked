"use client";

import CustomContainer from "@/app/molecules/CustomContainer";
import CustomText from "@/app/molecules/CustomText";
import React from "react";

import projects from "./FeaturedProjects.data";
import ProjectCards from "@/app/components/ProjectCards";
import Bar from "@/app/molecules/Bar";
import Button from "@/app/molecules/Button";

const FeaturedProjects = () => {
  return (
    <CustomContainer id="projects">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="w-fit">
          <CustomText type="heading">Projects</CustomText>
          <Bar></Bar>
        </div>
        <Button hierarchy="primary" href="/projects">
          View All Projects
        </Button>
      </div>
      <div className="mt-10 lg:mt-16">
        <ProjectCards type="default" data={projects}></ProjectCards>
      </div>
    </CustomContainer>
  );
};

export default FeaturedProjects;
