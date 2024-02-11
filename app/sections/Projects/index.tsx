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
        Welcome to my projects page, where you can witness my ongoing journey of
        learning and growth. Each project showcased here reflects my dedication
        to expanding my skills, whether it&apos;s in front-end development,
        back-end solutions, or a blend of both. From personal passion projects
        to volunteer initiatives and paid endeavors, I&apos;ve embraced diverse
        opportunities to refine my craft. Explore this collection to see how
        I&apos;ve progressed and evolved as a developer.
      </CustomText>
      <div className="mt-10 lg:mt-16">
        <SidebarGallery projects={projects}></SidebarGallery>
      </div>
    </CustomContainer>
  );
};

export default Projects;
