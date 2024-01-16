import { useEffect, useState } from "react";
import {
  generateRecipeHTML,
  generateRecipeImageURL,
} from "../services/openaiAPI.js";

// Returns recipe formatted as a string containing HTML
const useOpenAIRecipe = (ingredients, categories, triggerOpenAI = true) => {
  const [recipe, setRecipe] = useState({
    html: "",
    imageURL: "",
    title: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const generateRecipeData = async () => {
    setLoading(true);
    try {
      const html = await generateRecipeHTML(ingredients, categories);

      // Extract text content inside the <h1></h1> element
      const parser = new DOMParser();
      const parsedHTML = parser.parseFromString(html, "text/html");
      const h1Element = parsedHTML.querySelector("h1");
      const recipeTitle = h1Element ? h1Element.textContent : "";

      // Generate image URL using the extracted recipe title
      const url = await generateRecipeImageURL(recipeTitle);

      // Update img element in recipe.html
      const imageElement = parsedHTML.querySelector("img");
      if (imageElement) {
        imageElement.src = url;
        imageElement.alt = recipeTitle;
      }

      // Get the HTML string from the parsed HTML
      const htmlString = parsedHTML.documentElement.outerHTML;

      // Update the recipe state with all the changes
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        html: htmlString,
        title: recipeTitle,
        imageURL: url,
      }));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (triggerOpenAI) {
      generateRecipeData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerOpenAI]);

  return { recipe, loading, error, generateRecipeData };
};

export default useOpenAIRecipe;
