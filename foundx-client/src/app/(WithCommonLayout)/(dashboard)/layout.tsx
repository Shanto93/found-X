import SideBar from "@/src/components/ui/SideBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full mx-auto">
      <div className="flex">
        <div>
          <SideBar></SideBar>
        </div>
        <div className="ml-7">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
