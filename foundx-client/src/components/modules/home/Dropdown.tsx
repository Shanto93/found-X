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
      <Dropdown className="cursor-pointer">
        <DropdownTrigger>
          <Avatar name="Jane" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
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
