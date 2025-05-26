import React, { useEffect, useState } from "react";
import { api } from "../../api";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data.products));
  }, []);

  return (
    <div className="container mx-auto py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-5"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-gray-600 truncate">{product.description}</p>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-green-600 font-semibold">${product.price}</span>
            <span className="text-sm text-gray-500 font-[sans-serif]"> {product.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
