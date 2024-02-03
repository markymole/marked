import React from "react";

import { workexperiencedata } from "@/app/sections/Experience/workexperience.data";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
  return (
    <div className="flex flex-col">
      {workexperiencedata?.map((item) => (
        <TimelineCard
          key={`Card-${item.title}`}
          title={item.title}
          position={item.positon}
          company={item.company}
          description={item.description}
          duration={item.duration}
        />
      ))}
    </div>
  );
};

export default Timeline;
