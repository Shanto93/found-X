"use client";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { registerSchema } from "@/src/schemas/register.schema";
import { Link } from "@nextui-org/link";
import { useUserRegistration } from "@/src/hooks/auth.hook";

const Register = () => {
  const { mutate: handleRegisterUser, data, isPending } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      profilePhoto: "https://ibb.co.com/xmMj14T",
    };
    // console.log("Inside form user data", userData);
    handleRegisterUser(userData);
  };

  if (isPending) {
    // handle loading state
  }

  //Eye icon visibility
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="w-full h-screen md:flex justify-center items-center">
      <div className="flex-1">
        <Image className="w-full" alt="Login Page Image" src="/login.png" />
      </div>
      <div className="flex-1 px-10">
        <FXForm onSubmit={onSubmit} resolver={zodResolver(registerSchema)}>
          <div className="w-4/5 flex flex-col gap-y-5">
            <div>
              <h2 className="text-center text-2xl font-bold">
                Register with FoundX
              </h2>
              <p className="text-center mt-2 text-tiny">
                Welcome Back! Let's Get Start
              </p>
            </div>
            <div className="flex-1">
              <FXInput
                name="name"
                isClearable
                type="text"
                label="Your Name"
                required
                variant="bordered"
                placeholder="Enter your name"
                onClear={() => console.log("input cleared")}
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <FXInput
                name="email"
                isClearable
                type="email"
                label="Email"
                required
                variant="bordered"
                placeholder="Enter your email"
                onClear={() => console.log("input cleared")}
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <FXInput
                name="mobileNumber"
                isClearable
                type="number"
                label="Mobile Number"
                required
                variant="bordered"
                placeholder="Enter your mobile number"
                onClear={() => console.log("input cleared")}
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <FXInput
                label="Password"
                variant="bordered"
                name="password"
                required
                placeholder="Enter your password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                    aria-label="toggle password visibility"
                  >
                    {isVisible ? (
                      <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <FaEye className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
              />
            </div>

            <Button type="submit" color="primary" variant="shadow">
              SUBMIT
            </Button>
            <div>
              <p className="text-center">
                Already registered?{" "}
                <span className="text-blue-500">
                  <Link href="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </FXForm>
      </div>
    </div>
  );
};

export default Register;
