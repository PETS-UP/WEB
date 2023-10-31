import React from "react";
import './styleCardPetshop.css';
import Avaliacao from '../../Avaliacao/avaliacao';
import FavoriteButton from '../../Favorito/favorito';

const CardPetshopPerfil = ({ id, imagemPerfil, nome, telefone, status, rua, numero, estrelas, handleStarClick, isFavorite, toggleFavorite }) => {

    function formatarNumeroTelefone(numero) {
        if (numero && numero.length === 11) {
          const codigoArea = numero.substring(0, 2);
          const parte1 = numero.substring(2, 7);
          const parte2 = numero.substring(7);
      
          return `(${codigoArea}) ${parte1}-${parte2}`;
        } else {
          return numero;
        }
      }

    return (
        <>
            <div className="card-items-petshop">
                <div className="card-image-petshop"><img src={imagemPerfil} /></div>
                <div className="card-info-petshop-2">
                    <div className="card-info-petshop-content-2">
                        <div className="petshop-content-title">
                            <div className="info-petshop-title-perfil">
                                <p>{nome}</p>
                            </div>
                            <div className="petshop-content-local">
                                <p>{rua}, {numero}</p>
                            </div>
                            <div className="petshop-content-servicos">
                                <p>{formatarNumeroTelefone(telefone)}</p>
                            </div>
                            <div className="petshop-content-status">
                                <p>{status}</p>
                            </div>
                        </div>
                    </div>
                    <div className="petshop-content-subtitle-perfil">
                        <div className="app">
                            <FavoriteButton
                                isFavorite={isFavorite}
                                toggleFavorite={toggleFavorite}
                            />
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
        </>
    );
}

export default CardPetshopPerfil;