import { getRecentPosts } from "@/src/services/RecentPosts";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React, { Suspense } from "react";
import type { IPost } from "@/src/types";
import Card from "@/src/components/ui/Card";

const RecentPosts = async () => {
  const { data: posts } = await getRecentPosts();
  console.log("Recent Posts are2: ", posts);
  return (
    <div>
      <div className="section-title my-8">
        <h2 className="text-center font-semibold mb-2 text-xl md:text-2xl">Recently Found Items</h2>
        <p className="text-center sm:text-sm md:text-lg">
          A list of items that have been recently found and reported.
        </p>
      </div>

      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-3">
        {posts.map((post: IPost) => (
          <Card key={post._id} post={post}></Card>
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
