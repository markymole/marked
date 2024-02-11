import Button from "@/app/molecules/Button";
import CustomImage from "@/app/molecules/CustomImage";
import CustomText from "@/app/molecules/CustomText";
import Tag from "@/app/molecules/Tag";
import { motion } from "framer-motion";
import React from "react";

interface projectProps {
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
  techstacks?: string[];
  featuredImage: string;
}

const ProjectCard = ({
  title,
  description,
  link,
  githubLink,
  techstacks,
  featuredImage,
}: projectProps) => {
  return (
    <div className="relative grid h-fit grid-cols-1 items-center gap-10 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <CustomImage
          src={featuredImage}
          width={1000}
          height={1000}
          alt={title}
          className="h-full w-full border border-gray-300 shadow-lg shadow-gray-300/50 dark:border-transparent dark:shadow-none"
        />
      </motion.div>
      <div className="flex flex-col gap-4">
        <h5 className="font-outfit text-3xl font-medium text-asphalt dark:text-white">
          {title}
        </h5>
        <CustomText type="description">{description}</CustomText>
        <div className="flex flex-wrap items-center gap-2">
          {techstacks?.map((techstack, index) => (
            <Tag
              key={`techstack-${techstack}-${1 + index.toString()}`}
              tag={techstack}
            />
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Button
            hierarchy="primary"
            href={link}
            target="__blank"
            className="text-sm"
          >
            Visit App
          </Button>
          <Button
            hierarchy="secondary"
            href={githubLink}
            target="__blank"
            className="text-sm"
          >
            View Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
