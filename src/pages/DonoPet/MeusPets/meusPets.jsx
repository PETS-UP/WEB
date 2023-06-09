import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../../../api";
import Menu from "../../../components/Base/Menu/menu";
import LinhaTabelaPets from "../../../components/LinhaTabela/linhaTabelaPets";
import InputArquivo from "../../../components/InputArquivo/inputArquivo";
import { ToastComponent } from "../../../components/Toast/Toast";

import DOGGO from "../../../assets/icons/DOGHI-ICON.png";
import iconBusca from "../../../assets/icons/ICON-BUSCA.png";

import "../MeusPets/meusPets.css";

export default function meusPets() {
  const [listaPets, setListaPets] = useState([]);
  const [file, setFile] = useState();
  const [IsButtonDisabled, setIsButtonDisabled] = useState(true);

  const fetchMyPets = () => {
    api
      .get("/pets", {
        params: {
          idCliente: sessionStorage.ID_CLIENTE,
        },
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setListaPets(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMyPets();
  }, []);

  const navigate = useNavigate();

  const cadastrarPetPorTxt = useCallback(() => {
    if (!file) {
      console.log("Nenhum arquivo selecionado");
    }

    const pet = new FormData();
    pet.append("arquivo", file);

    api
      .post("/pets/upload", pet, {
        params: {
          idCliente: sessionStorage.ID_CLIENTE,
        },
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        ToastComponent({
          title: "Pet cadastrado com sucesso!",
          icon: "success"
        });
        setTimeout(() => {
          navigate("/meus-pets");
        }, "2000")
      })
      .catch((error) => {
        console.log(error);
        ToastComponent({
          title: "Erro ao enviar arquivo.",
          icon: "error"
        });
      });
  }, [file]);

  useEffect(() => {
    setIsButtonDisabled(!file);
  }, [file]);

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
        ToastComponent({
          title: "Pet deletado com sucesso!",
          icon: "success"
        });
      })
      .catch((error) => {
        console.log(error);
        ToastComponent({
          title: "Não foi possível deletar.",
          text: "O pet ainda tem agendamentos pendentes.",
          icon: "warning"
        });
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
                  src={iconBusca}
                />
              </button>

            </div>

          </div>

          <div className="content-enviar-arquivo-meus-pets-cheio">
            <div className="btn-adc-pet">

              <button onClick={() => navigate("/cadastrar-pet")}>
                ADICIONAR PET +
              </button>

            </div>
            <div className="btn-import-meus-pets-cheio">
              <InputArquivo onFileUploaded={setFile} />
              <button
                className="btn-enviar-arquivo"
                onClick={cadastrarPetPorTxt}
                disabled={IsButtonDisabled}
              >
                Enviar
              </button>
            </div>

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
                {listaPets.map((pet) => (
                  <React.Fragment key={pet.id}>
                    <LinhaTabelaPets
                      id={pet.id}
                      nome={pet.nome}
                      especie={pet.especie}
                      sexo={pet.sexo}
                      deletarPet={deletarPet}
                    />
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="div-pet-empty">
          <div className="img-doggo-meus-pets">
            <img src={DOGGO} alt="" />
          </div>
          <span>Parece que você ainda não cadastrou nenhum pet :c</span>
          <div className="botoes-cadastro-importacao-meus-pets">
            <Link to="/cadastrar-pet">
              <button>Adicionar Pet +</button>
            </Link>
            <div className="content-enviar-arquivo-meus-pets">
              <InputArquivo onFileUploaded={setFile} />
              <button
                className="btn-enviar-arquivo"
                onClick={cadastrarPetPorTxt}
                disabled={IsButtonDisabled}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
