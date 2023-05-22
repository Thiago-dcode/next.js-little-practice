import React from "react";
import type { Metadata } from "next";
import getAllPosts from "@/lib/getAllPosts";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
import binarySearch from "@/utils/binarySearch";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Posts",
};

export default async function page() {
  const postData: Promise<Post[]> = getAllPosts();
  const userData: Promise<User[]> = getAllUsers();
  const [posts,users] = await Promise.all([postData,userData]);
  return (
    <div className="flex-col   items-center justify-center">
      {posts.map((post, i) => {
        const userPost = binarySearch(users, post.userId, 0, users.length-1)
       
          return (
            <PostCard post={post} user ={userPost}/>
          );
      })}
    </div>
  );
}
