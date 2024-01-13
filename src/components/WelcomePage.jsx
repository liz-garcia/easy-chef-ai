import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  // Set 'name' in this page
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Set 'userName' for UserContext.jsx
  // Set 'errorMessage' if 'name' input is not provided
  const handleEnterClick = () => {
    if (name === "") {
      setErrorMessage("Please provide a name input.");
    } else {
      setErrorMessage("");
      userContext.setUserName(name);
      navigate("/create-recipe");
    }
  };

  return (
    <>
      <h1>Welcome{name && " " + name}!</h1>
      <label htmlFor="nameInput">Please enter your name:</label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={handleNameChange}
      />
      <button onClick={handleEnterClick}>Enter</button>
      {/* Conditionally render error message */}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

export default WelcomePage;
