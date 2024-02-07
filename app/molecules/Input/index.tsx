import React from "react";

interface inputProps {
  name: string;
  value?: string;
  label?: string;
  type: "text" | "number" | "email" | "textarea";
  placeholder?: string;
  disabled?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const Input = ({
  placeholder,
  name,
  label,
  disabled = false,
  value,
  type,
  onChange,
  ...props
}: inputProps) => {
  const InputType = type !== "textarea" ? "input" : "textarea";
  return (
    <div className="">
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
        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 font-karla text-asphalt transition-all duration-300 ease-out focus:outline-2 focus:outline-asphalt"
      />
    </div>
  );
};

export default Input;
