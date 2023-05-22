import React from "react";
import Link from "next/link";
type props = {
  post: Post;
  user: User | null | undefined;
};

export default function PostCard({ post, user }: props) {
  return (
    <article className="flex-col mb-2 p-2 border-2 ">
      <Link data-testid="post-link" href={"/posts/" + post.id}>
        <h2  className="font-bold capitalize">
          {post.title}
        </h2>
      </Link>
      <p></p>
      {(undefined !== user) !== null && (
        <Link data-testid="author-link" href={"/user/" + user?.id}>
          <h2 role="authortitle">Author: {user?.username}</h2>
        </Link>
      )}
    </article>
  );
}
