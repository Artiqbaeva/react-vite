import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    axios.get(`/products/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]); 

  return (
    <div className="container mx-auto grid grid-cols-2 gap-4 py-10">
      <div>
        <img src={data?.images?.[index]} alt="Main" />
        <div className="flex gap-2 mt-2">
          {data?.images?.map((item, inx) => (
            <img
              src={item}
              onClick={() => setIndex(inx)}
              className="w-16 cursor-pointer border"
              key={inx}
              alt={`Thumb ${inx}`}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">{data?.title}</h1>
        <strong className="text-4xl text-green-600 block my-4">
          {data?.price} USD
        </strong>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
