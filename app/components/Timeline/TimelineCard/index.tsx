"use client";

import CustomText from "@/app/molecules/CustomText";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { twMerge } from "tailwind-merge";

interface timelineProps {
  title: string;
  position: string;
  company?: string;
  description: string;
  duration: string;
}

const TimelineCard = ({
  title,
  position,
  company,
  description,
  duration,
}: timelineProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "center center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <div className="flex gap-6 px-1 md:gap-10">
      <div className="relative flex shrink-0 flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          id="dot"
          className="absolute top-0 h-3 w-3 rounded-full bg-amber-500"
        ></motion.div>
        <motion.div
          id="line"
          className={twMerge(`h-full w-0.5 bg-amber-500`)}
          style={{ scaleY: scaleY, transformOrigin: "top" }}
        ></motion.div>
      </div>
      <motion.div
        className="relative mb-10 w-full"
        ref={ref}
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="relative z-10 flex flex-col gap-4 rounded-lg border border-gray-300 bg-white p-4 shadow-lg transition-all duration-200 ease-out hover:-translate-y-1.5 hover:translate-x-1.5 hover:cursor-default hover:border-amber-500 dark:bg-asphalt md:p-8 ">
          <div className="flex flex-wrap items-center justify-between">
            <h5 className="font-karla text-lg font-semibold leading-6 dark:text-white md:text-xl">
              {title}
            </h5>
            <CustomText type="description">{duration}</CustomText>
          </div>
          <CustomText type="description">{description}</CustomText>
        </div>
        <div className="absolute bottom-0 left-0 z-0 h-full w-full rounded-lg bg-amber-500 "></div>
      </motion.div>
    </div>
  );
};

export default TimelineCard;
