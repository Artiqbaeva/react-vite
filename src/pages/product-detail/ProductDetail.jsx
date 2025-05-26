import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    api
    .get(`/products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!data) {
    return <div className="container py-10 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
      <div>
        <img
          src={data.images[index]}
          alt={`Product Image ${index + 1}`}
          className="rounded-lg w-full object-cover"
        />
        <div className="flex gap-2 mt-2 overflow-x-auto">
          {data.images.map((item, inx) => (
            <img
              key={inx}
              src={item}
              onClick={() => setIndex(inx)}
              className={`w-16 h-16 cursor-pointer rounded border ${
                index === inx ? "border-blue-600" : "border-transparent"
              }`}
              alt={`Thumbnail ${inx + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="my-auto">
        <h1 className="text-3xl font-semibold">{data.title}</h1>
        <strong className="text-4xl text-green-600 block my-4">${data.price} USD</strong>
        <p className="text-gray-700">{data.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
    