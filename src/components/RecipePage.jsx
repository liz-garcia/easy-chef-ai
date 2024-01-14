// import { useContext } from "react";
// import { UserContext } from "../context/UserContext.jsx";
// import useOpenAIRecipe from "../hooks/useOpenAIRecipe.js";
import { useNavigate } from "react-router-dom";


const RecipePage = () => {
//   const userContext = useContext(UserContext);
// const { recipeHTML, loading, error } = useOpenAIRecipe(selectedIngredients, selectedCategories);

// if (loading) {
//   return <p>Loading...</p>;
// }

// if (error) {
//   return <p>Error fetching products: {error.message}</p>;
// }

const navigate = useNavigate();

const handleEnterClick = () => {
  navigate("/");
};

  return (
    <>
      <h1>Creating new recipe...</h1>
      <h2>Some text area</h2>
      <button onClick={handleEnterClick}>Restart</button>
    </>
  );
};

export default RecipePage;
