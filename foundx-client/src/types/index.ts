import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// export interface IPost {
//   title: string
//   description: string
//   images: string[]
//   location: string
//   city: string
//   dateFound: string
//   status: string
//   isReported: boolean
//   reportCount: number
//   category: string
//   user: string
//   questions: string[]
//   _id: string
//   createdAt: string
//   updatedAt: string
//   __v: number
// }

export interface ICategory {
  _id: string;
  name: string;
  postCount: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IUser {
  _id: string;
  name: string;
  role: "USER" | "ADMIN";
  email: string;
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
  mobileNumber: string;
  profilePhoto: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IPost {
  _id: string;
  title: string;
  description: string;
  images: string[];
  location: string;
  city: string;
  dateFound: string;
  status: "AVAILABLE" | "CLAIMED" | "LOST";
  isReported: boolean;
  reportCount: number;
  category: ICategory;
  user: IUser;
  questions: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
