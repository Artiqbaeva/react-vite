import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts")
      .then(res => setPosts(res.data.posts))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto py-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map(post => (
        <div
          key={post.id}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-5 cursor-pointer"
          onClick={() => navigate(`/posts/${post.id}`)}
        >
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-600 truncate">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;

