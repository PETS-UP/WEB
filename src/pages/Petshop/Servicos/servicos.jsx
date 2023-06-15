import "../Servicos/servicos.css";
import Menu from "../../../components/Base/Menu/menuPetshop";
import "../../stylepadrao.css";
import React, { useState, useEffect } from "react";
import api from "../../../api";

const Servicos = () => {
  const [listaServicos, setListaServicos] = useState([]);

  function adicionarServico() {
    useEffect(() => {
      api
        .post(
          "/servicos",
          {},
          {
            params: {
              idPetshop: sessionStorage.ID_PETSHOP,
            },
            headers: {
              Authorization: `Bearer ${sessionStorage.JWT}`,
            },
          }
        )
        .then(({ data }) => {
          console.log(data);
          setListaServicos(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  }

  return (
    <div className="container-main-meus-pets">
      <Menu />
      <div className="content-meus-pets">
        <div className="titulo-meus-pets">
          <h2>Meus Serviços</h2>
        </div>

        <div className="selecionaveis-meus-pets">
          <button>ADICIONAR SERVIÇO +</button>
        </div>

        <div className="tabela-meus-pets">
          <table className="table-container">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
