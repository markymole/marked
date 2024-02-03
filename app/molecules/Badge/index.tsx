import React from "react";

interface badgeProps {
  text: string;
}

const Badge = ({ text }: badgeProps) => {
  return (
    <div className="w-fit rounded-full bg-asphalt px-4 py-2 font-outfit font-medium capitalize text-white">
      {text}
    </div>
  );
};

export default Badge;
