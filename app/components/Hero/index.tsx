import Button from "@/app/molecules/Button";
import Socials from "@/app/components/Socials";

import React from "react";

const index = () => {
  return (
    <div className="max-w-8xl mx-auto grid min-h-screen grid-cols-2 items-center gap-10 px-6 lg:px-0">
      <div className="text-asphalt">
        <p className="text-5xl">👋</p>
        <h1 className="font-oswald py-5 text-5xl font-medium uppercase leading-tight">
          Hey there, I&apos;m Mark—Your friendly{" "}
          <span className="text-amber-500 underline">web developer</span>
        </h1>
        <p className="font-karla text-gray-md text-lg font-light">
          I specialize in bringing your ideas to life, crafting bespoke websites
          that not only captivate but convert. Whether you&apos;re a startup
          ready to make your mark or an established business seeking a digital
          facelift, Let&apos;s build something extraordinary together.
        </p>
        <Button className="mt-4" text="Let's talk" />
        <Socials className="absolute bottom-20" />
      </div>
      <div></div>
    </div>
  );
};

export default index;
