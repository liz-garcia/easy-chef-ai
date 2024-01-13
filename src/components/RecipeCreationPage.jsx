import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

const RecipeCreationPage = () => {
  const userContext = useContext(UserContext);

  return (
    <>
      <h1>{userContext.userName ? `Nice to see you, ${userContext.userName}!` : 'Nice to see you!'}</h1>
      <h2>Let's choose some ingredients.</h2>
    </>
  );
};

export default RecipeCreationPage;
