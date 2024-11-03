import React from "react";
import {Card as NextUICard, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { Image } from '@nextui-org/image';
import { Button } from '@nextui-org/button';
import { format } from 'date-fns'

const CardError = () => {
  return (
    <NextUICard isFooterBlurred className='h-[300px] w-[250px] flex justify-center items-center bg-red-300'>
            <h2 className="text-white">Something went wrong...</h2>
        </NextUICard>
  );
};

export default CardError;
