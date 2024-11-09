import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { postLoginData, postRegisterData } from "../services/AuthServices";
import type { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await postRegisterData(userData),
    onSuccess: () => {
      toast.success("User registered successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await postLoginData(userData),
    onSuccess: () => {
      toast.success("User successfully Login!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
