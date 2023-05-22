import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "posts",
  description: "Display all posts",
};
export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>layout post page</h1>
      <main className="border-2 flex min-h-screen items-center justify-center">
        {children}
      </main>
    </>
  );
}
