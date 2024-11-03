import React from "react";
import {
  Card as NextUICard,
  CardHeader,
  CardFooter,
} from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton"; // assuming NextUI has a Skeleton component

const CardSkeleton = () => {
  return (
    <NextUICard isFooterBlurred className="h-[300px] w-full animate-pulse">
      <CardHeader className="absolute top-1 z-10 flex-col items-start">
        <Skeleton className="absolute -top-0 right-1 rounded-full h-6 w-16 bg-gray-300" />
        <Skeleton className="mt-2 h-8 w-32 bg-gray-300 rounded" />
      </CardHeader>

      <div className="z-0 h-full w-full bg-gray-200 object-cover"></div>

      <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-500">
        <div>
          <Skeleton className="h-4 w-20 bg-gray-300 mb-1" />
          <Skeleton className="h-4 w-32 bg-gray-300" />
        </div>
        <Skeleton className="h-8 w-20 bg-gray-400 rounded-full" />
      </CardFooter>
    </NextUICard>
  );
};

export default CardSkeleton;
