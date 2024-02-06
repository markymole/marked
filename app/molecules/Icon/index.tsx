import Link from "next/link";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface buttonProps {
  href?: string;
  className?: string;
  children?: ReactNode;
}

const Icon = ({ className, children, href }: buttonProps) => {
  return (
    <Link
      className={twMerge(
        className,
        "p-1 opacity-70 transition-all duration-300 ease-out hover:opacity-100",
      )}
      href={href ? href : ""}
    >
      {children}
    </Link>
  );
};

export default Icon;
