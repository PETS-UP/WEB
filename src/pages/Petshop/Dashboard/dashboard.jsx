import React, { useState, useEffect } from "react";

import api from "../../../api";
import Menu from "../../../components/Base/Menu/menuPetshop";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "../Dashboard/dashboard.css";
import "../../stylepadrao.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [dadosDash, setDadosDash] = useState([]);
  const [diaMovimentado, setDiaMovimentado] = useState();
  const [diaNaoMovimentado, setDiaNaoMovimentado] = useState();

  const handleDashboard = async () => {
    api
      .get(`/dashboard/ultima-semana`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((resposta) => {
        setDadosDash(resposta.data);
        console.log(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const handleMaiorMovimento = async () => {
    api
      .get(`/dashboard/dia-mais-movimentado`, {
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
      .get(`/dashboard/dia-menos-movimentado`, {
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

  useEffect(() => {
    handleDashboard();
  }, []);

  useEffect(() => {
    console.log(dadosDash);
  }, [dadosDash]);

  useEffect(() => {
    handleMaiorMovimento();
  }, [diaMovimentado]);

  useEffect(() => {
    handleMenorMovimento();
  }, [diaNaoMovimentado]);

  const labels = [
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sábado",
  ];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Agendamento semanal",
        backgroundColor: "#7e2c61",
        data: dadosDash.map((dados) => {
          return dados;
        }),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            family: "Signika",
            size: 16,
            weight: "bold",
          },
        },
      },
      title: {
        display: true,
      },
    },
  };

  return (
    <div className="container-main-meus-pets">
      <Menu />
      <div className="main-content-dashboard">
        <div className="div-dados-dashboard">
          <div className="metricas-dashboard">
            <p className="title-metrica">Serviço mais solicitado</p>
            <p className="value-dashboard">Banho</p>
          </div>
          <div className="metricas-dashboard">
            <p className="title-metrica">Quantidade de serviços solicitados</p>
            <p className="value-dashboard">21</p>
          </div>
          <div className="metricas-dashboard">
            <p className="title-metrica">Maior movimento</p>
            <p className="value-dashboard">{diaMovimentado}</p>
          </div>
          <div className="metricas-dashboard">
            <p className="title-metrica">Menor movimento</p>
            <p className="value-dashboard">{diaNaoMovimentado}</p>
          </div>
        </div>
        <div className="div-dados-dashboard">
          <div className="grafico-dashboard-2">
            <div className="div-container-grafico">
              <Bar className="line-chart" options={options} data={chartData} />
            </div>
            <div className="div-container-grafico">
              <Bar className="line-chart" options={options} data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
