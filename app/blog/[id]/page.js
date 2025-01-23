import getPost from "@/lib/getPost";
import React from "react";

async function BlogDetails({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <div className="p-6 container rounded-md bg-white mt-10 mx-auto text-center">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
    </div>
  );
}

export default BlogDetails;
