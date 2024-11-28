"use client";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import React from "react";
import {
  FormProvider,
  useFieldArray,
  useForm,
  type FieldValues,
  type SubmitHandler,
} from "react-hook-form";

const CreatePost = () => {
  const methods = useForm();
  const { control, handleSubmit } = methods;

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "questions",
    }
  );

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = {
      ...data,
      questions: data.questions.map(
        (question: { value: string }) => question.value
      ),
    };
    console.log(formData);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FXInput label="Title" name="title"></FXInput>

        <Divider className="my-5"></Divider>

        <div className="flex items-center justify-between">
          <h1 className="text-xl">Owner verification questions</h1>
          <Button onClick={() => handleFieldAppend()}>Append</Button>
        </div>

        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center justify-between">
            <FXInput
              className="w-full mr-5"
              name={`questions.${index}.value`}
              label="Questions"
            ></FXInput>
            <Button onClick={() => remove(index)} className="">
              Remove
            </Button>
          </div>
        ))}

        {/* <FXInput label="" name=""></FXInput> */}

        <Button type="submit" className="mt-5">
          Post Data
        </Button>
      </form>
    </FormProvider>
  );
};

export default CreatePost;
