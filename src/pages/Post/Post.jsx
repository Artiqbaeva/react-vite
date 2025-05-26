import React, { useEffect, useState } from "react";
import { api } from "../../api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((res) => setPosts(res.data.posts));
  }, []);

  return (
    <div className="container mx-auto py-10 space-y-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
          <div className="mt-4 text-sm text-gray-500">Tags: {post.tags.join(", ")}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
