import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../../../api";
import Menu from "../../../components/Base/Menu/menu";
import LinhaTabelaPets from "../../../components/LinhaTabela/linhaTabelaPets"

import DOGGO from "../../../assets/icons/DOGHI-ICON.png";

import "../MeusPets/meusPets.css";

export default function meusPets() {

  const [listaPets, setListaPets] = useState([]);

  useEffect(() => {
    api.get("/pets", {
        params: { 
          idCliente: sessionStorage.ID_CLIENTE
        },
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`
        }
      })
      .then(({ data }) => {
        console.log(data);
        setListaPets(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  function cadastrarPetPorTxt() {
    api.post("/pets/upload", {
      params: {
        
      },
      headers: {
        Authorization: `Bearer ${sessionStorage.JWT}`,
      },
    })

  }

  function deletarPet(id) {
    console.log(id);
    api
      .delete(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then(({ data }) => {
        setListaPets(listaPets.filter((pet) => pet.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container-main-meus-pets">
      <Menu />

      {listaPets.length != 0 ? (
        <div className="content-meus-pets">
          <div className="titulo-meus-pets">
            <h2>PETS CADASTRADOS</h2>
          </div>
          <div className="selecionaveis-meus-pets">
            <div className="filtro-pets">
              <label htmlFor="">Filtrar:</label>
              <select className="filtro-meus-pets" name="Filtrar" id="">
                <option value="nome">Nome</option>
                <option value="especie">Espécie</option>
                <option value="sexo">Sexo</option>
              </select>
            </div>
            <div className="buscar-meus-pets">
              <input type="search" name="busca" placeholder="Buscar..." />
              <button>
                <img
                  className="image-button"
                  src="/src/assets/icons/ICON-BUSCA.png"
                />
              </button>
            </div>
            <button onClick={() => navigate("/cadastrar-pet")}>
              ADICIONAR PET +
            </button>
            <button onClick={() => {}}>
              ADICIONAR PET VIA TXT
            </button>
          </div>
          <div className="tabela-meus-pets">
            <table className="table-container">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Espécie</th>
                  <th>Sexo</th>
                  <th>Excluir</th>
                </tr>
              </thead>
              <tbody>
                {
                  listaPets.map((pet) => (
                    <React.Fragment key={pet.id}>
                      <LinhaTabelaPets
                        id={pet.id}
                        nome={pet.nome}
                        especie={pet.especie}
                        sexo={pet.sexo}
                        deletarPet={deletarPet}
                      />
                    </React.Fragment>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="div-pet-empty">
          <div>
            <img src={DOGGO} alt="" />
          </div>
          <span>Parece que você ainda não cadastrou nenhum pet :c</span>
          <Link to="/cadastrar-pet">
            <button>Adicionar Pet +</button>
          </Link>
        </div>
      )}
    </div>
  );
}
