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

    // Cleanup function
    return () => {
      if (mainElement) {
        mainElement.className = "";
      }
    };
  }, []);

  // Remove <html> and <body> tags
  // from the html response provided by OpenAI
  const recipeHTML = recipe.html;
  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = recipeHTML;
  const strippedHTMLRecipe = tempContainer.innerHTML;

  if (loading) {
    return (
      <div id="loading-API-message" className="API-message">
        <p>Creating a new recipe...</p>
        <p>This might take a couple minutes.</p>
        <p>Thank you for waiting 👩‍🍳</p>
      </div>
    );
  }

  if (error) {
    return (
      <div id="error-API-message" className="API-message">
        <p>Error generating recipe: {error.message}</p>
      </div>
    );
  }

  const handleEnterClick = () => {
    navigate("/");
  };

  return (
    <>
      {/* Render the HTML using ReactHtmlParser */}
      {HtmlReactParser(strippedHTMLRecipe)}
      <button
        id="restartButton"
        className="text-button"
        onClick={handleEnterClick}
      >
        Restart!
      </button>
    </>
  );
};

export default RecipePage;
