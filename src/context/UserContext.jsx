import { createContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userName, updateUserName] = useState('');
  const [userRecipes, updateUserRecipes] = useState([]);

  return (
    <UserContext.Provider value={{ userName, userRecipes, updateUserName, updateUserRecipes }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserContext, UserContextProvider };
