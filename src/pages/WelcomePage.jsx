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
      {/* <div className="emojis">
        <div id="eggs">
            <img alt="Eggs emoji" src="/eggs.png"/>
        </div>
      </div> */}
      <div id="welcome-image">
        <img alt="Welcoming AI Chef in the kitchen." src="/welcome-page-image.png"/>
      </div>
      <div id="welcome-text">
        <div id="logo">
          <img alt="Easy AI Chef Logo" src="/easyChefAI-logo.png"/>
        </div>
        <h1>Welcome{name && " " + name}!</h1>
        <label htmlFor="nameInput">Need ideas for what to cook today?<br></br>Let your AI chef help you!</label>
        <div className="input-area">
          <input
            type="text"
            id="nameInput"
            value={name}
            onChange={handleNameChange} placeholder="Please enter your name"
          />
          <button className="text-button" onClick={handleEnterClick}>Start</button>
        </div>
        {/* Conditionally render error message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </>
  );
};

export default WelcomePage;
