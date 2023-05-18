import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Home from "./pages/Institucional/home";
import Login from "./pages/DonoPet/Login/login";
import Cadastro from "./pages/DonoPet/Cadastro/cadastro";
import MeusPets from "./pages/DonoPet/MeusPets/meusPets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/meusPets",
    element: <MeusPets />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);