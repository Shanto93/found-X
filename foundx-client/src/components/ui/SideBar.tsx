import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";
import { MdWifiFind } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="w-60 bg-[#130f40] min-h-screen text-black dark:text-white">
      <ul className="flex flex-col items-center justify-center pt-5 gap-y-3">
        <Link href="/dashboard/content">
          <li className="text-white">Content 1</li>
        </Link>
        <Link href="/dashboard/contentt">
          <li className="text-white">Content 2</li>
        </Link>
        <li className="text-white">Content 4</li>
        <li className="text-white">Content 4</li>
      </ul>

      <Divider className="my-4 text-white" />

      <ul className="flex flex-col items-center justify-center pt-5 gap-y-3">
        <Link href="/">
        <FaHome className="text-2xl mr-2 text-white"/>
          <li className="text-white">Home</li>
        </Link>
        <Link href="/about">
        <AiFillProfile className="text-2xl mr-2 text-white"/>
          <li className="text-white">About</li>
        </Link>
        <Link href="/found-items">
        <MdWifiFind className="text-2xl mr-2 text-white"/>
          <li className="text-white">Found Items</li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
