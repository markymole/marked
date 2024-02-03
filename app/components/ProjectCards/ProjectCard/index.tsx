import Button from "@/app/molecules/Button";
import CustomImage from "@/app/molecules/CustomImage";
import CustomText from "@/app/molecules/CustomText";
import { motion } from "framer-motion";
import React from "react";

interface projectProps {
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
  techstacks?: string[];
  image: string;
}

const ProjectCard = ({
  title,
  description,
  link,
  githubLink,
  techstacks,
  image,
}: projectProps) => {
  return (
    <div className="relative grid h-fit grid-cols-1 items-center gap-10 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <CustomImage
          src={image}
          width={1000}
          height={1000}
          alt={title}
          className="h-full w-full border border-gray-300 shadow-lg shadow-gray-300/50"
        />
      </motion.div>
      <div className="flex flex-col gap-4">
        <h5 className="font-outfit text-3xl font-medium">{title}</h5>
        <CustomText type="description">{description}</CustomText>
        <div className="flex flex-wrap items-center gap-3">
          {techstacks?.map((techstack, index) => (
            <div
              key={`techstack-${techstack}-${1 + index.toString()}`}
              className="w-fit rounded-full border border-gray-300 bg-gray-100 px-4 py-1 font-outfit text-gray-800"
            >
              {techstack}
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-3">
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
