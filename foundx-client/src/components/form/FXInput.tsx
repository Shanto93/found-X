"use client"

import { Input, InputProps } from "@nextui-org/input";
import React from "react";
import { useFormContext } from "react-hook-form";

interface IProps extends InputProps {
  required?: boolean;
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  isClearable?: boolean;
  endContent?: React.ReactNode;
  onClear?: () => void;
  className?: string;
}

const FXInput: React.FC<IProps> = ({
  required = false,
  name,
  label,
  placeholder,
  type = "text",
  isClearable = false,
  endContent,
  onClear,
  className,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={className}>
      <Input
        required={required}
        {...register(name)}
        errorMessage={errors[name] ? (errors[name].message as string) : ""}
        isInvalid={!!errors[name]}
        label={label}
        placeholder={placeholder}
        type={type}
        isClearable={isClearable}
        endContent={endContent}
        onClear={onClear}
        variant="bordered"
        {...rest}
      />
    </div>
  );
};

export default FXInput;
