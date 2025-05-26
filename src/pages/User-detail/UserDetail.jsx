import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get(`/users/${id}`).then((res) => setUser(res.data));
  }, [id]);

  return (
    <div className="container py-10">
      {user && (
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow p-6">
          <img src={user.image} alt={user.firstName} className="rounded-full w-24 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-center">{user.firstName} {user.lastName}</h2>
          <p className="text-center text-gray-600">{user.email}</p>
          <div className="mt-4 text-sm text-gray-700">
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
