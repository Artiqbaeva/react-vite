import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";

const AboutDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    api
      .get(`/recipes/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching recipe detail:", err);
      });
  }, [id]);

  return (
    <div className="container mx-auto py-10">
      {data ? (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-6">
          <div className="flex flex-col items-center text-center">
            <img
              src={data.image}
              alt={`${data.firstName} ${data.lastName}`}
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
            <h2 className="text-3xl font-bold">{data.firstName} {data.lastName}</h2>

            <div className="mt-6 flex justify-around w-full text-gray-700">
              <div>
                <p className="text-xl font-semibold text-blue-600">{data.age}</p>
                <p>Age</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-blue-600">{data.height} cm</p>
                <p>Height</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-blue-600">{data.birthDate}</p>
                <p>Birth Date</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Loading recipe details...</p>
      )}
    </div>
  );
};

export default AboutDetail;
