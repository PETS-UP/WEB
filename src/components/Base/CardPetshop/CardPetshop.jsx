import api from '../../../api';
import React from "react";
import './styleCardMenu.css'
import { useState } from 'react';

const CardPetshop = () => {

    const [nome, setNome] = useState("");
    const [servicos, setServicos] = useState("");
    const [preco, setPreco] = useState("");
    const [distancia, setDistancia] = useState("");
    const [tempo, setTempo] = useState("");
    const [status, setStatus] = useState("");
    const [imagem, setImagem] = useState("");

    return (
        <>
            <div className="card-items-petshop">
                <div className="card-image-petshop"><img src={imagem} /></div>
                <div className="card-info-petshop">
                    <div className="card-info-petshop-title">
                        <div className="info-petshop-title">
                            <p>{nome}</p>
                        </div>
                    </div>
                    <div className="card-info-petshop-content">
                        <div className="petshop-content-title">
                            <div className="petshop-content-servicos">
                                <p>{servicos}</p>
                            </div>
                            <div className="petshop-content-preco">
                                <p>{preco}</p>
                            </div>
                        </div>
                        <div className="petshop-content-subtitle">
                            <div className="petshop-content-distancia">
                                <p>{distancia}</p>
                            </div>
                            <div className="petshop-content-tempo">
                                <p>{tempo}</p>
                            </div>
                            <div className="petshop-content-status">
                                <p>{status}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardPetshop;