import { createContext, useState } from "react";
import PropTypes from "prop-types";

// This context will handle the variables 'ingredients'
// and 'categories', which will be used in each prompt
// sent to OpenAI when requesting a new recipe
const RecipeContext = createContext();

const RecipeContextProvider = ({ children }) => {
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeCategories, setRecipeCategories] = useState([]);

  return (
    <RecipeContext.Provider
      value={{
        recipeIngredients,
        recipeCategories,
        setRecipeIngredients,
        setRecipeCategories,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

RecipeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RecipeContext, RecipeContextProvider };
