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
import Inicio from "./pages/DonoPet/Inicio/inicio";
import LoginEmpresa from "./pages/Petshop/Login/Login";
import CadastroEmpresa from "./pages/Petshop/Cadastro/Cadastro";

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
    path: "/Inicio",
    element: <Inicio />
  },
  {
    path: "/LoginEmpresa",
    element: <LoginEmpresa />
  },
  {
    path: "/CadastroEmpresa",
    element: <CadastroEmpresa />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);