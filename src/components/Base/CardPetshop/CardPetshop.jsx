import api from '../../../api';
import React from "react";
import './styleCardPetshop.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import icon_star from "../../../assets/icons/icon_star.svg";

const CardPetshop = ({ id, imagem, nome, servicos, status, nota, rua, numero }) => {

    const navigate = useNavigate()

    function accessPetshop() {
        navigate(`/info-petshop-cliente/${id}`)
    }

    return (
        <>
            <div className="card-items-petshop">
                <div onClick={accessPetshop} className="card-image-petshop"><img src={imagem} /></div>
                <div className="card-info-petshop">
                    <div onClick={accessPetshop} className="card-info-petshop-title">
                        <div className="info-petshop-title">
                            <p>{nome}</p>
                        </div>
                    </div>
                    <div className="card-info-petshop-content">
                        <div className="petshop-content-title">
                            <div className="petshop-content-local">
                                <p>{rua}, {numero}</p>
                            </div>
                            <div className="petshop-content-servicos">
                                <p>{servicos}</p>
                            </div>
                            <div className="petshop-content-status">
                                <p>{status}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="petshop-content-rating">
                    <img src={icon_star}></img>
                    <p>{nota}</p>
                </div>
            </div>
        </>
    );
}

export default CardPetshop;