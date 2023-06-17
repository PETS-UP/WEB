import "../Servicos/servicos.css";
import Menu from "../../../components/Base/Menu/menuPetshop";
import "../../stylepadrao.css";
import React, { useState, useEffect } from "react";
import api from "../../../api";
import { useRef } from "react";
import { Modal } from "react-bootstrap";
import ModalServico from "./components/modal/ModalServico";
import LinhaTabelaServico from "../../../components/LinhaTabela/linhaTabelaServico";

const Servicos = () => {
  const [listaServicos, setListaServicos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [dadosEdit, setDadosEdit] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setIsEdit(false);
    listarServicoes();
  };
  const handleShow = () => setShow(true);
  const handleShowEdit = (value) => { setDadosEdit(value); setShow(true); setIsEdit(true); };

  function listarServicoes() {
    api
      .get("/servicos", {
        params: {
          idPetshop: sessionStorage.ID_PETSHOP,
        },
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((response) => {
        setListaServicos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    listarServicoes();
  }, []);

  return (

    <div className="container-main-meus-pets">

      <Menu />

      <div className="content-meus-pets">

        <div className="titulo-meus-pets">
          <h2>Meus Serviços</h2>
        </div>

        <div className="selecionaveis-meus-pets">
          <button onClick={handleShow}>ADICIONAR SERVIÇO +</button>
        </div>

        <div
          className="tabela-meus-pets"
          style={{
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            maxHeight: 600,
          }}
        >
          <table className="table-container">

            <thead>
              <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Descrição</th>
                <th>Editar</th>
              </tr>
            </thead>

            <tbody>
              {listaServicos.length > 0 &&
                listaServicos.map((dados, index) => (
                  <LinhaTabelaServico
                    key={index}
                    id={dados.id}
                    nome={dados.nome}
                    preco={dados.preco}
                    descricao={dados.descricao}
                    handleEdit={handleShowEdit}
                  />
                ))}
            </tbody>

          </table>

        </div>
      </div>
      <ModalServico show={show} handleClose={handleClose} isEdit={isEdit} dados={dadosEdit}/>
    </div>
  );
};

export default Servicos;
