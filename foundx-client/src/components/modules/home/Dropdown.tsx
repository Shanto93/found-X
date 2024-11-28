"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { useRouter } from "next/navigation";

const DropdownUser = () => {
  const router = useRouter();

  const handleRoutes = (route: string) => {
    router.push(route);
  };
  return (
    <div>
      <Dropdown className="cursor-pointer bg-red-600">
        <DropdownTrigger>
          {/* <Avatar name="Jane" /> */}
          <p className="cursor-pointer">Dashboard</p>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Static Actions"
          className="bg-red-600 text-green-500"
        >
          <DropdownItem
            onClick={() => {
              handleRoutes("/profile");
            }}
          >
            Profile
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              handleRoutes("/profile/about");
            }}
          >
            About
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              handleRoutes("/profile/claim-requests");
            }}
          >
            Claim Requests
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              handleRoutes("/profile/create-post");
            }}
          >
            Create Post
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              handleRoutes("/profile/settings");
            }}
            className="text-green-500"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              handleRoutes("/profile");
            }}
            className="text-danger"
            color="danger"
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownUser;
