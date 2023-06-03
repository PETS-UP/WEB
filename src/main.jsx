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
import CadastroEmpresa from "./pages/Petshop/Cadastro/CadastroEmpresa";
import MeusPets from "./pages/DonoPet/MeusPets/meusPets";
import CadastrarPet from "./pages/DonoPet/CadastrarPet/cadastroPet"
import Calendario from "./components/Calendario/calendario";


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
    path: "/inicio",
    element: <Inicio />
  },
  {
    path: "/login-empresa",
    element: <LoginEmpresa />
  },
  {
    path: "/cadastro-empresa",
    element: <CadastroEmpresa />
  },
  {
    path: "/meus-pets",
    element: <MeusPets />
  },
  {
    path: "/cadastrar-pet",
    element: <CadastrarPet />
  },
  {
    path: "/cadastrar-pet",
    element: <CadastrarPet />
  },
  {
    path: "/calendario-pet",
    element: <Calendario />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);