import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CategoryDetails from "./components/CategoryDetails/CategoryDetails.jsx";
import MealDetails from "./components/MealDetails/MealDetails.jsx";
import Categories from "./components/Categories/Categories.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Categories></Categories>,
    loader: () =>
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
  },

  {
    path: "/category/:name",
    element: <CategoryDetails></CategoryDetails>,
    loader: ({ params }) =>
      fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`
      ),
  },
  {
    path: "/meal/:id",
    element: <MealDetails></MealDetails>,
    loader: ({ params }) =>
      fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
      ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
