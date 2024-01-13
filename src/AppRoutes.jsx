import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.jsx";
import RecipeCreationPage from "./components/RecipeCreationPage.jsx";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<WelcomePage />} />
          <Route path="/create-recipe" element={<RecipeCreationPage />} />
          {/* 
          <Route path="/:name" element={<UserProfile />} />
          <Route path="/:name/my-recipes/" element={<MyRecipesPage />} />
          <Route path="/:name/my-recipes/:category" element={<MyRecipesPage />} />
          <Route path="/:name/my-recipes/:id" element={<RecipeDetailsPage />} />
          <Route path="/:name/my-recipes/favorites" element={<FavoriteRecipesPage />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
