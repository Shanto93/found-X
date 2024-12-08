import type { IInput } from "@/src/types";
import { DatePicker } from "@nextui-org/react";
import type React from "react";
import { Controller } from "react-hook-form";

const FXDatePicker = ({ label, name }: IInput) => {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker label={label} className="max-w-[284px]" {...fields} />
      )}
    ></Controller>
  );
};

export default FXDatePicker;