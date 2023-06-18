import React, { useState, useEffect } from "react";

import api from "../../../api";
import Menu from "../../../components/Base/Menu/menuPetshop";

import "../Dashboard/dashboard.css";
import "../../stylepadrao.css";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import Card from "./components/Card";

const Dashboard = () => {
  const [diaMovimentado, setDiaMovimentado] = useState();
  const [diaNaoMovimentado, setDiaNaoMovimentado] = useState();
  const [rendaMesAtual, setRendaMesAtual] = useState();
  const [servicoMaisAgendado, setServicoMaisAgendado] = useState();

  const handleMaiorMovimento = async () => {
    api
      .get(`/dashboard/${sessionStorage.ID_PETSHOP}/dia-mais-movimentado`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((resposta) => {
        setDiaMovimentado(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const handleMenorMovimento = async () => {
    api
      .get(`/dashboard/${sessionStorage.ID_PETSHOP}/dia-menos-movimentado`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((resposta) => {
        setDiaNaoMovimentado(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const handleRendaMesAtual = async () => {
    api
      .get(`/dashboard/${sessionStorage.ID_PETSHOP}/renda-este-mes`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((resposta) => {
        setRendaMesAtual(resposta.data);
      }).catch((erro) => {
        console.log(erro);
      })
  }

  const handleServicoMaisAgendado = async () => {
    api
      .get(`/dashboard/${sessionStorage.ID_PETSHOP}/servico-mais-agendado`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((resposta) => {
        setServicoMaisAgendado(resposta.data);
      }).catch((erro) => {
        console.log(erro);
      })
  }

  useEffect(() => {
    handleMaiorMovimento();
    handleMenorMovimento();
    handleRendaMesAtual();
    handleServicoMaisAgendado();
  }, []);

  return (
    <div className="container-main-meus-pets">
      <Menu />
      <div className="main-content-dashboard">
        <div className="div-dados-dashboard">
          <Card
            title={"Maior movimento"}
            value={diaMovimentado}
          />
          <Card
            title={"Menor movimento"}
            value={diaNaoMovimentado}
          />
          <Card
            title={"Serviço mais solicitado"}
            value={servicoMaisAgendado}
          />
          <Card
            title={"Ganhos deste mês"}
            value={typeof rendaMesAtual === 'number' && `R$${rendaMesAtual.toFixed(2)}`}
          />
        </div>
        <div className="div-dados-dashboard">
          <div className="grafico-dashboard-2">
            <div className="div-container-grafico">
              <BarChart />
            </div>
            <div className="div-container-grafico">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
