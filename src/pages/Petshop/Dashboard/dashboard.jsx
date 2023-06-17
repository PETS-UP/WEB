import React, {useState, useEffect} from "react";

import api from "../../../api"
import Menu from "../../../components/Base/Menu/menuPetshop";

import "../Dashboard/dashboard.css";
import '../../stylepadrao.css';

const Dashboard = () => {

    const [dadosDash, setDadosDash] = useState();

    const handleDashboard = async () => {
        api.get(`/dashboard/ultima-semana`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.JWT}`
            }
        })
            .then((resposta) => {
                setDadosDash(resposta.data);
            })
            .catch((erro) => {
                console.log(erro);
            });

    }


    useEffect(() => {
        handleDashboard();
    }, [])


    useEffect(() => {
        console.log(dadosDash);
    }, [dadosDash])

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
                    <p className="value-dashboard">Segunda-Feira</p>
                </div>
            </div>
            <div className="div-dados-dashboard">
                <div className="grafico-dashboard">
                    
                </div>
                <div className="metricas-dashboard">
                <p className="title-metrica">Menor movimento</p>
                    <p className="value-dashboard">Domingo</p>
                </div>
            </div>
            <div className="div-dados-dashboard">
                <div className="grafico-dashboard-2">
                
                </div>
            </div>
        </div>
    </div >
    );
}

export default Dashboard;