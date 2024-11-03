import { Input } from "@nextui-org/input";
import React from "react";
import { FiSearch } from "react-icons/fi";

const LandingPage = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-[url('/landing.jpg')] flex items-center justify-center">
      <div className="relative w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/2 mx-auto">
        <Input className="w-full px-8 py-5 sm:px-10" placeholder="Search..." />
        <FiSearch className="text-lg sm:text-xl absolute top-1/2 right-11 md:right-12 transform -translate-y-1/2" />
      </div>
    </div>
  );
};

export default LandingPage;
