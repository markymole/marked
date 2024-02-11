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
        Over the past years, I&apos;ve had the privilege of working on a diverse
        range of projects, including volunteer initiatives, client commissions,
        and personal endeavors. Each project reflects my dedication to
        craftsmanship, creativity, and problem-solving. Explore my portfolio to
        discover the stories behind these endeavors.
      </CustomText>
      <div className="mt-10 lg:mt-16">
        <SidebarGallery projects={projects}></SidebarGallery>
      </div>
    </CustomContainer>
  );
};

export default Projects;
