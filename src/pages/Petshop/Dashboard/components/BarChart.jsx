import React, { useEffect, useState } from "react";
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

import api from "../../../../api";

export default function BarChart() {

    const [dadosDash, setDadosDash] = useState([]);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
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
    }, []);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

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
        },
    };

    let contador = 6;
    let aux = 0;
    dadosDash.map(() => {
        labels[aux++] =
            date.getDate() -
            contador-- +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear();
    });

    return (
        <Bar className="line-chart" options={options} data={chartData} />
    )
}