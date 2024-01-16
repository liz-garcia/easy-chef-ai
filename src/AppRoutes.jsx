import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage.jsx";
import RequestRecipePage from "./pages/RequestRecipePage.jsx";
import RecipePage from "./pages/RecipePage.jsx";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<WelcomePage />} />
          <Route path="/create-recipe" element={<RequestRecipePage />} />
          <Route path="/recipe" element={<RecipePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
