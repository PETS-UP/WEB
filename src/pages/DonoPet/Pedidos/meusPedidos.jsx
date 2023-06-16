import React, { useEffect, useState } from "react";

import api from "../../../api";
import Menu from "../../../components/Base/Menu/menu";
import LinhaTabela from "../../../components/LinhaTabela/linhaTabela";

import "./meusPedidos.css";

const MeusPedidos = () => {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    api
      .get("/agendamentos/cliente", {
        params: {
            idCliente: sessionStorage.ID_CLIENTE
        },
        headers: {
            Authorization: `Bearer ${sessionStorage.JWT}`
        }
    })
      .then(({ data }) => {
        console.log(data);
        setAgendamentos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="content-main-meus-agendamentos">
      <Menu />

      <div className="container-main-pedidos-cliente">
        <div className="titulo-pedidos-cliente">
          <h2>Meus Pedidos</h2>
          <div className="borda-pedidos-cliente"></div>
        </div>

        <div className="itens-pedidos-cliente">
          <table className="table-container">
            <thead>
              <tr>
                <th>Pet</th>
                <th>Serviço</th>
                <th>Data Hora</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {
                agendamentos.length > 0 ?
                agendamentos.map((agendamento) => (
                  <React.Fragment key={agendamento.id}>
                    <LinhaTabela
                      pet={agendamento.nomePet}
                      servico={agendamento.servico}
                      dataHora={agendamento.dataHora}
                      preco={agendamento.preco}
                    />
                  </React.Fragment>
                )) :
                <span>Sem agendamentos por enquanto.</span>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MeusPedidos;
