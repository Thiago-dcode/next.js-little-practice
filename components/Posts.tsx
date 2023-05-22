import React from "react";
import Link from "next/link";
import binarySearch from "@/utils/binarySearch";
import PostCard from "./PostCard";
type props = {
  posts: Post[];
  users: User[]
};

export default function Posts({ posts,users }: props) {
  return (
    <div className="flex-col items-center justify-center">
      <h1 role="contentinfo">Posts:</h1>
      {posts.map((post, i) => {
        const userPost = users.length === 0 ?users[0]: binarySearch(users, post.userId, 0, users.length-1)
        
       
          return (
            <PostCard post={post} user ={userPost}/>
          );
      })}
    </div>
  );
}
