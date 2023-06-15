import api from "../../../api";
import Menu from "../../../components/Base/Menu/menu";
import React, { useEffect } from "react";
import "../../stylepadrao.css";
import "../InfoPetshop/styleinfopetshop.css";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function infoPetshop() {
  const { id } = useParams();

  const [idPet, setIdPet] = useState();
  const [idServico, setIdServico] = useState();
  const [listaServicos, setListaServicos] = useState([]);

  useEffect(() => {
    api
      .get("/servicos", {
        params: {
          idPetshop: id,
        },
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setListaServicos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function agendarServico() {
    api
      .post(
        "/agendamentos",
        {},
        {
          params: {
            idCliente: sessionStorage.ID_CLIENTE,
            idPetshop: id,
            idPet: idPet,
            idServico: idServico,
          },
          headers: {
            Authorization: `Bearer ${sessionStorage.JWT}`,
          },
        }
      )
      .then(({ data }) => {
        console.log("funcionou")
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container-main">
      <Menu />
      <div className="content">

        <div className="info-petshop-servicos">
          <p>Selecione o Serviço</p>
          <div className="info-petshop-card-servicos">
            {
                listaServicos.map((servico) => (
                    <button>{servico.nome}</button>
                ))
            }
          </div>
        </div>

        <div className="info-petshop-agenda">
          <p>Selecione a Data</p>
          <div className="info-petshop-card-agenda"></div>
        </div>
      </div>
    </div>
  );
}
