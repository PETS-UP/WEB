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
import CadastrarPet from "./pages/DonoPet/CadastrarPet/cadastroPet"
import MeusPedidos from "./pages/Petshop/MeusPedidos/meusPedidos";
import Perfil from "./pages/DonoPet/Perfil/perfil";
import InfoPetshop from "./pages/DonoPet/InfoPetshop/infoPetshop";
import MenuPetshop from "./components/Base/Menu/menuPetshop";
import PerfilPetshop from "./pages/Petshop/PerfilPetshop/perfilPetshop";

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
    path: "/meus-pets",
    element: <MeusPets />
  },
  {
    path: "/cadastrar-pet",
    element: <CadastrarPet />
  },
  {
    path: "/meus-pedidos",
    element: <MeusPedidos />
  },
  {
    path: "/perfil-cliente",
    element: <Perfil />
  },
  {
    path: "/info-petshop-cliente",
    element: <InfoPetshop />
  },
  {
    path: "/menu-petshop",
    element: <MenuPetshop />
  },
  {
    path: "/perfil-petshop",
    element: <PerfilPetshop />
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);