import Button from "@/app/molecules/Button";
import CustomImage from "@/app/molecules/CustomImage";
import CustomText from "@/app/molecules/CustomText";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import ProjectCard from "./ProjectCard";

interface projectCardProps {
  type?: "default" | "slider";
  data: Project[];
}

interface Project {
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
  techstacks?: string[];
  image: string;
  featuredImage: string;
}

const ProjectCards = ({ type = "default", data }: projectCardProps) => {
  const splideOptions = {
    type: "slide",
    snap: true,
    gap: "4rem",
    rewind: true,
    heightRatio: 0.3,
    label: "Projects Cards",
  };

  if (type === "slider") {
    return (
      <div>
        <Splide options={splideOptions}>
          {data?.map((project, index) => (
            <SplideSlide key={`Projext-${project.title}`}>
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
                githubLink={project.githubLink}
                techstacks={project.techstacks}
                featuredImage={project.featuredImage}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      {data?.map((project, index) => (
        <div key={`Projext-${project.title}`}>
          <ProjectCard
            title={project.title}
            description={project.description}
            link={project.link}
            githubLink={project.githubLink}
            techstacks={project.techstacks}
            featuredImage={project.featuredImage}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
