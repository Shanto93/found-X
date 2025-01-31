"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import type { IUser } from "../types";
import { currentUser } from "../services/AuthServices";

interface IUserProviderValues {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<IUserProviderValues | undefined>(undefined);
const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const user = await currentUser();
    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  const userInfo = {
    user,
    setUser,
    isLoading,
    setIsLoading,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("User must be within the UserProvider context.");
  }
  return context;
};

export default UserProvider;
