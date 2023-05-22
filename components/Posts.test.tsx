import React from "react";
import { render, screen } from "@testing-library/react";
import Posts from "./Posts";
import "@testing-library/jest-dom";
import { link } from "fs";

test("render posts", () => {
  const posts = [
    { userId: 1, id: 1, title: "title 1", body: "body 1" },
    { userId: 2, id: 2, title: "title 2", body: "body 2" },
    { userId: 2, id: 3, title: "title 3", body: "body 3" },
  ];
  const users = [
    { id: 1, name: 'User 1', username: 'user1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', username: 'user2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', username: 'user3', email: 'user3@example.com' },
  ];


  const {container} = render(<Posts posts={posts} users={users} />);
  const h1Element = screen.getByRole("contentinfo");
  const linkElementsPost = screen.getAllByTestId('post-link')
  posts.forEach((post,i) =>{
    expect(linkElementsPost[i]).toHaveTextContent(post.title)
  })
  expect(h1Element).toHaveTextContent("Posts:");
 
});
