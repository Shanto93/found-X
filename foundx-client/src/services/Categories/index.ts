import { axiosInstance } from "@/src/lib/axiosInstance";

const getCategories = async () => {
  try {
    const { data } = await axiosInstance.get("/item-categories");
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getCategories;
