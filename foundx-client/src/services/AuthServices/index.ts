"use server";

interface JwtPayload {
  _id: string;
  name: string;
  email: string;
  mobileNumber: string;
  role: "USER" | "ADMIN";
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
  profilePhoto: string;
}

import { axiosInstance } from "@/src/lib/axiosInstance";
import { cookies } from "next/headers";
import type { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

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

export const postLoginData = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);
    if (data.success) {
      (await cookies()).set("access token", data?.data?.accessToken);
      (await cookies()).set("refresh token", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const logout = async () => {
  (await cookies()).delete("access token");
  (await cookies()).delete("refresh token");
};

// export const currentUser = async () => {
//   const accessToken = (await cookies()).get("access token")?.value;
//   let decodedToken = null;

//   if (accessToken) {
//     decodedToken = jwtDecode<JwtPayload>(accessToken);
//     // console.log(decodeToken);
//     return {
//       _id: decodedToken._id,
//       name: decodedToken.name,
//       email: decodedToken.email,
//       mobileNumber: decodedToken.mobileNumber,
//       role: decodedToken.role,
//       status: decodedToken.status,
//       profilePhoto: decodedToken.profilePhoto,
//     };
//   }

//   return decodedToken;
// };

export const currentUser = async () => {
  const cookiesInstance = await cookies();
  const accessToken = cookiesInstance.get("access token")?.value;

  if (!accessToken) return null;

  try {
    const decodedToken = jwtDecode<JwtPayload>(accessToken);

    if (decodedToken.role !== "USER" && decodedToken.role !== "ADMIN") {
      throw new Error("Invalid role in token");
    }

    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      mobileNumber: decodedToken.mobileNumber,
      role: decodedToken.role, // Guaranteed to be "USER" or "ADMIN"
      status: decodedToken.status,
      profilePhoto: decodedToken.profilePhoto,
    };
  } catch (error) {
    console.error("Error decoding token:", error);
    return null; // Return null if decoding fails
  }
};