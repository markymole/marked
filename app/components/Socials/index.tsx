import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import React from "react";
import Icon from "@/app/molecules/Icon";
import { twMerge } from "tailwind-merge";

interface socialsProps {
  className?: string;
}

const index = ({ className }: socialsProps) => {
  return (
    <div id="socials" className={twMerge(className, "flex items-center gap-4")}>
      <Icon>
        <FaLinkedinIn size={28} className="dark:fill-current dark:text-white" />
      </Icon>
      <Icon>
        <FaFacebookF size={28} className="dark:fill-current dark:text-white" />
      </Icon>
      <Icon>
        <FaGithub size={28} className="dark:fill-current dark:text-white" />
      </Icon>
    </div>
  );
};

export default index;
