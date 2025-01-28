import { Textarea } from "@nextui-org/input";
import { useFormContext, FieldError } from "react-hook-form";

interface ITextAreaProps {
  label: string;
  placeholder: string;
  variant: "flat" | "bordered" | "faded" | "underlined";
}

const FXTextArea = ({ label, placeholder, variant }: ITextAreaProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // Safely extract the error message as a string or undefined
  const errorMessage = errors[label]?.message as string | undefined;

  return (
    <div>
      <Textarea
        isClearable
        className="w-full mt-3"
        label={label}
        placeholder={placeholder}
        variant={variant}
        {...register(label, { required: "This field is required" })}
        onClear={() => console.log("textarea cleared")}
      />
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
    </div>
  );
};

export default FXTextArea;
