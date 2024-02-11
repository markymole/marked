"use client";

import CustomContainer from "@/app/molecules/CustomContainer";
import CustomText from "@/app/molecules/CustomText";
import React from "react";

import projects from "./projects.data";
import Bar from "@/app/molecules/Bar";
import SidebarGallery from "@/app/components/SidebarGallery";

const Projects = () => {
  return (
    <CustomContainer id="projects">
      <div className="mt-14 w-fit">
        <CustomText type="heading">Projects</CustomText>
        <Bar></Bar>
      </div>
      <div className="mt-10 lg:mt-16">
        <SidebarGallery projects={projects}></SidebarGallery>
      </div>
    </CustomContainer>
  );
};

export default Projects;
