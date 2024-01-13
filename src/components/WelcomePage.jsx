import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

const WelcomePage = () => {
  const [name, setName] = useState("");

  const userContext = useContext(UserContext);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEnterClick = () => {
    userContext.updateUserName(name);
    console.log("Updated User:", userContext.userName);
  };

  return (
    <>
      <h1>Welcome{name && " " + name}!</h1>
      <label htmlFor="nameInput">Enter your name:</label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={handleNameChange}
      />
      <button onClick={handleEnterClick}>Enter</button>
    </>
  );
};

export default WelcomePage;
