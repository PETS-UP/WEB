import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import 'react-tooltip/dist/react-tooltip.css'
import Home from "./pages/Institucional/home";
import Login from "./pages/DonoPet/Login/login";
import Cadastro from "./pages/DonoPet/Cadastro/cadastro";
import Inicio from "./pages/DonoPet/Inicio/inicio";
import LoginEmpresa from "./pages/Petshop/Login/Login";
import CadastroEmpresa from "./pages/Petshop/Cadastro/CadastroEmpresa";
import MeusPets from "./pages/DonoPet/MeusPets/meusPets";
import Perfil from "./pages/DonoPet/Perfil/perfil";
import InfoPetshop from "./pages/DonoPet/InfoPetshop/infoPetshop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login-cliente",
    element: <Login />
  },
  {
    path: "/cadastro-cliente",
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
    path: "/meusPets",
    element: <MeusPets />
  },
  {
    path: "/perfil-cliente",
    element: <Perfil />
  },
  {
    path: "/info-petshop-cliente",
    element: <InfoPetshop />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);