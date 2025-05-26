import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  return (
    <div className="container py-10">
      {post && (
        <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
