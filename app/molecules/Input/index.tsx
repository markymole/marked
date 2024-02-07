import React from "react";
import { twMerge } from "tailwind-merge";

interface inputProps {
  name: string;
  value?: string;
  label?: string;
  type: "text" | "number" | "email" | "textarea";
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const Input = ({
  placeholder,
  name,
  label,
  error,
  disabled = false,
  value,
  type,
  onChange,
  ...props
}: inputProps) => {
  const InputType = type !== "textarea" ? "input" : "textarea";
  return (
    <div>
      <label
        htmlFor={name}
        className="font-karla font-medium capitalize text-asphalt dark:text-white"
      >
        {label}
      </label>
      <InputType
        {...props}
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder ? placeholder : ""}
        onChange={onChange}
        className={twMerge(
          "mt-2 w-full rounded-lg border  px-4 py-2 font-karla text-asphalt transition-all duration-300 ease-out focus:outline-2 focus:outline-asphalt",
          error ? "border-red-600 placeholder-red-300" : "border-gray-300",
        )}
      />
      {error && <p className="mt-1 font-karla text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
