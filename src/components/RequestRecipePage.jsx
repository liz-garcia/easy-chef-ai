import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const RequestRecipePage = () => {
  const [ingredients, setIngredients] = useState([]);
  const [categories, setCategories] = useState([]);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const selectedIngredients = ['cheese', 'ham'];
  const selectedCategories = ['no-bake', 'breakfast'];

  useEffect(() => {
    setIngredients(selectedIngredients);
    setCategories(selectedCategories);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  const handleEnterClick = () => {
    navigate("/recipe");
  };

  return (
    <>
      <h1>
        {userContext.userName
          ? `Good to see you, ${userContext.userName}!`
          : "Good to see you!"}
      </h1>
      <h2>Let&apos;s choose some ingredients.</h2>
      <p>{`${ingredients}`}</p>
      <p>{`${categories}`}</p>
      <button onClick={handleEnterClick}>Enter</button>
    </>
  );
};

export default RequestRecipePage;
