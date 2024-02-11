"use client";

import React, { useEffect, useState } from "react";
import LongCard from "./LongCard";
import SideCard from "./SideCard";
import { AnimatePresence, motion } from "framer-motion";

interface projectProps {
  projects: Project[];
}

interface Project {
  title: string;
  description: string;
  link?: string;
  images?: string[];
  githubLink?: string;
  archived?: boolean;
  techstacks?: string[];
  featuredImage: string;
}

const SidebarGallery = ({ projects }: projectProps) => {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active !== null) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [active]);

  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
        {projects?.map((project, index) => (
          <LongCard
            key={`Project-${project.title}-${1 + index.toString()}`}
            title={project.title}
            description={project.description}
            link={project.link}
            githubLink={project.githubLink}
            techstacks={project.techstacks}
            featuredImage={project.featuredImage}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {active !== null && (
          <SideCard
            title={projects[active].title}
            description={projects[active].description}
            link={projects[active].link}
            images={projects[active].images}
            githubLink={projects[active].githubLink}
            techstacks={projects[active].techstacks}
            featuredImage={projects[active].featuredImage}
            archived={projects[active].archived}
            onClick={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarGallery;
