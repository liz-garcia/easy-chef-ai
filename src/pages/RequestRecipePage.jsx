import "../styles/pages/RequestRecipePage.css";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { RecipeContext } from "../context/RecipeContext.jsx";
import { useNavigate } from "react-router-dom";

const RequestRecipePage = () => {
  // Ingredients and Categories that will be sent to recipeContext
  const [ingredients, setIngredients] = useState([]);
  const [categories, setCategories] = useState([]);

  // Manage input for ingredients and categories
  const [ingredientInput, setIngredientInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

  // Contexts to access userName,
  // and for updating variables in RecipeContext
  const userContext = useContext(UserContext);
  const recipeContext = useContext(RecipeContext);

  const navigate = useNavigate();

  useEffect(() => {
    const mainElement = document.querySelector("main");

    if (mainElement) {
      mainElement.className = "requestRecipePageMain";
    }

    // Cleanup function (if needed)
    return () => {
      if (mainElement) {
        mainElement.className = ""; // Remove the class on component unmount
      }
    };
  }, []);

  const handleIngredientsChange = (event) => {
    setIngredientInput(event.target.value);
  };

  const handleCategoriesChange = (event) => {
    setCategoryInput(event.target.value);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ingredientInput]);
    setIngredientInput("");
  };

  const handleAddCategory = () => {
    setCategories([...categories, categoryInput]);
    setCategoryInput("");
  };

  // Update ingredients and categories in RecipeContext
  // Navigate to '/recipe/' route
  const handleEnterClick = () => {
    recipeContext.setRecipeIngredients(ingredients);
    recipeContext.setRecipeCategories(categories);
    navigate("/recipe");
  };

  return (
    <>
      <div id="requestRecipePage">
        <h1>
          {userContext.userName
            ? `Good to see you, ${userContext.userName}!`
            : "Good to see you!"}
        </h1>
        <h2>I am your smart friend. Let&apos;s make a new recipe.</h2>

        {/* Ingredients input and list */}
        <div id="ingredientsInputSection">
          <label htmlFor="ingredients">
            What ingredients are we using today?
          </label>
          <div>
            <input
              type="text"
              id="ingredients"
              value={ingredientInput}
              onChange={handleIngredientsChange}
            />
            <button
              className="text-button"
              id="addIngredient"
              onClick={handleAddIngredient}
            >
              Add Ingredient
            </button>
            <div className="recipeInput">
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Categories input and list */}
        <div id="categoriesInputSection">
          <label htmlFor="categories">What categories do you want?</label>
          <div>
            <input
              type="text"
              id="categories"
              value={categoryInput}
              onChange={handleCategoriesChange}
            />
            <button
              className="text-button"
              id="addCategory"
              onClick={handleAddCategory}
            >
              Add Category
            </button>
            <div className="recipeInput">
              <ul>
                {categories.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <button onClick={handleEnterClick}>Enter</button>
      </div>
    </>
  );
};

export default RequestRecipePage;
