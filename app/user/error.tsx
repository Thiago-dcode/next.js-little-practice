"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error.message);
  }, [error]);

  return (
    <div>
      <h2>Sorry, this page isn't available.</h2>
      <p>
        The link you followed may be broken, or the page may have been removed.{" "}
        <Link href={'/'}>Go back to Home.</Link> 
      </p>
    </div>
  );
}
