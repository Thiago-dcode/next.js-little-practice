import React, { Suspense } from "react";
import PostCard from "@/components/PostCard";

async function getUser(id: number) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getAllUsersPosts(id: number) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=" + id
  );

  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function page({ params }: { params: { id: number } }) {
  const userData: Promise<User> = getUser(params.id);
  const UserPostsData: Promise<Post[]> = getAllUsersPosts(params.id);
  const user = await userData;
  return (
    <div className="flex-col items-center justify-center">
      <div>
        <h2>{user.name}</h2>
        <h2>{user.username}</h2>
        <h2>{user.email}</h2>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            {(await UserPostsData).map((post) => {
              return <PostCard post={post} user={user} />;
            })}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
