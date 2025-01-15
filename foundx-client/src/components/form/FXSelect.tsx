"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";

interface IProps {
  options: {
    key: string;
    label: string;
  }[];
  name: string;
  label: string;
  disabled: boolean;
}

const FXSelect = ({ options, name, label, disabled }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="w-full flex flex-col gap-4">
      <Select
        {...register(name)}
        className="min-w-full sm:min-w-[225px]"
        label={label}
        variant="bordered"
        isDisabled={disabled}
      >
        {options.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default FXSelect;
