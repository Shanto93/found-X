import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto max-w-screen-xl flex-grow">
      {children}
    </div>
  );
};

export default Container;
