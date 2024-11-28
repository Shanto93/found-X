import SideBar from "@/src/components/ui/SideBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full mx-auto">
      <div className="md:flex">
        <div className="md:w-1/5">
          <SideBar></SideBar>
        </div>
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
