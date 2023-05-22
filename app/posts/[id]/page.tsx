import React from "react";
import { useRouter } from "next/router";
async function getPost(id: number) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
 
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page({ params }: { params: { id: number } }) {
  const postData: Promise<Post> = getPost(params.id);
  const post = await postData;
  return (
    <div className="flex-col items-center justify-center w-96">
      <h1 className="text-3xl">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
