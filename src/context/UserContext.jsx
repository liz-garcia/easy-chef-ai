import { createContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userRecipes, setUserRecipes] = useState([]);

  return (
    <UserContext.Provider
      value={{ userName, userRecipes, setUserName, setUserRecipes }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserContext, UserContextProvider };
