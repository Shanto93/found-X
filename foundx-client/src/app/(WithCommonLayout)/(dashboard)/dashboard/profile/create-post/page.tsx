"use client";

import React, { useState, type ChangeEvent } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns"; // Import date-fns for formatting
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import DatePicker from "react-datepicker";
import FXSelect from "@/src/components/form/FXSelect";
import { useCategories } from "@/src/hooks/categories.hook";
import Image from "next/image";
import FXTextArea from "@/src/components/form/FXTextArea";
const address = require("@bangladeshi/bangladesh-address");

const cityOptions = address
  .allDistict()
  .sort()
  .map((city: string) => {
    return {
      key: city,
      label: city,
    };
  });

const CreatePost: React.FC = () => {
  const [imageUpload, setImageUpload] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  console.log(imagePreview);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImageUpload((prev) => [...prev, file]);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  console.log(imageUpload);

  const {
    data: categoryData,
    isLoading: categoryLoading,
    isSuccess,
  } = useCategories();

  let categoryOptions: { key: string; label: string }[] = [];

  if (categoryData?.data && !categoryLoading) {
    categoryOptions = categoryData?.data?.map(
      (category: { _id: string; name: string }) => ({
        key: category._id,
        label: category.name,
      })
    );
  }

  const methods = useForm();
  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const [dateFound, setDateFound] = useState<Date | null>(null);

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  const onSubmit = (data: any) => {
    const formattedDate = dateFound ? format(dateFound, "yyyy-MM-dd") : null;
    const formData = {
      ...data,
      dateFound: formattedDate,
      questions: data.questions.map(
        (question: { value: string }) => question.value
      ),
    };
    console.log(formData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="px-2">
        <h1 className="text-3xl font-semibold break-words">
          Post a found item
        </h1>
        <Divider className="my-5"></Divider>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
          <FXInput label="Title" name="title"></FXInput>
          <DatePicker
            selected={dateFound}
            onChange={(date: Date | null) => setDateFound(date)}
            placeholderText="Found on"
            name="dateFound"
            className="peer border-2 w-full mx-auto bg-transparent border-default rounded-xl p-3.5 text-default-500 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-none"
          />
          <FXInput label="Location" name="location"></FXInput>
          <FXSelect label="City" name="city" options={cityOptions}></FXSelect>
          {/* <FXInput label="Category" name="category"></FXInput> */}
          <FXSelect
            label="Category"
            name="category"
            options={categoryOptions}
            disabled={!isSuccess}
          ></FXSelect>
          {/* <FXInput label="Upload Image" name="image"></FXInput> */}
          <div
            onChange={(e) => handleImageUpload(e)}
            className=" rounded-lg border py-[14px]"
          >
            <label className="px-3 text-sm" htmlFor="image">
              Upload Image
            </label>
            <input className="hidden " type="file" name="image" id="image" />
          </div>
        </div>

        {imagePreview.length > 0 && (
          <div className="mt-4 flex gap-4 flex-wrap">
            {imagePreview.length > 0 &&
              imagePreview.map((imageUrl, i) => (
                <Image
                  key={i}
                  src={imageUrl}
                  width={95}
                  height={95}
                  alt="Uploaded Image"
                />
              ))}
          </div>
        )}

        <div>
          <FXTextArea
            label="Description"
            placeholder="Write details here"
            variant="bordered"
          ></FXTextArea>
        </div>

        <Divider className="my-5"></Divider>

        <div className="flex items-center justify-between">
          <h1 className="text-xm md:text-xl">Owner verification questions</h1>
          <Button onClick={() => handleFieldAppend()}>Append</Button>
        </div>

        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center justify-between">
            <FXInput
              className="w-full md:mr-5"
              name={`questions.${index}.value`}
              label="Questions"
            ></FXInput>
            <Button onClick={() => remove(index)} className="">
              Remove
            </Button>
          </div>
        ))}
        <Button type="submit" className="mt-5">
          Post Data
        </Button>
      </form>
    </FormProvider>
  );
};

export default CreatePost;
