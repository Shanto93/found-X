import { Progress } from "@nextui-org/progress";
import React from "react";

const loading = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Progress
        size="sm"
        isIndeterminate
        aria-label="Loading..."
        className="max-w-md"
      />
    </div>
  );
};

export default loading;
