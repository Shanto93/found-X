import React from "react";
import {
  Card as NextUICard,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { format } from "date-fns";
import type { IPost } from "@/src/types";

const Card = ({ post }: { post: IPost }) => {
  const { title, images, city, dateFound, category } = post;
  return (
    <NextUICard isFooterBlurred className="h-[300px] w-full">
      <CardHeader className="absolute top-1 z-10 flex-col items-start">
        <p className="absolute -top-0 right-1 rounded-full bg-black px-2 text-tiny text-white uppercase">
          {category?.name}
        </p>
        <h4 className="mt-2 rounded bg-black/30 p-1 text-2xl font-medium text-white">
          {title}{" "}
        </h4>
      </CardHeader>

      <Image
        removeWrapper
        alt="Card example background"
        className="scale-125 z-0 h-full w-full -tanslate-y-6 object-cover"
        src={images[0]}
      ></Image>

      <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-500">
        <div>
          <p className="text-tiny">{city}</p>
          <p className="text-tiny">
            {format(new Date(dateFound), "dd MMMM, yyyy")}{" "}
          </p>
        </div>

        <Button
          className="bg-black text-white text-tiny"
          radius="full"
          size="sm"
        >
          Details
        </Button>
      </CardFooter>
    </NextUICard>
  );
};

export default Card;
