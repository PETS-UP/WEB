import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import api from "../../../../api";

export default function LineChart() {

    const [dadosLine, setDadosLine] = useState([]);
    const [date, setDate] = useState(new Date);

    useEffect(() => {
        api
            .get(`/dashboard/${sessionStorage.ID_PETSHOP}/renda-ultimos-meses`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.JWT}`,
                },
            })
            .then((resposta) => {
                setDadosLine(resposta.data);
                console.log(resposta.data);
            })
            .catch((erro) => {
                console.log(erro);
            })
    }, [])

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
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

    const labels = [];

    let aux = 0;
    let months = 5
    var meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ];

    dadosLine.map(() => {
        labels[aux++] = meses[date.getMonth() - months--] + '/' + date.getFullYear();
    })

    const data = {
        labels,
        datasets: [
            {
                label: 'Receita dos últimos meses',
                data: dadosLine.map((receita) => {
                    return receita;
                }),
                borderColor: '#F49C63',
                backgroundColor: '#F49C63',
            },
        ],
    };

    return (
        <Line options={options} data={data} />
    )
}