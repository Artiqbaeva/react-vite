import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api"; 
const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl duration-300"
          >
            <div className="p-6 flex flex-col items-center text-center">
              <img
                src={user.image}
                alt={user.firstName}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow"
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-800">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-sm text-gray-500">{user.email}</p>
              <div className="flex gap-3 mt-4 text-sm text-gray-700">
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  Age: {user.age}
                </div>
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {user.gender}
                </div>
              </div>
              <button
                onClick={() => navigate(`/contact/${user.id}`)}
                className="mt-5 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-full transition duration-200"
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
