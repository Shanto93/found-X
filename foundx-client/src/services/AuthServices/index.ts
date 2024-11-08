"use server";

import { axiosInstance } from "@/src/lib/axiosInstance";
import { cookies } from "next/headers";
import type { FieldValues } from "react-hook-form";

export const postRegisterData = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);
    if (data.success) {
      (await cookies()).set("access token", data?.data?.accessToken);
      (await cookies()).set("refresh token", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
