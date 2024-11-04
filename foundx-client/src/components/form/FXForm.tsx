import React, { type ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface IformConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IProps extends IformConfig {
  children: ReactNode;
  onSubmit: any;
}

const FXForm = ({ children, onSubmit, defaultValues, resolver }: IProps) => {
  const formConfig: IformConfig = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  const submitHandler = methods.handleSubmit;
  return (
    <FormProvider {...methods}>
      <form className="w-full flex justify-center items-center py-10 rounded-lg" onSubmit={submitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FXForm;
