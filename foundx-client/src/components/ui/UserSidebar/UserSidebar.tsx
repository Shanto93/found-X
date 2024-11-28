"use client";

import { Button } from "@nextui-org/button";
import React from "react";
import { adminLinks, userLinks } from "./constant";
import SidebarOptions from "./SidebarOptions";
import Link from "next/link";
import { useUser } from "@/src/context/user.context";

const UserSidebar = () => {
  const { user } = useUser();
  return (
    <div>
      <div className="rounded-xl bg-default-100 p-2">
        <div className="h-[250px] w-full rounded-md">
          <h2>Ekhane Profile picture</h2>
        </div>
        <div className="my-3">
          <h1 className="text-2xl font-semibold">Mofiz</h1>
          <p className="text-sm break-words">mofiz@gmail.com</p>
        </div>
        <Button
          as={Link}
          color="primary"
          variant="bordered"
          className="mt-2 w-full"
          href="/dashboard/profile/createPost"
        >
          Create Post
        </Button>
      </div>
      <div className="mt-3 space-y-2 rounded-xl bg-default-100 p-2">
        <SidebarOptions
          links={user?.role === "USER" ? userLinks() : adminLinks()}
        />
      </div>
    </div>
  );
};

export default UserSidebar;
