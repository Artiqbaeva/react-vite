import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    api.get(`/recipes/${id}`).then((res) => setRecipe(res.data));
  }, [id]);

  return (
    <div className="container py-10">
      {recipe && (
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6">
          <img src={recipe.image} alt={recipe.name} className="w-full rounded-md mb-4" />
          <h2 className="text-2xl font-semibold">{recipe.name}</h2>
          <p className="mt-2 text-gray-700">{recipe.instructions}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
