import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import App from "./App";
import Home from "./pages/Home";
import CreateRecipe from "./pages/CreateRecipe";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserProfil from "./pages/UserProfile";

import PanelAdmin from "./pages/userAdmin/PanelAdmin";
import User from "./pages/User";

import Buffet from "./pages/leBuffet/Buffet";

import TheRecipes from "./pages/TheRecipes";
import RecipesInstruction from "./pages/RecipesInstruction";

import "./styles/main.css";

const combinedLoader = async () => {
  try {
    const [difficultiesResponse, ingredientsResponse] = await Promise.all([
      axios.get(`${import.meta.env.VITE_API_URL}/api/difficulty`),
      axios.get(`${import.meta.env.VITE_API_URL}/api/ingredients`),
    ]);

    console.info(ingredientsResponse);

    return {
      difficulties: difficultiesResponse.data,
      ingredients: ingredientsResponse.data,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/create-recipe",
        element: <CreateRecipe />,
        loader: combinedLoader,
      },
      {
        path: "/user-profil",
        element: <UserProfil />,
      },
      {
        path: "/panel-admin",
        element: <PanelAdmin />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/buffet",
        element: <Buffet />,
      },
      {
        path: "/recipes",
        element: <TheRecipes />,
      },
      {
        path: "/recipes-instruction",
        element: <RecipesInstruction />,
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
