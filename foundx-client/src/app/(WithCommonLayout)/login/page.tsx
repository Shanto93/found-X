"use client";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/src/schemas/login.schema";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { Link } from "@nextui-org/link";
import { useUserLogin } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/ui/Loading";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/src/context/user.context";

const Login = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setIsLoading: userLoading } = useUser();

  const redirect = searchParams.get("redirect");

  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();
  console.log(redirect);

  React.useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleUserLogin(data);
    userLoading(true);
  };

  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      {isPending && <Loading />}
      <div className="w-full h-screen md:flex justify-center items-center">
        <div className="flex-1">
          <Image className="w-full" alt="Login Page Image" src="/login02.svg" />
        </div>
        <div className="flex-1 px-10">
          <FXForm onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
            <div className="w-4/5 flex flex-col gap-y-5">
              <div>
                <h2 className="text-center text-2xl font-bold">
                  Login with FoundX
                </h2>
                <p className="text-center mt-2 text-tiny">
                  Welcome Back! Let's Get Start
                </p>
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
                  Don't have an account?{" "}
                  <span className="text-blue-500">
                    <Link href="/register">Register</Link>
                  </span>
                </p>
              </div>
            </div>
          </FXForm>
        </div>
      </div>
    </>
  );
};

export default Login;
