import { getRecentPosts } from "@/src/services/RecentPosts";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React, { Suspense } from "react";
import Error from './../../../app/error';

const RecentPosts = async () => {
  const { data } = await getRecentPosts();
  console.log("Recent Posts are2: ", data);
  return (
    <div>
      <div className="section-title my-8">
        <h2 className="text-center mb-2 text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>

      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        {data.map((item) => (
          <p>{item.title}</p>
        ))}
      </div>
      

      <div className="flex justify-center">
        <Button className="rounded-md bg-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </div>
  );
};

export default RecentPosts;
