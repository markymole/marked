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
        <CustomText type="heading">Projects</CustomText> <Bar></Bar>
      </div>
      <CustomText type="description" className="xl:w-2/3">
        Dive into my portfolio and explore the projects that mark my journey of
        continuous learning and growth as a developer. From front-end designs to
        robust back-end solutions, each project showcases my dedication to
        mastering various aspects of web development.
      </CustomText>
      <div className="mt-10 lg:mt-16">
        <SidebarGallery projects={projects}></SidebarGallery>
      </div>
    </CustomContainer>
  );
};

export default Projects;
