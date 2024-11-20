import { Navbar } from "@/src/components/ui/navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar></Navbar>
      <main className="container mx-auto max-w-screen-lg flex-grow">
        {children}
      </main>
    </div>
  );
};

export default layout;
