import React from "react";
import './styleCardPetshop.css';
import Avaliacao from '../../Avaliacao/avaliacao';
import FavoriteButton from '../../Favorito/favorito';

const CardPetshopPerfil = ({ id, imagem, nome, servicos, preco, status, estrelas, handleStarClick, isFavorite, toggleFavorite }) => {

    return (
        <>
            <div className="card-items-petshop">
                <div className="card-image-petshop"><img src={imagem} /></div>
                <div className="card-info-petshop">
                    <div className="card-info-petshop-title">
                        <div className="info-petshop-title-perfil">
                            <p>{nome}</p>
                            <div className="app">
                                <FavoriteButton
                                    isFavorite={isFavorite}
                                    toggleFavorite = {toggleFavorite}
                                />
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
                                    id={id}
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