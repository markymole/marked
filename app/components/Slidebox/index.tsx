"use client";

import CustomText from "@/app/molecules/CustomText";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import Slides from "./Slides";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import projects from "./featured.data";
import CarouselButton from "@/app/molecules/Button/CarouselButton.tsx";
import CustomContainer from "@/app/molecules/CustomContainer";

const Slidebox = () => {
  return (
    <div>
      <CustomContainer className="mb-10">
        <CustomText type="heading">Featured Works</CustomText>
      </CustomContainer>
      <div id="slidebox">
        <Splide
          options={{
            type: "loop",
            arrows: false,
            pagination: false,
            perMove: 1,
            snap: true,
            focus: "center",
            autoWidth: true,
            padding: "17%",
            gap: "2rem",
            breakpoints: {
              600: { padding: "0%" },
              1024: { padding: "0%" },
              1400: { padding: "10%" },
              1600: { padding: "10%" },
            },
          }}
          Aria-label="Featured Projects"
        >
          {projects?.map((project, index) => (
            <SplideSlide key={`Project-${project.title}`}>
              <Slides
                title={project.title}
                description={project.description}
                link={project.link}
                githubLink={project.githubLink}
                techstacks={project.techstacks}
                image={project.image}
                featureImage={project.featuredImage}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <CustomContainer>
        {projects?.length > 0 && (
          <div className="flex items-center gap-4 py-6 ">
            <div className="flex items-center gap-2">
              <CarouselButton arrow="left" />
              <CarouselButton arrow="right" />
            </div>
            <div className="flex items-center gap-4">
              {projects.map((project, index) => (
                <button
                  key={`Image-${project.title}-${1 + index.toString()}`}
                  className="h-3 w-3 rounded-full bg-amber-500"
                ></button>
              ))}
            </div>
          </div>
        )}
      </CustomContainer>
    </div>
  );
};

export default Slidebox;
