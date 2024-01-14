import "../styles/RecipePage.css";

import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext.jsx";
import { useNavigate } from "react-router-dom";

import useOpenAIRecipe from "../hooks/useOpenAIRecipe.js";

const RecipePage = () => {
  const { recipeIngredients, recipeCategories } = useContext(RecipeContext);
  const { recipe, loading, error } = useOpenAIRecipe(
    recipeIngredients,
    recipeCategories,
  );
  const navigate = useNavigate();

  // Remove <html> and <body> tags
  const recipeHTML = recipe.html;
  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = recipeHTML;
  const strippedHTMLRecipe = tempContainer.innerHTML;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error generating recipe: {error.message}</p>;
  }

  const handleEnterClick = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Creating new recipe...</h1>
      <h2>Some text area</h2>
      {/* Render the HTML using dangerouslySetInnerHTML */}
      <div dangerouslySetInnerHTML={{ __html: strippedHTMLRecipe }} />
      <div>{strippedHTMLRecipe}</div>
      <p>{recipe.imageURL}</p>
      <p>{recipe.title}</p>
      <button onClick={handleEnterClick}>Restart</button>
    </>
  );
};

export default RecipePage;
