import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FilterPage from "./pages/FilterPage";
import LandingPage from "./pages/LandingPage";
import RecipeDetailsPage from "./pages/recipeDetails/RecipeDetailsPage";
import SearchResultsPage from "./pages/SearchResults/SearchResultsPage";
import CatalogPage from "./pages/catalog/CatalogPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/search",
        element: <FilterPage />,
      },
      {
        path: "/search-results",
        element: <SearchResultsPage />,
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetailsPage />,
      },
      {
        path: "/recipe-list",
        element: <CatalogPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
