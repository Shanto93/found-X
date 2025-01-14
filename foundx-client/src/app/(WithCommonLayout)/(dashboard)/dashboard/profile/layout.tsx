
import UserSidebar from "@/src/components/ui/UserSidebar/UserSidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen mx-auto">
      <div className="md:flex">
        <div className="md:w-2/5 md:ml-5">
          <UserSidebar></UserSidebar>
        </div>
        <div className="w-full md:ml-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
