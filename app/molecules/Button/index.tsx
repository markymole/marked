import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { buttonVariant, buttonbackgroundVariant } from "./Button.styles";

type NativeButtonProps = ComponentPropsWithoutRef<"button"> &
  ComponentPropsWithoutRef<"a">;

interface buttonProps extends NativeButtonProps {
  hierarchy: "primary" | "secondary";
  text?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

const Button = ({
  hierarchy = "primary",
  text = "Call to action",
  href,
  onClick,
  className,
  children,
  ...props
}: buttonProps) => {
  const ButtonElement = href ? "a" : "button";

  return (
    <ButtonElement
      href={href}
      className={twMerge("group relative mt-1 w-fit", className)}
      onClick={onClick}
      {...props}
    >
      <div className={twMerge(buttonVariant({ hierarchy }))}>
        {children ? children : text}
      </div>
      <span className={twMerge(buttonbackgroundVariant({ hierarchy }))}></span>
    </ButtonElement>
  );
};

export default Button;
