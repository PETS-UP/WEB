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
import { getMonth } from "date-fns";

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
  const [dadosDashLine, setDadosDashLine] = useState([]);
  const [diaMovimentado, setDiaMovimentado] = useState();
  const [diaNaoMovimentado, setDiaNaoMovimentado] = useState();
  const [rendaMesAtual, setRendaMesAtual] = useState();
  const [servicoMaisAgendado, setServicoMaisAgendado] = useState();
  const [date, setDate] = useState(new Date());
  let contador = 6;

  const handleDashboard = async () => {
    api
      .get(`/dashboard/${sessionStorage.ID_PETSHOP}/ultima-semana`, {
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

  const handleDashboardLine = async () => {
    api
      .get(`/dashboard/${sessionStorage.ID_PETSHOP}/renda-ultimos-meses`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.JWT}`,
        },
      })
      .then((resposta) => {
        setDadosDashLine(resposta.data);
        console.log(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      })
  }

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
    handleDashboard();
  }, [dadosDash]);

  useEffect(() => {
    handleDashboardLine();
  }, [dadosDashLine]);

  useEffect(() => {
    handleMaiorMovimento();
  }, [diaMovimentado]);

  useEffect(() => {
    handleMenorMovimento();
  }, [diaNaoMovimentado]);

  useEffect(() => {
    handleRendaMesAtual();
  }, [rendaMesAtual]);

  useEffect(() => {
    handleServicoMaisAgendado();
  }, [servicoMaisAgendado]);

  const labels = [];

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

  let aux = 0;
  dadosDash.map(() => {
    labels[aux++] =
      date.getDate() -
      contador-- +
      "/" +
      date.getMonth() +
      "/" +
      date.getFullYear();
  });

  return (
    <div className="container-main-meus-pets">
      <Menu />
      <div className="main-content-dashboard">
        <div className="div-dados-dashboard">
          <div className="metricas-dashboard">
            <p className="title-metrica">Maior movimento</p>
            <p className="value-dashboard">{diaMovimentado}</p>
          </div>
          <div className="metricas-dashboard">
            <p className="title-metrica">Menor movimento</p>
            <p className="value-dashboard">{diaNaoMovimentado}</p>
          </div>
          <div className="metricas-dashboard">
            <p className="title-metrica">Serviço mais solicitado</p>
            <p className="value-dashboard">{servicoMaisAgendado}</p>
          </div>
          <div className="metricas-dashboard">
            <p className="title-metrica">Ganhos deste mês</p>
            <p className="value-dashboard">{rendaMesAtual}</p>
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
