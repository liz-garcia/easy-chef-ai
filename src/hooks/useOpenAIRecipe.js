import { useEffect, useState } from "react";
import { generateRecipeHTML } from "../services/openaiAPI.js";

const useOpenAIRecipe = (ingredients, categories, triggerOpenAI = true) => {
  const [recipeHTML, setRecipeHTML] = useState("");
  // const [recipeImageURL, setRecipeImageURL] = useState("");

  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const requestRecipe = async () => {
    setLoading(true);
    try {
      const html = await generateRecipeHTML(ingredients, categories);
      setRecipeHTML(html);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (triggerOpenAI) {
      requestRecipe();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerOpenAI]);

  return { recipeHTML, loading, error, requestRecipe };
};

export default useOpenAIRecipe;
