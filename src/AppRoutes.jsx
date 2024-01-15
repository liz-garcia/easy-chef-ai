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
          {/* 
          <Route path="/:name" element={<UserProfile />} />
          <Route path="/:name/my-recipes/" element={<MyRecipesPage />} />
          <Route path="/:name/my-recipes/:category" element={<MyRecipesPage />} />
          <Route path="/:name/my-recipes/favorites" element={<FavoriteRecipesPage />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
