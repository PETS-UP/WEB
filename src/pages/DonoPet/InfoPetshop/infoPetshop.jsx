import api from "../../../api";
import Menu from "../../../components/Base/Menu/menu";
import React, { useEffect } from "react";
import '../../stylepadrao.css';
import '../InfoPetshop/styleinfopetshop.css';
import { useState } from "react";
import { useParams } from 'react-router-dom'

export default function infoPetshop() {
    
    const { id } = useParams();

    function agendarServico() {
        api
        .post(
          "/servicos",
          {},
          {
            params: {
              idCliente: sessionStorage.ID_CLIENTE,
            },
            headers: {
              Authorization: `Bearer ${sessionStorage.JWT}`,
            },
          }
        )
        .then(({ data }) => {
          console.log(data);
          setListaServicos(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return(
        <div className="container-main">
        <Menu/>
           <div className="content">
               <div className="header-content-info-petshop">

               {/*<div className="cards-petshop">
                    {petshops.map((petshop) => (
                        <React.Fragment key={petshop.id}>
                        <CardPetshop 
                            id={petshop.id}
                            nome={petshop.nome}
                            servicos={petshop.servicos}
                            preco={petshop.preco}
                            distancia={petshop.distancia}
                            tempo={petshop.tempo}
                            status={petshop.status}
                            imagem={petshop.imagem}
                        />  
                        </React.Fragment>
                    ))}
                    </div>*/}
               </div>

               <div className="info-petshop-servicos">
                    <p>Selecione o Serviço</p>
                    <div className="info-petshop-card-servicos">
                        <button>Banho</button>
                        <button>Tosa</button>
                        <button>Banho & Tosa</button>
                    </div>                        
                </div>

                <div className="info-petshop-agenda">
                    <p>Selecione a Data</p>
                    <div className="info-petshop-card-agenda">
                        
                    </div>
                </div>

            </div>
        </div>
    )
}