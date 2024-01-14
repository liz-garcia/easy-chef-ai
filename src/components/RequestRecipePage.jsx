import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { RecipeContext } from "../context/RecipeContext.jsx";
import { useNavigate } from "react-router-dom";

const RequestRecipePage = () => {
  // Ingredients and Categories that will be sent to recipeContext
  const [ingredients, setIngredients] = useState([]);
  const [categories, setCategories] = useState([]);

  // Manage input for ingredients and categories
  const [ingredientInput, setIngredientInput] = useState('');
  const [categoryInput, setCategoryInput] = useState(''); 

  // Contexts to access userName,
  // and for updating variables in RecipeContext
  const userContext = useContext(UserContext);
  const recipeContext = useContext(RecipeContext);

  const navigate = useNavigate();

  const handleIngredientsChange = (event) => {
    setIngredientInput(event.target.value);
  };

  const handleCategoriesChange = (event) => {
    setCategoryInput(event.target.value);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ingredientInput]);
    setIngredientInput('');
  };

  const handleAddCategory = () => {
    setCategories([...categories, categoryInput]);
    setCategoryInput('');
  };

  // Update ingredients and categories in RecipeContext
  // Navigate to '/recipe/' route
  const handleEnterClick = () => {
    recipeContext.setRecipeIngredients(ingredients);
    recipeContext.setRecipeCategories(categories);
    console.log(recipeContext.recipeIngredients, recipeContext.recipeCategories);
    console.log(recipeContext.recipeIngredients, recipeContext.recipeCategories);
    navigate("/recipe");
  };

  return (
    <>
      <h1>
        {userContext.userName
          ? `Good to see you, ${userContext.userName}!`
          : "Good to see you!"}
      </h1>
      <h2>I am your smart friend. Let's make a new recipe.</h2>

      {/* Ingredients input and list */}
      <label htmlFor="ingredients">What ingredients are we using today?</label>
      <div>
      <input
        type="text"
        id="ingredients"
        value={ingredientInput}
        onChange={handleIngredientsChange}
      />
      <button id="addIngredient" onClick={handleAddIngredient}>
        Add Ingredient
      </button>
      <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
      </ul>
      </div>

      {/* Categories input and list */}
      <label htmlFor="categories">What categories do you want?</label>
      <div>
      <input
        type="text"
        id="categories"
        value={categoryInput}
        onChange={handleCategoriesChange}
      />
      <button id="addCategory" onClick={handleAddCategory}>
        Add Category
      </button>
      <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
      </ul>
      </div>

      <button onClick={handleEnterClick}>Enter</button>
    </>
  );
};

export default RequestRecipePage;
