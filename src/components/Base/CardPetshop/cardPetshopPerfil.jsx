import api from '../../../api';
import React from "react";
import './styleCardPetshop.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Avaliacao from '../../Avaliacao/avaliacao';
import FavoriteButton from '../../Favorito/favorito';

const CardPetshopPerfil = ({ id, imagem, nome, servicos, preco, status }) => {

    const [estrelas, setEstrelas] = useState(
        parseInt(localStorage.getItem('estrelas')) || 0
    );

    const handleStarClick = (stars) => {
        setEstrelas(stars);
    };

    const navigate = useNavigate()

    function acessPetshop() {
        navigate(`/info-petshop-cliente/${id}`)
    }

    return (
        <>
            <div className="card-items-petshop">
                <div onClick={acessPetshop} className="card-image-petshop"><img src={imagem} /></div>
                <div className="card-info-petshop">
                    <div onClick={acessPetshop} className="card-info-petshop-title">
                        <div className="info-petshop-title-perfil">
                            <p>{nome}</p>
                            <div className="app">
                                <FavoriteButton />
                            </div>
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
                        <div className="petshop-content-subtitle-perfil">
                            <div className="petshop-content-status">
                                <p>{status}</p>
                            </div>
                            <div>
                                <Avaliacao
                                    totalStars={5}
                                    estrelas={estrelas}
                                    onStarClick={handleStarClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardPetshopPerfil;