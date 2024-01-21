import Link from "next/link";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface buttonProps {
  href?: string;
  className?: string;
  children?: ReactNode;
}

const index = ({ className, children, href }: buttonProps) => {
  return (
    <Link
      className={twMerge(
        className,
        "p-1 opacity-80 transition-all duration-200 ease-out hover:opacity-100",
      )}
      href={href ? href : ""}
    >
      {children}
    </Link>
  );
};

export default index;
