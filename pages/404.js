import React from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="content">
      <h1>Oops!</h1>
    </div>
  );
}
