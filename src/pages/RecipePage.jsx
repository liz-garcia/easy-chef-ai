import "../styles/pages/RecipePage.css";
import HtmlReactParser from "html-react-parser";
import { useContext, useEffect } from "react";
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

  useEffect(() => {
    const mainElement = document.querySelector("main");

    if (mainElement) {
      mainElement.className = "recipePageMain";
    }

    // Cleanup function (if needed)
    return () => {
      if (mainElement) {
        mainElement.className = ""; // Remove the class on component unmount
      }
    };
  }, []);

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
      {/* Render the HTML using ReactHtmlParser */}
      {HtmlReactParser(strippedHTMLRecipe)}
      <button id="restartButton" className="text-button" onClick={handleEnterClick}>Restart!</button>
    </>
  );
};

export default RecipePage;
