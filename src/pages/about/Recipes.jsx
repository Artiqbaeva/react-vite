import React, { useEffect, useState } from "react";
import { api } from "../../api";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    api.get("/recipes").then((res) => setRecipes(res.data.recipes));
  }, []);

  return (
    <div className="container mx-auto py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-4"
        >
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800">{recipe.name}</h3>
          <p className="text-gray-600 line-clamp-2">{recipe.instructions}</p>
          <p className="text-sm mt-2 text-gray-500">Prep Time: {recipe.prepTimeMinutes} mins</p>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
