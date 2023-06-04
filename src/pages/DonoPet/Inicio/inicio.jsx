import api from "../../../api";
import Menu from "../../../components/Base/Menu/menu";
import '../Inicio/styleinicio.css';
import React, { useEffect } from "react";
import '../../stylepadrao.css';
import { useState } from "react";
import CardPetshop from "../../../components/Base/CardPetshop/CardPetshop";

export default function Inicio() {
    useEffect(() => {
        api.get('/petshops')
            .then((resposta) => {
                setPetshops(resposta.data);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, []);

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
          console.log("Geolocalização não suportada pelo navegador.");
        }
      }
    
      function successCallback(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
    
        console.log("Latitude: " + latitude);
        console.log("Longitude: " + longitude);
      }
    
      function errorCallback(error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.log("Permissão para obter localização negada pelo usuário.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.log("Informações de localização não estão disponíveis.");
            break;
          case error.TIMEOUT:
            console.log("Tempo limite da requisição para obter localização foi atingido.");
            break;
          case error.UNKNOWN_ERROR:
            console.log("Erro desconhecido ao obter localização.");
            break;
        }
      }
    

    const [petshops, setPetshops] = useState([]);

    return (
        <div className="container-main">
            
            <Menu/>
            <div className="content">
                <div className="filter">
                    <div className="filter-header">
                       <button><img className="image-button" src="/src/assets/icons/ICON-BUSCA.png"/></button><input type="search" name="busca" placeholder="Digite aqui o nome do petshop"/>
                    </div>
                    <div className="filter-buttons">
                        <button>Melhores preços</button>
                        <button>Melhores avaliações</button>
                        <button>Próximos de mim</button>
                        <button>Meus favoritos</button>
                    </div>
                </div>

                <div className="cards-petshop">
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
                </div>
            </div>
        </div>
    )
}