import React from "react";

interface inputProps {
  name: string;
  type: "text" | "number" | "email" | "textarea";
  placeholder?: string;
  disabled?: boolean;
  onChange?: () => void;
}

const Input = ({
  placeholder,
  name,
  disabled = false,
  type,
  onChange,
  ...props
}: inputProps) => {
  const InputType = type !== "textarea" ? "input" : "textarea";
  return (
    <div className="">
      <label
        htmlFor={name}
        className="font-karla font-medium capitalize text-asphalt"
      >
        {name}
      </label>
      <InputType
        {...props}
        name={name}
        type={type}
        disabled={disabled}
        placeholder={placeholder ? placeholder : ""}
        onChange={onChange}
        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 font-karla text-asphalt focus:outline-none"
      />
    </div>
  );
};

export default Input;
