import React from "react";
import { Progress } from "@nextui-org/progress";

const Loading = () => {
  return (
    <div className="flex justify-center items-center bg-black/10 h-screen fixed inset-0 z-20 backdrop-blur-md">
      <Progress
        size="sm"
        isIndeterminate
        aria-label="Loading..."
        className="max-w-md"
      />
    </div>
  );
};

export default Loading;
