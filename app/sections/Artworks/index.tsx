import Bar from "@/app/molecules/Bar";
import CustomContainer from "@/app/molecules/CustomContainer";
import CustomText from "@/app/molecules/CustomText";
import React from "react";
import Gallery from "@/app/components/Gallery";
import { artworkData } from "./artworks.data";

const Artworks = () => {
  return (
    <CustomContainer id="projects">
      <div className="mx-auto w-fit">
        <CustomText type="heading">Artworks</CustomText>
        <Bar></Bar>
      </div>
      <div className="mt-10 lg:mt-16">
        <Gallery images={artworkData} />
      </div>
    </CustomContainer>
  );
};

export default Artworks;
